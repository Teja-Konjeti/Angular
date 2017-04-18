import { Component, OnInit } from '@angular/core';
import {ProductService} from "./product.service";
@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit {
    products:any[] = [];
    productService:ProductService;
    constructor(productService:ProductService) {
        this.productService = productService;
     }
    ngOnInit() { 
        this.products = this.productService.getProducts()
    }
    


}