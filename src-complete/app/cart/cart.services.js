"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CartStorageService = (function () {
    function CartStorageService(storage) {
        this.storage = storage;
    }
    CartStorageService.prototype.addProduct = function (product) {
        var productJson = this.storage.getItem("product." + product.id);
        if (!productJson) {
            var item = {
                name: product.name,
                id: product.id,
                quantity: 1
            };
            this.storage.setItem("product." + product.id, JSON.stringify(item));
        }
        else {
            var item = JSON.parse(productJson);
            item.quantity += 1;
            this.storage.setItem("product." + product.id, JSON.stringify(item));
        }
    };
    CartStorageService.prototype.removeProduct = function (id) {
        this.storage.removeItem("product." + id);
    };
    CartStorageService.prototype.getProducts = function () {
        var items = [];
        for (var key in this.storage) {
            if (key.indexOf("product.") >= 0) {
                items.push(JSON.parse(this.storage.getItem(key)));
            }
        }
        return items;
    };
    CartStorageService.prototype.removeAll = function () {
        //this.storage.clear(); //buggy, shall remove all keys
        for (var key in this.storage) {
            if (key.indexOf("product.") >= 0) {
                this.storage.removeItem(key);
            }
        }
    };
    return CartStorageService;
}());
exports.CartStorageService = CartStorageService;
var CartLocalStorageService = (function (_super) {
    __extends(CartLocalStorageService, _super);
    function CartLocalStorageService() {
        _super.call(this, window.localStorage);
    }
    return CartLocalStorageService;
}(CartStorageService));
exports.CartLocalStorageService = CartLocalStorageService;
var CartSessionStorageService = (function (_super) {
    __extends(CartSessionStorageService, _super);
    function CartSessionStorageService() {
        _super.call(this, window.sessionStorage);
    }
    return CartSessionStorageService;
}(CartStorageService));
exports.CartSessionStorageService = CartSessionStorageService;
//# sourceMappingURL=cart.services.js.map