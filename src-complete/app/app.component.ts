import { Component } from '@angular/core';

//import {TranslateService} from 'ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: "app.component.html",
})
export class AppComponent  { 


  name = 'Angular'; 

  listen() {
    console.log("Called");
  } 

  /*
  constructor(private translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
 
         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('de');
    }
    */

}
