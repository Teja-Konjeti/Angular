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
var PageNotFoundErrorComponent = (function () {
    function PageNotFoundErrorComponent() {
    }
    PageNotFoundErrorComponent = __decorate([
        core_1.Component({
            template: "\n       <h3> The page/url you are looking for does not exist </h3>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundErrorComponent);
    return PageNotFoundErrorComponent;
}());
exports.PageNotFoundErrorComponent = PageNotFoundErrorComponent;
var ErrorComponent = (function () {
    function ErrorComponent() {
        this.message = window.sessionStorage.getItem("error.message");
        this.stackTrace = window.sessionStorage.getItem("error.stack");
        window.sessionStorage.removeItem("error.message");
        window.sessionStorage.removeItem("error.stack");
    }
    ErrorComponent = __decorate([
        core_1.Component({
            template: "\n       <h3> Error in application </h3>\n\n       <p>{{message}}</p>\n\n       <p>{{stackTrace}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;
var ForbiddenErrorComponent = (function () {
    function ForbiddenErrorComponent() {
    }
    ForbiddenErrorComponent = __decorate([
        core_1.Component({
            template: '<h2>Sorry, You do not have access rights!</h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], ForbiddenErrorComponent);
    return ForbiddenErrorComponent;
}());
exports.ForbiddenErrorComponent = ForbiddenErrorComponent;
//# sourceMappingURL=error.components.js.map