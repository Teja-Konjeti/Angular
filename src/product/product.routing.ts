import {RouterModule,Routes} from "@angular/router";
import {ProductListComponent} from "./product-list.component";


import {ProductEditComponent} from "./product-edit.component";

import {ProductHomeComponent} from "./product-home.component";
const routes:Routes = [
{
    path:"products",
    component:ProductHomeComponent,
    children:[
{
    path:'list',//Base
    component:ProductListComponent
}  ,
{
    path:"edit/:id",
    component:ProductEditComponent
}
    ]
} 
]
 export const components:any[]=[
     ProductEditComponent,
     ProductListComponent
 ]
import {ModuleWithProviders} from "@angular/core";

export const routingModule:ModuleWithProviders = RouterModule.forChild(routes); //W pass our route to get a routing module created for us


