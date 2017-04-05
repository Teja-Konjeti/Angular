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
var http_1 = require("@angular/http");
require('rxjs/Rx');
var Subject_1 = require('rxjs/Subject');
var AuthService = (function () {
    function AuthService(http, apiEndPoint) {
        this.http = http;
        this.apiEndPoint = apiEndPoint;
        //Set window.localStorage | localStorage to keep login across all brower tab, browser restart, system restart
        //sessionStorage is a browser variable
        this.storage = window.localStorage;
        this._authSource = new Subject_1.Subject();
    }
    AuthService.prototype.getAuthNotification = function () {
        return this._authSource;
    };
    AuthService.prototype.getIdentity = function () {
        var identityJsonText = this.storage.getItem("identity");
        if (identityJsonText) {
            return JSON.parse(identityJsonText);
        }
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.storage.getItem("token") ? true : false;
    };
    AuthService.prototype.getToken = function () {
        return this.storage.getItem("token");
    };
    AuthService.prototype.getName = function () {
        return this.storage.getItem("name");
    };
    AuthService.prototype.setRedirectUrl = function (path) {
        return this.storage.setItem("redirectUrl", path);
    };
    AuthService.prototype.getRedirectUrl = function () {
        return this.storage.getItem("redirectUrl");
    };
    AuthService.prototype.clearRedirectUrl = function () {
        this.storage.removeItem("redirectUrl");
    };
    AuthService.prototype.isAdmin = function () {
        return this.hasRole("admin");
    };
    AuthService.prototype.isUser = function () {
        return this.hasRole("user");
    };
    AuthService.prototype.isStaff = function () {
        return this.hasRole("staff");
    };
    AuthService.prototype.hasRole = function (role) {
        var identity = this.getIdentity();
        if (identity)
            return identity.roles.indexOf(role) > -1;
    };
    AuthService.prototype.authenticate = function (username, password) {
        var _this = this;
        var data = {};
        data["username"] = username;
        data["password"] = password;
        data["grant_type"] = 'password';
        return this.http.post(this.apiEndPoint + "/oauth/token", data)
            .map(function (response) {
            var result = response.json();
            console.log("result is ", result);
            _this.storage.setItem("token", result.token);
            result.identity.roles = result.identity.roles.map(function (role) { return role.toLowerCase(); });
            _this.storage.setItem("identity", JSON.stringify(result.identity));
            _this.storage.setItem("name", result.identity.name);
            _this._authSource.next(true);
            return result;
        });
    };
    AuthService.prototype.logout = function () {
        this.storage.removeItem("token");
        this.storage.removeItem("identity");
        this.storage.removeItem("name");
        this.clearRedirectUrl();
        this._authSource.next(false);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject("apiEndPoint")), 
        __metadata('design:paramtypes', [http_1.Http, String])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map