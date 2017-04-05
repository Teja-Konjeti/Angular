import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {Observable} from "rxjs/observable";

import {AuthService} from "./auth.service";

@Injectable()
export class HttpClient {
  constructor(private http: Http,
              private authService: AuthService
    ) {
  }

  addAuthHeaders(options: RequestOptionsArgs) {
    let headers:Headers;
    
    if (!options.headers) { 
        options.headers = new Headers();
    }

    if (this.authService.isAuthenticated()) {
       let token = this.authService.getToken();
       options.headers.append('Authorization', 'Bearer ' + token);
    }
  }
 
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('get...');
   
    if (!options) {
        options = new RequestOptions()
    } 

    this.addAuthHeaders(options);
    
    return this.http.get(url, options);
  }

  post(url: string, data:any,  options?: RequestOptionsArgs) {
    console.log("post");
    if (!options) {
        options = new RequestOptions()
    } 

    this.addAuthHeaders(options);
    return this.http.post(url, data, options);
  }

  put(url: string, data:any,  options?: RequestOptionsArgs) {
    console.log("put");
    if (!options) {
        options = new RequestOptions()
    } 

    this.addAuthHeaders(options);
    return this.http.put(url, data, options);
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    console.log('delete...');
   
    if (!options) {
        options = new RequestOptions()
    } 

    this.addAuthHeaders(options);
    
    return this.http.delete(url, options);
  }

}