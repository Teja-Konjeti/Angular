import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";

import {ProductService} from "./product.services";

//products/edit/1
@Component({
    templateUrl: 'app/product/product-edit.component.html',

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
                
                this.productService.getProduct(id)
                .then( (data: any) => {
                    this.product = data;
                    }
                )
                .catch( (error: any) => {
                        console.error("Catch Got error ", error);
                })
            }
        })
    }

    saveProduct($event : Event) {
        console.log("save product", this.product.name);

        this.productService.saveProduct(this.product)
        .then( (data: any) => {
            console.log("server returned object ", data.id);

            this.product = data;

            alert("Saved");
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