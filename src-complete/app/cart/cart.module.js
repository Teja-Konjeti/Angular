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
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var cart_routing_1 = require("./cart.routing");
var cart_services_1 = require("./cart.services");
//TODO: SaveAlertGuard
var cart_guards_1 = require("./cart.guards");
var CartModule = (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(cart_routing_1.routes)
            ],
            declarations: cart_routing_1.components.slice(),
            providers: [
                {
                    provide: cart_services_1.CartStorageService,
                    useClass: cart_services_1.CartLocalStorageService
                },
                cart_guards_1.SaveAlertGuard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CartModule);
    return CartModule;
}());
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map