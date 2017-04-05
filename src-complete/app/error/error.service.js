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
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var ApplicationErrorHandlerService = (function () {
    function ApplicationErrorHandlerService(location, http, apiEndPoint) {
        this.location = location;
        this.http = http;
        this.apiEndPoint = apiEndPoint;
    }
    ApplicationErrorHandlerService.prototype.handleError = function (error) {
        // Log to the console.
        try {
            console.group("ErrorHandler");
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
            var headers = new http_1.Headers({
                "Content-Type": "application/json"
            });
            var requestOptions = new http_1.RequestOptions({
                'headers': headers
            });
            var data = {};
            data["message"] = error.message;
            data["stack_trace"] = JSON.stringify(error.stack);
            var jsonDataText = JSON.stringify(data);
            //POST /crash/logs
            this.http.post(this.apiEndPoint + "/crash/logs", jsonDataText, requestOptions)
                .map(function (response) { return response.json(); })
                .subscribe(function () {
                console.log("posted error logs to api");
            });
            window.sessionStorage.setItem("error.message", error.message);
            window.sessionStorage.setItem("error.stack", JSON.stringify(error.stack));
        }
        catch (handlingError) {
            console.group("ErrorHandler");
            console.warn("Error when trying to output error.");
            console.error(handlingError);
            console.groupEnd();
        }
    };
    ApplicationErrorHandlerService = __decorate([
        core_1.Injectable(),
        __param(2, core_1.Inject("apiEndPoint")), 
        __metadata('design:paramtypes', [common_1.Location, http_1.Http, String])
    ], ApplicationErrorHandlerService);
    return ApplicationErrorHandlerService;
}());
exports.ApplicationErrorHandlerService = ApplicationErrorHandlerService;
//# sourceMappingURL=error.service.js.map