import {Component} from "@angular/core";

@Component({
    template: `
        <h2>Product Home Page </h2>
        <div class="nav">
        <a routerLink="/products/list">List</a>
        <a routerLink="/products/search">Search</a>
        <a routerLink="/products/create">Create</a>
        </div>

        <router-outlet>
        </router-outlet>
    `
})
export class ProductHomeComponent {

}