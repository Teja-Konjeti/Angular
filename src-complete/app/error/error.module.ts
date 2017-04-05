import {NgModule} from "@angular/core";
import { ErrorHandler } from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {errorRouting} from "./error.routing";

import {ErrorComponent, 
        ForbiddenErrorComponent, 
        PageNotFoundErrorComponent} from "./error.components";

import {ApplicationErrorHandlerService} from "./error.service"

@NgModule({
    imports: [CommonModule, 
              RouterModule, 
              errorRouting],
    declarations: [
        ErrorComponent, 
        ForbiddenErrorComponent, 
        PageNotFoundErrorComponent],
    providers: [
           {
               provide: ErrorHandler,
               useClass: ApplicationErrorHandlerService
           }
        ]
})
export class ErrorModule {

}