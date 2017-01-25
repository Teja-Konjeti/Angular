import {Component, OnInit} from "@angular/core";

@Component({
    template:`
       <h3> The page/url you are looking for does not exist </h3>
    `
})
export class PageNotFoundErrorComponent {

}


@Component({
    template:`
       <h3> Error in application </h3>

       <p>{{message}}</p>

       <p>{{stackTrace}}</p>
    `
})
export class ErrorComponent {
    message: string;
    stackTrace: string;

    constructor() {
            this.message = window.sessionStorage.getItem("error.message");
            this.stackTrace = window.sessionStorage.getItem("error.stack");
            
            window.sessionStorage.removeItem("error.message");
            window.sessionStorage.removeItem("error.stack");
    }
}



@Component({
    template: '<h2>Sorry, You do not have access rights!</h2>'
})
export class ForbiddenErrorComponent {
    constructor() {
        
    }
    
}

 