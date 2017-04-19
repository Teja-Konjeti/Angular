import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'like-widget',
    template: `
        <h4>Likes {{likes}}</h4>
        <button (click)="incr()">+1</button>
        <button (click)="decr()">-1</button>
    `
})

export class ProductLikeWidgetComponent implements OnInit {

    @Input()
    likes: number;

    @Output()
    likesChanged : EventEmitter<number> = new EventEmitter();
//input name ="Change"
    @Output()
    likesChange: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() { 


    }
   incr(event:Event)
    {
        this.likes++;
        this.likesChanged.emit(this.likes);
        this.likesChange.emit(this.likes);
    }
    decr()
    {
        this.likes--;
        this.likesChange.emit(this.likes);
        this.likesChanged.emit(this.likes);
    }
}
