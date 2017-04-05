"use strict";
var router_1 = require("@angular/router");
var product_list_component_1 = require("./product-list.component");
var product_home_component_1 = require("./product-home.component");
var product_edit_component_1 = require("./product-edit.component");
var product_search_component_1 = require("./product-search.component");
var auth_guards_1 = require("../auth/auth.guards");
var routes = [
    {
        path: "products",
        component: product_home_component_1.ProductHomeComponent,
        canActivate: [auth_guards_1.AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'prefix',
                //component: ProductListComponent,
                canActivate: [auth_guards_1.AuthGuard]
            },
            {
                path: 'list',
                component: product_list_component_1.ProductListComponent,
                canActivate: [auth_guards_1.AuthGuard]
            },
            {
                path: 'edit/:id',
                component: product_edit_component_1.ProductEditComponent,
                data: {
                    roles: ['Admin', 'Staff']
                },
                canActivate: [auth_guards_1.AuthGuard, auth_guards_1.AdminGuard]
            },
            {
                path: "create",
                component: product_edit_component_1.ProductEditComponent,
                canActivate: [auth_guards_1.AuthGuard]
            },
            {
                path: 'search',
                component: product_search_component_1.ProductSearchComponent,
                canActivate: [auth_guards_1.AuthGuard]
            }
        ]
    }
];
exports.productRouting = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=product.routing.js.map