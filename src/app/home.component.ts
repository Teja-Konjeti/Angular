import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    constructor() {

        console.log("home");
     }

    ngOnInit() {    ///use once after html is loaded.
console.log("home init");
    }
}