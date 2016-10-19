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
        return this.storage.getItem('role') === 'admin';
    }

    isUser() {
         return this.storage.getItem('role') === 'user';
    }
 

    hasRole(name: string) {
        return this.storage.getItem("role")
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
                    this.storage.setItem("role", result.identity.role);
                    this.storage.setItem("name", result.identity.name);

                    this._authSource.next(true);
                    return result;
                })
    }

    logout() {
        this.storage.removeItem("token");
        this.storage.removeItem("role");
        this.storage.removeItem("name");
        
        this.clearRedirectUrl();

        this._authSource.next(false);
    }
}