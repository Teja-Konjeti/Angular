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
var router_1 = require('@angular/router');
var auth_service_1 = require("./auth.service");
var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
        console.log("AuthGuard::constructor");
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        console.log(route.data);
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.authService.setRedirectUrl(state.url);
        this.router.navigate(['/auth/login']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
var AdminGuard = (function () {
    function AdminGuard(router, authService) {
        this.router = router;
        this.authService = authService;
        console.log("AdminGuard::constructor");
    }
    AdminGuard.prototype.canActivate = function (route, state) {
        console.log(route.data);
        if (this.authService.isAdmin()) {
            return true;
        }
        this.router.navigate(['/auth/forbidden']);
        return false;
    };
    AdminGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], AdminGuard);
    return AdminGuard;
}());
exports.AdminGuard = AdminGuard;
var RoleBasedAccessGuard = (function () {
    function RoleBasedAccessGuard(router, authService) {
        this.router = router;
        this.authService = authService;
        console.log("AdminGuard::constructor");
    }
    RoleBasedAccessGuard.prototype.canActivate = function (route, state) {
        //state.data with roles and authService.getRoles match it
        this.authService.setRedirectUrl(state.url);
        this.router.navigate(['/auth/login']);
        return false;
    };
    RoleBasedAccessGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, auth_service_1.AuthService])
    ], RoleBasedAccessGuard);
    return RoleBasedAccessGuard;
}());
exports.RoleBasedAccessGuard = RoleBasedAccessGuard;
//# sourceMappingURL=auth.guards.js.map