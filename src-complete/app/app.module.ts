import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

//import {TranslateModule} from 'ng2-translate';

import {HomeModule} from "./home/home.module";
import {AboutModule} from "./about/about.module";
import {ProductModule} from "./product/product.module";
import {BrandModule} from "./brand/brand.module";
import {CartModule} from "./cart/cart.module";
import {AuthModule} from "./auth/auth.module";
import {ErrorModule} from "./error/error.module";

import {LocationStrategy, 
       HashLocationStrategy,
       PathLocationStrategy //HTML 5,default
      } 
                        from "@angular/common";

import * as config from "./app.config";

import { AppComponent }  from './app.component';

import {HeaderComponent} from "./shared/header.component";

import {FooterComponent} from "./shared/footer.component";

import {HighlightDirective} from "./shared/highlight.directive";

import {Http} from "@angular/http";

//import {TranslateStaticLoader, TranslateLoader} from 'ng2-translate';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule,

    //TranslateModule.forRoot(),

    /*
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
            deps: [Http]
        }),
        */

    HomeModule,
    AboutModule,
    ProductModule,
    BrandModule,
    CartModule,
    AuthModule
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective
  ],

  exports: [
    HighlightDirective
  ],
  
  providers: [
    {
      provide: "apiEndPoint",
      useValue: config.API_END_POINT
    },

    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy //HashLocationStrategy
    }



  ],

  bootstrap:    [ 
    AppComponent 
  ]
})
export class AppModule { }
