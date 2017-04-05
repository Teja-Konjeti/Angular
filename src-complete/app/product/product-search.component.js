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
var forms_1 = require('@angular/forms');
var product_services_1 = require("./product.services");
var cart_services_1 = require("../cart/cart.services");
var ProductSearchComponent = (function () {
    function ProductSearchComponent(productService, cartService, formBuilder) {
        this.productService = productService;
        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.products = [];
        this.searchText = '';
        this.searchControl = new forms_1.FormControl("");
        this.form = formBuilder.group({
            "searchControl": this.searchControl
        });
    }
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl.valueChanges
            .debounceTime(400)
            .map(function (text) {
            console.log("at map ", text.length);
            return text.trim();
        })
            .filter(function (text) { return text.length > 0; }) // min 1 char
            .subscribe(function (value) {
            console.log("subscribe changed ", value, " length ", value.length);
            _this.searchText = value;
            _this.productService.searchProducts(_this.searchText)
                .subscribe(function (results) {
                _this.products = results;
            });
            //TODO: Search and update products
        });
    };
    ProductSearchComponent.prototype.addToPurchaseList = function ($event) {
        console.log("addToPurchaseList at list component ", $event);
        //$event is a product object
        this.cartService.addProduct($event);
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            template: "\n                <form [formGroup]=\"form\" >\n                    <p>\n                        <label>Search </label>\n\n                        <input type=\"text\" \n                                formControlName=\"searchControl\"\n                                 />\n                    </p>\n                </form>    \n\n                                \n                <table>\n                    <tr>\n                        <th>Product</th>\n                        \n                    </tr>\n                    <tr *ngFor=\"let p of  products\">\n                        <td>\n                            <product-widget \n                                        [product]=\"p\"\n                                        (addToShoppingCart)=\"addToPurchaseList($event)\"\n                                         >\n                            </product-widget>\n                        </td>\n                    </tr>\n                </table>\n    \n    "
        }), 
        __metadata('design:paramtypes', [product_services_1.ProductService, cart_services_1.CartStorageService, forms_1.FormBuilder])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product-search.component.js.map