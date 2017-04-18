import { Component, OnInit,Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: 'about.component.html'
})

export class AboutComponent implements OnInit {
    @Input()
    branches:Array<string> = [];
    members:string[] = ['krish','rob'];
    @Input()
    title:string;
    showMembers : boolean = true;
    likes:number = 5;
    constructor() { }

    ngOnInit() {

     }

     showHide() {
         this.showMembers = !this.showMembers;
     }

        likeClicked(n:number){
        this.likes += n;
    }
    addMember(name:string){
        this.members.push(name);
    }

}