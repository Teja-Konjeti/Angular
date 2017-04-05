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
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var product_list_component_1 = require("./product-list.component");
var product_pipes_1 = require("./product.pipes");
var product_routing_1 = require("./product.routing");
var product_widget_component_1 = require("./product-widget.component");
var product_services_1 = require("./product.services");
var product_home_component_1 = require("./product-home.component");
var product_edit_component_1 = require("./product-edit.component");
var product_search_component_1 = require("./product-search.component");
var product_pipes_2 = require("./product.pipes");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                product_routing_1.productRouting
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_pipes_1.ByYearPipe,
                product_widget_component_1.ProductWidgetComponent,
                product_home_component_1.ProductHomeComponent,
                product_edit_component_1.ProductEditComponent,
                product_pipes_2.SearchProductPipe,
                product_search_component_1.ProductSearchComponent,
                product_widget_component_1.CountComponent
            ],
            providers: [
                product_services_1.ProductService
            ],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map