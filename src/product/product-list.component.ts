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

     trackByProduct(index:number,product:any)
     {
         return product.id;
     }
     fetchProduct()
     {
      this.productService.getProducts().subscribe((products:any[])=>{
          this.products = products;
      })
     }
    ngOnInit() {
this.fetchProduct();
      
    }
       likesChangedHandler(likes:number)
        {console.log("likes",likes)
        }


}