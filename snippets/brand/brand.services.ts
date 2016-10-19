import {Injectable, Inject} from "@angular/core";

import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class BrandService {
    constructor(private http: Http,
                @Inject("apiEndPoint") private apiEndPoint:string) {

    }

    getBrands() {
        return this.http.get(this.apiEndPoint + "/api/brands")
        .map((response: Response) => response.json()); 
    }
}