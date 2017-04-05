"use strict";
var router_1 = require("@angular/router");
var error_components_1 = require("./error.components");
var routes = [
    {
        path: "error",
        component: error_components_1.ErrorComponent
    },
    {
        path: "forbidden",
        component: error_components_1.ForbiddenErrorComponent
    }
];
exports.errorRouting = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=error.routing.js.map