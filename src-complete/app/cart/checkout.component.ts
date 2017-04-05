import {Component, OnInit, Inject, Attribute} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {CartStorageService} from "../cart/cart.services";
import {Http, Response} from "@angular/http";

import {HttpClient} from "../auth/auth.http-client";

import { FormGroup, FormControl, Validators, 
    FormBuilder, Validator, AbstractControl } 
    from '@angular/forms';


import "rxjs/Rx";


 function CountryValidator(control: AbstractControl): {
        [key: string]: boolean;
    } {

        console.log("Console ", control.value);

        if (control.value === 'IN' || control.value === 'India') {
            return;
        }

        return {
            invalidCountry: true
        };
    }



@Component({
    moduleId: module.id, //disable this for webpack
    templateUrl: 'checkout.component.html'
})
export class CheckoutComponent implements OnInit {
    products: any = [];
    states:any = [];
    cities:any = [];

    form: FormGroup;

    fullNameControl:FormControl;
    stateControl:FormControl;
    cityControl:FormControl;
    countryControl:FormControl;

    address: any = {};
    offer : any = {};

    submitted:boolean = false;

    constructor(private cartStorageSevice: CartStorageService, 
                private route: ActivatedRoute,
                private httpClient: HttpClient,
                @Inject("apiEndPoint") private apiEndPoint: string,
                formBuilder: FormBuilder
    ) {
        this.products = cartStorageSevice.getProducts();

        this.fullNameControl = new FormControl("", Validators.required);
        this.stateControl = new FormControl("");
        this.cityControl = new FormControl("");
        this.countryControl = new FormControl("", CountryValidator);

         this.form = formBuilder.group({
            "fullName": this.fullNameControl,
            "state": this.stateControl,
            "city": this.cityControl,
            "country": this.countryControl
        });

      

    }

    generateLuckyCoupon() {
        let promise:Promise<string> = new Promise<string>(
            function(resolve, reject) {
                setTimeout(function(){
                    let n:number = Math.floor(Math.random() * 100);
                    if (n > 50 ) {
                        resolve(`Lucky${n}%`);
                    } else {
                        reject("Sorry, better luck next time")
                    }
                }, 2000);
            }
        );
        return promise;
    }

    ngOnInit() {     
        this.generateLuckyCoupon()
        .then(function(n){
            console.log("got value ", n);
        })
        .catch(function(err){
            console.log("got error ", err);
        })

       

        var self = this;

        Promise.all([
            this.httpClient.get(this.apiEndPoint + '/api/states')
            .map((response : Response) => response.json())
            .toPromise(),

            this.httpClient.get(this.apiEndPoint + '/api/cities')
            .map((response : Response) => response.json())
            .toPromise()
        ])
        .then(function(results){

            self.states = results[0];
            self.cities = results[1];
        })

        this.offer.discount = this.route.snapshot.params["discount"];
        this.offer.coupon = this.route.snapshot.params["coupon"];


        this.stateControl.valueChanges
        .filter ( (value:any) => value)
        .subscribe ( (value: any) => {
            this.httpClient.get(this.apiEndPoint + '/api/cities?stateId=' + value)
            .map((response : Response) => response.json())
            .subscribe((cities: any[]) => {
                this.cities = cities;
            })
        });
    }

    onSubmit() {
        this.submitted = true;
    }

    isSaved() {
        return this.submitted;
    }
}