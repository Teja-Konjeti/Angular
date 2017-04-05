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
var Subject_1 = require("rxjs/Subject");
var CountComponent = (function () {
    function CountComponent() {
    }
    CountComponent.prototype.removeFromCart = function () {
        this.messageStream.next("remove from cart");
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Subject_1.Subject)
    ], CountComponent.prototype, "messageStream", void 0);
    CountComponent = __decorate([
        core_1.Component({
            selector: 'count',
            template: "\n        <button (click)=\"removeFromCart()\">Remove</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CountComponent);
    return CountComponent;
}());
exports.CountComponent = CountComponent;
var ProductWidgetComponent = (function () {
    function ProductWidgetComponent() {
        this.addToShoppingCart = new core_1.EventEmitter();
    }
    ProductWidgetComponent.prototype.addToCartClicked = function () {
        console.log("Add to cart clicked");
        this.addToShoppingCart.emit(this.product);
    };
    ProductWidgetComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ProductWidgetComponent.prototype, "product", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ProductWidgetComponent.prototype, "addToShoppingCart", void 0);
    ProductWidgetComponent = __decorate([
        core_1.Component({
            selector: 'product-widget',
            template: "\n            <p>Name: {{product?.name | uppercase}}</p>\n            <p>Price {{ 20 | currency}}</p>\n            <p>Year: {{product?.year}}</p>\n            <p>Weight: {{product?.weight}}</p>\n\n            <button (click)=\"addToCartClicked()\">Add To Cart</button>\n\n            <a routerLink=\"/products/edit/{{product.id}}\" class=\"button\">\n            Edit\n            </a>\n\n            \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ProductWidgetComponent);
    return ProductWidgetComponent;
}());
exports.ProductWidgetComponent = ProductWidgetComponent;
//# sourceMappingURL=product-widget.component.js.map