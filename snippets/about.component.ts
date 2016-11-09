import {Component} from "@angular/core";

@Component({
    selector: 'about',
    template: `
        <h2>About us</h2>

        <p [myHighlight]="'blue'"> Angular Training</p>
    `
})
export class AboutComponent {
        
}