import {Injectable, Inject} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {Observable} from "rxjs/Observable";

import 'rxjs/Rx';
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class AuthService {

     //Set window.localStorage | localStorage to keep login across all brower tab, browser restart, system restart
     //sessionStorage is a browser variable
    storage: Storage = window.localStorage; 
    
    private _authSource = new Subject<boolean>(); 
    
    constructor(private http:Http,
                @Inject("apiEndPoint") private apiEndPoint:string
    ) {  
        
    }
 
    getAuthNotification() : Subject<boolean> {
        return this._authSource;
    }

    getIdentity() {
        let identityJsonText: string = this.storage.getItem("identity");
        
        if (identityJsonText) {
            return JSON.parse(identityJsonText);
        }
    }

    isAuthenticated() : boolean {
        return  this.storage.getItem("token")? true : false;
    }

    getToken() {
        return this.storage.getItem("token");
    }

    getName() {
        return this.storage.getItem("name");
    }

    setRedirectUrl(path: string) {
         return this.storage.setItem("redirectUrl", path);
    }

    getRedirectUrl() {
        return this.storage.getItem("redirectUrl");
    }

    clearRedirectUrl() {
        this.storage.removeItem("redirectUrl");
    }

    isAdmin() {
        return this.hasRole("admin");
    }

    isUser() {
         return this.hasRole("user");
    }
 
    
    isStaff() {
         return this.hasRole("staff");
    }
 

    hasRole(role: string) {
        let identity: any = this.getIdentity();
        if (identity)
            return identity.roles.indexOf(role) > -1;
    }


    authenticate(username: string, password:string) {
        let data:any = {};

        data["username"] = username;
        data["password"] = password;
        data["grant_type"] = 'password';

        return this.http.post(this.apiEndPoint + "/oauth/token", data)
                .map((response : Response) => {
                    var result = response.json();
                    console.log("result is ", result);
                    
                    this.storage.setItem("token", result.token);

                     result.identity.roles = result.identity.roles.map( (role:string) => role.toLowerCase());

                    this.storage.setItem("identity", 
                                        JSON.stringify(result.identity));
                    this.storage.setItem("name", result.identity.name);

                    this._authSource.next(true);
                    return result;
                })
    }

    logout() {
        this.storage.removeItem("token");
        this.storage.removeItem("identity");
        this.storage.removeItem("name");
        
        this.clearRedirectUrl();

        this._authSource.next(false);
    }
}