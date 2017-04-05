import {Component, OnInit} from "@angular/core";

import { FormBuilder,
         FormGroup, 
         FormControl} from '@angular/forms';

import {ProductService} from "./product.services";


import {CartStorageService} from "../cart/cart.services";


import {Subscription} from "rxjs/Rx";


@Component({
    template: `
                <form [formGroup]="form" >
                    <p>
                        <label>Search </label>

                        <input type="text" 
                                formControlName="searchControl"
                                 />
                    </p>
                </form>    

                                
                <table>
                    <tr>
                        <th>Product</th>
                        
                    </tr>
                    <tr *ngFor="let p of  products">
                        <td>
                            <product-widget 
                                        [product]="p"
                                        (addToShoppingCart)="addToPurchaseList($event)"
                                         >
                            </product-widget>
                        </td>
                    </tr>
                </table>
    
    `
})
export class ProductSearchComponent implements OnInit {

    form:FormGroup;
    searchControl: FormControl;
    products: any[] = [];
    searchText: any = '';



    subscription: Subscription;

    constructor(private productService: ProductService,
    private cartService: CartStorageService,
                private formBuilder: FormBuilder
    ) {
        this.searchControl = new FormControl("");

        this.form = formBuilder.group({
            "searchControl" : this.searchControl
        });

        
    }

    ngOnInit() {
        this.searchControl.valueChanges
        .debounceTime(400)
        .map ( (text: string) => {
            console.log("at map ", text.length);
            return text.trim()
        })
        .filter ( (text: string) => text.length > 0) // min 1 char
        .subscribe( (value: string) => {
            console.log("subscribe changed ", value, 
                        " length ", value.length);

            
            this.searchText = value;
            
            this.productService.searchProducts(this.searchText)
            .subscribe( (results: any[]) => {
                this.products = results;
            })
            
            //TODO: Search and update products
        })
    }

    addToPurchaseList($event:any) {
        console.log("addToPurchaseList at list component ", $event);
        //$event is a product object
        this.cartService.addProduct($event);
    }
  

}