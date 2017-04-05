"use strict";
var cart_component_1 = require("./cart.component");
var checkout_component_1 = require("./checkout.component");
var cart_guards_1 = require("./cart.guards");
exports.routes = [
    {
        path: 'cart',
        component: cart_component_1.CartComponent
    },
    {
        path: 'cart/checkout',
        component: checkout_component_1.CheckoutComponent,
        canDeactivate: [cart_guards_1.SaveAlertGuard]
    }
];
exports.components = [
    cart_component_1.CartComponent,
    checkout_component_1.CheckoutComponent
];
//# sourceMappingURL=cart.routing.js.map