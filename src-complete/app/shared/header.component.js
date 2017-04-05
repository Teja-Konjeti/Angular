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
var auth_service_1 = require("../auth/auth.service");
//import {TranslateService} from 'ng2-translate';
var HeaderComponent = (function () {
    /*constructor(private translate: TranslateService,
                private authService: AuthService) {
        this.isLoggedIn = this.authService.isAuthenticated();
    }*/
    function HeaderComponent(authService) {
        this.authService = authService;
        this.isLoggedIn = this.authService.isAuthenticated();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAuthNotification()
            .subscribe(function (status) {
            _this.isLoggedIn = status;
        });
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.changeLang = function (code) {
        //this.translate.use(code);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-header',
            templateUrl: 'header.component.html'
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map