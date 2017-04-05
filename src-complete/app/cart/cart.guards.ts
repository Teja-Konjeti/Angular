import {CanDeactivate} from "@angular/router";
import {CheckoutComponent} from "./checkout.component";

export class SaveAlertGuard implements CanDeactivate<CheckoutComponent> {
    
  canDeactivate(target: CheckoutComponent) :any {
    if(!target.isSaved()){
        return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
}