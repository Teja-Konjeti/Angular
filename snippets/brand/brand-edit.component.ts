import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import { FormBuilder,
         FormGroup, 
         FormControl, 
         Validators} from '@angular/forms';


@Component({
    templateUrl: 'app/brand/templates/brand-edit.component.html'
})
export class BrandEditComponent implements OnInit {
    brandNameControl: FormControl;

    brand: any = {};

    constructor(private router: Router,
                private route:ActivatedRoute,
                private formBuilder: FormBuilder
    ) {
        this.brandNameControl = new FormControl("");

        this.form = formBuilder.group({
            "brandName" : this.brandNameControl
        });

        this.brandNameControl.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe( (value: string) => {
            console.log("value changed ", value);
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