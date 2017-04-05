import {RouterModule, Routes} from "@angular/router";
import {BrandListComponent} from "./brand-list.component";

import {BrandEditComponent} from "./brand-edit.component";

export const routes = [
    {
        path: 'brands',
        component: BrandListComponent
    },

    {
        path: 'brands/edit/:id/:name',
        component: BrandEditComponent
    }
]


export const components = [
    BrandListComponent,
    BrandEditComponent
]