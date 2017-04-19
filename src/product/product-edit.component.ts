import { Component, OnInit,ViewChild } from '@angular/core';
import {ProductService} from "../app/interfaces";
import {ActivatedRoute,Router} from "@angular/router";

import {FormsModule} from "@angular/forms";

import {NgForm} from "@angular/forms";

import {ProductWebService} from "./product.service";
@Component({
    moduleId: module.id,
    templateUrl: 'product-editcomponent.html',

    styleUrls:[

        'product-edit.component.css'
    ],
    providers : [
        {
provide: ProductService,
useClass: ProductWebService
        }

    ]
    
})

export class ProductEditComponent implements OnInit {
    constructor(private route:ActivatedRoute,private router:Router,
    private productService:ProductService) { }
    product :any = {};

    brands: any[] = [];

    @ViewChild("productForm")
    form:NgForm;

    ngOnInit() { 

        let id = this.route.snapshot.params["id"];
        console.log("id",id);


        this.productService.getProduct(id).then((product:any)=>{
            this.product = product;
        })

        this.productService.getBrands().then((brands:any[])=>
        
        {
            this.brands = brands;
        })

        this.form.valueChanges.subscribe((values)=>{
            console.log("changes",values)
        })
    }
    saveProduct()
    {
        if(!this.form.dirty)
        {
            alert("No Changes found");
            return;
        }
        this.productService.saveProduct(this.product).then((savedProduct:any)=>
        {
            this.product = savedProduct;
            this.router.navigate(["/products/list"]);
         })

    
    }
}