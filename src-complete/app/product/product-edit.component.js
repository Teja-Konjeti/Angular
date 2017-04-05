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
var router_1 = require("@angular/router");
var product_services_1 = require("./product.services");
//products/edit/1
var ProductEditComponent = (function () {
    function ProductEditComponent(route, productService, router) {
        this.route = route;
        this.productService = productService;
        this.router = router;
        this.product = {};
        this.brands = [];
        this.inProgress = false;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params["id"];
            if (id) {
                console.log("product id", id);
                _this.inProgress = true;
                Promise.all([
                    _this.productService.getProduct(id),
                    _this.productService.getBrands()
                ])
                    .then(function (results) {
                    _this.product = results[0];
                    _this.brands = results[1];
                    _this.inProgress = false;
                })
                    .catch(function (error) {
                    _this.inProgress = false;
                    console.log("error", error);
                });
            }
            else {
                _this.inProgress = true;
                _this.productService.getBrands()
                    .then(function (brands) {
                    _this.brands = brands;
                    _this.inProgress = false;
                })
                    .catch(function (error) {
                    _this.inProgress = false;
                    console.log("error", error);
                });
            }
        });
    };
    ProductEditComponent.prototype.saveProduct = function ($event) {
        var _this = this;
        console.log("save product", this.product.name);
        this.inProgress = true;
        this.productService.saveProduct(this.product)
            .then(function (data) {
            console.log("server returned object ", data.id);
            _this.inProgress = false;
            _this.product = data;
        })
            .catch(function (error) {
            _this.inProgress = false;
        });
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        this.productService.deleteProduct(this.product.id)
            .then(function (data) {
            //go to list page
            _this.router.navigate(["/products/list"]);
        });
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'product-edit.component.html',
            styles: [
                "\n            input.ng-invalid {\n                background: yellow\n            }\n        "
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, product_services_1.ProductService, router_1.Router])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map