import { Injectable, ErrorHandler } from "@angular/core";
import {Location} from "@angular/common";

@Injectable()
export class ApplicationErrorHandlerService implements ErrorHandler {
    
    constructor(private location: Location) {
         
    }

    public handleError( error: any ) : void {
        // Log to the console.
        try {

            console.group( "ErrorHandler" );
            console.error( error.message );
            console.error( error.stack );
            console.groupEnd();

            window.sessionStorage.setItem("error.message", error.message);
            window.sessionStorage.setItem("error.stack", JSON.stringify(error.stack));
 
            setTimeout(() =>  {
                 //this.location.go("/error"); //This doesn't trigger router
                  //window.location.assign("http://localhost:3000/error");
            }, 3000);

        } catch ( handlingError ) {
            console.group( "ErrorHandler" );
            console.warn( "Error when trying to output error." );
            console.error( handlingError );
            console.groupEnd();
        }
    }
}
