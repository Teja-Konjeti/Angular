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
var http_1 = require('@angular/http');
var auth_service_1 = require("./auth.service");
var HttpClient = (function () {
    function HttpClient(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    HttpClient.prototype.addAuthHeaders = function (options) {
        var headers;
        if (!options.headers) {
            options.headers = new http_1.Headers();
        }
        if (this.authService.isAuthenticated()) {
            var token = this.authService.getToken();
            options.headers.append('Authorization', 'Bearer ' + token);
        }
    };
    HttpClient.prototype.get = function (url, options) {
        console.log('get...');
        if (!options) {
            options = new http_1.RequestOptions();
        }
        this.addAuthHeaders(options);
        return this.http.get(url, options);
    };
    HttpClient.prototype.post = function (url, data, options) {
        console.log("post");
        if (!options) {
            options = new http_1.RequestOptions();
        }
        this.addAuthHeaders(options);
        return this.http.post(url, data, options);
    };
    HttpClient.prototype.put = function (url, data, options) {
        console.log("put");
        if (!options) {
            options = new http_1.RequestOptions();
        }
        this.addAuthHeaders(options);
        return this.http.put(url, data, options);
    };
    HttpClient.prototype.delete = function (url, options) {
        console.log('delete...');
        if (!options) {
            options = new http_1.RequestOptions();
        }
        this.addAuthHeaders(options);
        return this.http.delete(url, options);
    };
    HttpClient = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService])
    ], HttpClient);
    return HttpClient;
}());
exports.HttpClient = HttpClient;
//# sourceMappingURL=auth.http-client.js.map