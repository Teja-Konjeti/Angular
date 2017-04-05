import { Injectable, Inject, ErrorHandler } from "@angular/core";
import {Location} from "@angular/common";

import {Http, Headers, RequestOptions, Response} from "@angular/http";

import {Router} from "@angular/router";

@Injectable()
export class ApplicationErrorHandlerService implements ErrorHandler {
    
    constructor(private location: Location,
                private http: Http,
               
                @Inject("apiEndPoint") private apiEndPoint:string) {
         
    }

    public handleError( error: any ) : void {
        // Log to the console.
        try {

            console.group( "ErrorHandler" );
            console.error( error.message );
            console.error( error.stack );
            console.groupEnd();

        let headers: Headers = new Headers({
            "Content-Type": "application/json"
        })

        let requestOptions = new RequestOptions({
            'headers': headers
        })

        let data: {} = {}
        data["message"] = error.message;
        data["stack_trace"] = JSON.stringify(error.stack);

        let jsonDataText = JSON.stringify(data);
         
        //POST /crash/logs
        this.http.post(this.apiEndPoint + "/crash/logs",
            jsonDataText,
            requestOptions
        )
        .map( (response : Response ) => response.json())
        .subscribe ( () => {
            console.log("posted error logs to api");
        })
    

            window.sessionStorage.setItem("error.message", error.message);
            window.sessionStorage.setItem("error.stack", JSON.stringify(error.stack));
 
            /*
            setTimeout(() =>  {
                  //this.location.go("/error"); //This doesn't trigger router
                  //window.location.assign("http://localhost:3000/error");
            }, 3000);
            */

        } catch ( handlingError ) {
            console.group( "ErrorHandler" );
            console.warn( "Error when trying to output error." );
            console.error( handlingError );
            console.groupEnd();
        }
    }
}
