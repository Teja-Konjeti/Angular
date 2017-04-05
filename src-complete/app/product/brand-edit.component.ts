import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import { FormBuilder,
         FormGroup, 
         FormControl, 
         Validators, AbstractControl} from '@angular/forms';



 function BrandLengthValidator(control: AbstractControl): {
        [key: string]: boolean;
    } {

        console.log("Console ", control.value);
        let value:string = control.value || '';
        if (value.length >= 4)
        {
            return null;
        }
         
        return {
            invalidBrand: true
        };
    }

@Component({
    moduleId: module.id,
    templateUrl: 'templates/brand-edit.component.html'
})
export class BrandEditComponent implements OnInit {
    brandNameControl: FormControl;

    brand: any = {};

    constructor(private router: Router,
                private route:ActivatedRoute,
                private formBuilder: FormBuilder
    ) {
        //
        this.brandNameControl = new FormControl("", 
        Validators.compose([Validators.required, BrandLengthValidator]));


        this.form = formBuilder.group({
            "brandName" : this.brandNameControl
        });

        this.brandNameControl.valueChanges
        .filter ( (value: string) => (value || '').length > 2)
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe( (value: string) => {
            console.log("call search api in server  ", value);
        })
    }

    form:FormGroup;

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id:number = params["id"];
            let name:string = params["name"];

            console.log("number is ", id);
            console.log("name is ", name);
        });
    }

    ngOnDestroy() {

    }

    onSubmit() {
        console.log("On Submit");
    }

}