import {Component, OnInit} from "@angular/core";
import {Input, Output, EventEmitter} from "@angular/core";


/*
    Demonstrate oneway two way binding with components
*/

@Component({
    selector: 'counter',
    template: `
        <h2>Enter Number of orders</h2>
        <p>Count : {{count}}</p>
        <button (click)="increment()">+1</button>
    `
})
export class CounterComponent {
    @Input() count: number = 0;
    @Output() countChange: EventEmitter<number> = new EventEmitter<number>();

    increment() {
        this.count++;
        this.countChange.emit(this.count);
    }
}

@Component({
    selector: 'cart-component',
    template: `
       <!--<counter [(count)]="totalCount"></counter> -->

        <!--
        <counter [count]="totalCount" (countChange)="totalCount=$event"></counter>
        -->

        <counter  bindon-count="totalCount"></counter>
        <p>Total Count {{totalCount}}</p>
    `
})
export class CartComponent {
   totalCount:number = 2;
}