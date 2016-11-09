import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'contact',
    template: `
        <h2>Contact us</h2>

        <p>City: {{address.city}}</p>
        <p>State: {{address.state}}</p>

        <button (click)="contactUs()"  >Contact Us</button>

        `
})
export class ContactComponent {
    @Input()
    address: any = {};

    @Output()
    contactUsClick: EventEmitter<any> = new EventEmitter<any>();


    contactUs() {
        this.contactUsClick.emit(this.address);
    }

}