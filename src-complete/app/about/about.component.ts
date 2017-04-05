import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'about',
    templateUrl: "templates/about.component.html"
})
export class AboutComponent implements OnInit{
    title:string = "About";
    description:string =  "Our first angular component";
    members: any[] = [];

    constructor() {
        this.members = ['Venkat', 'Karthi', 'Krish'];
    }

    ngOnInit() {
        
    }
    
    ngOnDestroy() {
          console.log("about destroy called");
    }

}