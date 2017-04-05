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
var router_1 = require("@angular/router");
var cart_services_1 = require("../cart/cart.services");
var auth_http_client_1 = require("../auth/auth.http-client");
var forms_1 = require('@angular/forms');
require("rxjs/Rx");
function CountryValidator(control) {
    console.log("Console ", control.value);
    if (control.value === 'IN' || control.value === 'India') {
        return;
    }
    return {
        invalidCountry: true
    };
}
var CheckoutComponent = (function () {
    function CheckoutComponent(cartStorageSevice, route, httpClient, apiEndPoint, formBuilder) {
        this.cartStorageSevice = cartStorageSevice;
        this.route = route;
        this.httpClient = httpClient;
        this.apiEndPoint = apiEndPoint;
        this.products = [];
        this.states = [];
        this.cities = [];
        this.address = {};
        this.offer = {};
        this.submitted = false;
        this.products = cartStorageSevice.getProducts();
        this.fullNameControl = new forms_1.FormControl("", forms_1.Validators.required);
        this.stateControl = new forms_1.FormControl("");
        this.cityControl = new forms_1.FormControl("");
        this.countryControl = new forms_1.FormControl("", CountryValidator);
        this.form = formBuilder.group({
            "fullName": this.fullNameControl,
            "state": this.stateControl,
            "city": this.cityControl,
            "country": this.countryControl
        });
    }
    CheckoutComponent.prototype.generateLuckyCoupon = function () {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                var n = Math.floor(Math.random() * 100);
                if (n > 50) {
                    resolve("Lucky" + n + "%");
                }
                else {
                    reject("Sorry, better luck next time");
                }
            }, 2000);
        });
        return promise;
    };
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generateLuckyCoupon()
            .then(function (n) {
            console.log("got value ", n);
        })
            .catch(function (err) {
            console.log("got error ", err);
        });
        var self = this;
        Promise.all([
            this.httpClient.get(this.apiEndPoint + '/api/states')
                .map(function (response) { return response.json(); })
                .toPromise(),
            this.httpClient.get(this.apiEndPoint + '/api/cities')
                .map(function (response) { return response.json(); })
                .toPromise()
        ])
            .then(function (results) {
            self.states = results[0];
            self.cities = results[1];
        });
        this.offer.discount = this.route.snapshot.params["discount"];
        this.offer.coupon = this.route.snapshot.params["coupon"];
        this.stateControl.valueChanges
            .filter(function (value) { return value; })
            .subscribe(function (value) {
            _this.httpClient.get(_this.apiEndPoint + '/api/cities?stateId=' + value)
                .map(function (response) { return response.json(); })
                .subscribe(function (cities) {
                _this.cities = cities;
            });
        });
    };
    CheckoutComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    CheckoutComponent.prototype.isSaved = function () {
        return this.submitted;
    };
    CheckoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'checkout.component.html'
        }),
        __param(3, core_1.Inject("apiEndPoint")), 
        __metadata('design:paramtypes', [cart_services_1.CartStorageService, router_1.ActivatedRoute, auth_http_client_1.HttpClient, String, forms_1.FormBuilder])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
exports.CheckoutComponent = CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map