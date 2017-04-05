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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var auth_http_client_1 = require("../auth/auth.http-client");
require("rxjs/Rx");
var BrandService = (function () {
    function BrandService(http, apiEndPoint) {
        this.http = http;
        this.apiEndPoint = apiEndPoint;
    }
    BrandService.prototype.getBrands = function () {
        return this.http.get(this.apiEndPoint + "/api/brands")
            .map(function (response) { return response.json(); });
    };
    BrandService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject("apiEndPoint")), 
        __metadata('design:paramtypes', [auth_http_client_1.HttpClient, String])
    ], BrandService);
    return BrandService;
}());
exports.BrandService = BrandService;
//# sourceMappingURL=brand.services.js.map