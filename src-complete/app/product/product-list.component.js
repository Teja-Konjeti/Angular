"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var product_services_1 = require("./product.services");
var cart_services_1 = require("../cart/cart.services");
require("rxjs/Rx");
var ProductListComponent = (function () {
    function ProductListComponent(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.years = [2010, 2011, 2012, 2013, 2014, 2015, 2016];
        //two way binding for select
        this.year = "";
        console.log("product list component created");
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit on Product List");
        this.productService.getProducts()
            .then(function (data) {
            _this.products = data;
            console.log(" got products ");
        });
    };
    ProductListComponent.prototype.addToPurchaseList = function ($event) {
        console.log("addToPurchaseList at list component ", $event);
        //$event is a product object
        this.cartService.addProduct($event);
    };
    ProductListComponent.prototype.ngOnDestroy = function () {
        console.log("product destroy called");
    };
    ProductListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-list',
            templateUrl: 'product-list.component.html'
        }), 
        __metadata('design:paramtypes', [product_services_1.ProductService, cart_services_1.CartStorageService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map