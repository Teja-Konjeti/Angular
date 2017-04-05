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
var router_1 = require("@angular/router");
var forms_1 = require('@angular/forms');
var BrandEditComponent = (function () {
    function BrandEditComponent(router, route, formBuilder) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.brand = {};
        this.brandNameControl = new forms_1.FormControl("");
        this.form = formBuilder.group({
            "brandName": this.brandNameControl
        });
        this.brandNameControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (value) {
            console.log("value changed ", value);
        });
    }
    BrandEditComponent.prototype.ngOnInit = function () {
        this.route.params.forEach(function (params) {
            var id = params["id"];
            var name = params["name"];
            console.log("number is ", id);
            console.log("name is ", name);
        });
    };
    BrandEditComponent.prototype.ngOnDestroy = function () {
    };
    BrandEditComponent.prototype.onSubmit = function () {
        console.log("On Submit");
    };
    BrandEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'brand-edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, forms_1.FormBuilder])
    ], BrandEditComponent);
    return BrandEditComponent;
}());
exports.BrandEditComponent = BrandEditComponent;
//# sourceMappingURL=brand-edit.component.js.map