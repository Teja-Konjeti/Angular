"use strict";
var login_component_1 = require("./login.component");
var forbidden_component_1 = require("./forbidden.component");
exports.routes = [
    {
        path: 'auth/login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'auth/forbidden',
        component: forbidden_component_1.ForbiddenComponent
    }
];
exports.components = [
    login_component_1.LoginComponent,
    forbidden_component_1.ForbiddenComponent
];
//# sourceMappingURL=auth.routing.js.map