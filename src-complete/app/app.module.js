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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
//import {TranslateModule} from 'ng2-translate';
var home_module_1 = require("./home/home.module");
var about_module_1 = require("./about/about.module");
var product_module_1 = require("./product/product.module");
var brand_module_1 = require("./brand/brand.module");
var cart_module_1 = require("./cart/cart.module");
var auth_module_1 = require("./auth/auth.module");
var common_1 = require("@angular/common");
var config = require("./app.config");
var app_component_1 = require('./app.component');
var header_component_1 = require("./shared/header.component");
var footer_component_1 = require("./shared/footer.component");
var highlight_directive_1 = require("./shared/highlight.directive");
//import {TranslateStaticLoader, TranslateLoader} from 'ng2-translate';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                //TranslateModule.forRoot(),
                /*
                TranslateModule.forRoot({
                        provide: TranslateLoader,
                        useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
                        deps: [Http]
                    }),
                    */
                home_module_1.HomeModule,
                about_module_1.AboutModule,
                product_module_1.ProductModule,
                brand_module_1.BrandModule,
                cart_module_1.CartModule,
                auth_module_1.AuthModule
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                highlight_directive_1.HighlightDirective
            ],
            exports: [
                highlight_directive_1.HighlightDirective
            ],
            providers: [
                {
                    provide: "apiEndPoint",
                    useValue: config.API_END_POINT
                },
                {
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy //HashLocationStrategy
                }
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map