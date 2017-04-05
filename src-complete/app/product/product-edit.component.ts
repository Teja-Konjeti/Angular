import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";

import {ProductService} from "./product.services";

//products/edit/1
@Component({
    moduleId: module.id,
    templateUrl: 'product-edit.component.html',

    styles: [
        `
            input.ng-invalid {
                background: yellow
            }
        `
    ]
})
export class ProductEditComponent implements OnInit {
    product: any = {};
    
    brands: any[] = [];

    inProgress: boolean = false;

    constructor(private route: ActivatedRoute,
                private productService: ProductService,
                private router: Router
                ) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params ["id"];

            if (id) {
                console.log("product id", id);
                
                this.inProgress = true;
                
                 Promise.all ([
                    this.productService.getProduct(id),
                    this.productService.getBrands()
                ])
                .then( (results: any[]) => {
                    this.product = results[0];
                    this.brands = results[1];

                    this.inProgress = false;
                })
                .catch( (error: any) => {
                    this.inProgress = false;
                    console.log("error", error);
                })
                
            } else {
                this.inProgress = true;
                this.productService.getBrands()
                 .then( (brands: any[]) => {
                    this.brands = brands;
                    this.inProgress = false;
                })
                 .catch( (error: any) => {
                    this.inProgress = false;
                    console.log("error", error);
                })
            }
        })
    }

    saveProduct($event : Event) {
        console.log("save product", this.product.name);

        this.inProgress = true;

        this.productService.saveProduct(this.product)
        .then( (data: any) => {
            console.log("server returned object ", data.id);
            this.inProgress = false;
            this.product = data;
        })
        .catch( (error: any) => {
             this.inProgress = false;
        })
    }


    deleteProduct() {
        this.productService.deleteProduct(this.product.id)
        .then( (data: any) => {
            //go to list page
            this.router.navigate(["/products/list"]);
        })
    }
}