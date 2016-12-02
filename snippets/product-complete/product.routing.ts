import {RouterModule, Routes} from "@angular/router";
import {ProductListComponent} from "./product-list.component";

import {ProductHomeComponent} from "./product-home.component";

import {ProductEditComponent} from "./product-edit.component";
import {ProductSearchComponent} from "./product-search.component";

import {AuthGuard, AdminGuard} from "../auth/auth.guards";

const routes:Routes = [
    {
        path: "products", // "/products"
        component : ProductHomeComponent,

        children: [
            {
                path: '', // /products
                //redirectTo : '/products/list'
                
                canActivate: [AuthGuard]
            },

            {
                path: 'list', // /products/list
                component: ProductListComponent,
                canActivate: [AuthGuard]
            },

            {
                path: 'edit/:id',  //products/edit/1
                component: ProductEditComponent,
                data: {
                    roles: ['Admin', 'Staff']
                },
                
                canActivate: [AuthGuard, AdminGuard]
            },

            {
                path: "create", //products/create
                component: ProductEditComponent,
                canActivate: [AuthGuard]
            },

            {
                path: 'search',
                component: ProductSearchComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
]

export const productRouting = RouterModule.forRoot(routes);