import {Component, OnInit} from "@angular/core";
import {ProductService} from "./product.services";

@Component({
    selector: 'product-list',
    templateUrl : 'app/product/templates/product-list.component.html'
})
export class ProductListComponent implements OnInit {
     
    //TODO: List products from productService
    //Apply Filter

    constructor(private productService:ProductService
                ) {
        
        console.log("product list component created");
    }

    ngOnInit() {
        
        //TODO: get products

    }

   //TODO: Handle add to shopping cart via events
  

    ngOnDestroy() {
           
    }
}