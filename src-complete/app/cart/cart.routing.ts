import {RouterModule, Routes} from "@angular/router";
import {CartComponent} from "./cart.component";
import {CheckoutComponent} from "./checkout.component";

import {SaveAlertGuard} from "./cart.guards";

export const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent
    },

    {
        path: 'cart/checkout',
        component: CheckoutComponent,
        canDeactivate: [SaveAlertGuard]
        //TODO: Deactivate guard
    }
];

export const components = [
    CartComponent,
    CheckoutComponent
]