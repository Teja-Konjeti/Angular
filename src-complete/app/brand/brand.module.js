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
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var brand_services_1 = require("./brand.services");
var brand_routing_1 = require("./brand.routing");
var BrandModule = (function () {
    function BrandModule() {
    }
    BrandModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule,
                router_1.RouterModule.forRoot(brand_routing_1.routes)
            ],
            declarations: brand_routing_1.components.slice(),
            exports: brand_routing_1.components.slice(),
            providers: [
                brand_services_1.BrandService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], BrandModule);
    return BrandModule;
}());
exports.BrandModule = BrandModule;
//# sourceMappingURL=brand.module.js.map