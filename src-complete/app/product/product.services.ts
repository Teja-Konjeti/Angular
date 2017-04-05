import {Injectable, Inject} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

import {HttpClient} from "../auth/auth.http-client";

import {Observable} from "rxjs/Observable";

import "rxjs/Rx";

@Injectable()
export class ProductService {
    
    constructor(private http: HttpClient, 
                @Inject("apiEndPoint") private apiEndPoint:string) {
        console.log("Product Service Created");
        console.log("apiEndPoint", apiEndPoint);
    }
 
    getProducts() {
        return this.http.get(this.apiEndPoint + "/api/products")
            .map( (response: Response) => response.json())
        .toPromise()
    }

    //GET /api/products/1
    getProduct(id :any) : Promise<any> {
        return this.http.get(this.apiEndPoint + "/api/products/" + id)
        .map( (response: Response) => response.json())
        .toPromise();
    }

    //PUT /api/products/1
    //Content-Type: application/json

    //{{data}}
    saveProduct(product: any) {
        let headers: Headers = new Headers({
            "Content-Type": "application/json"
        })

        let requestOptions = new RequestOptions({
            'headers': headers
        })

        let jsonDataText = JSON.stringify(product);

        if (product.id) {
            //PUT /api/products/1
            return this.http.put(this.apiEndPoint + "/api/products/" + product.id,
                jsonDataText,
                requestOptions
            )
            .map( (response : Response ) => response.json())
            .toPromise();
        } else {
            //POST /api/products
            return this.http.post(this.apiEndPoint + "/api/products",
                jsonDataText,
                requestOptions
            )
            .map( (response : Response ) => response.json())
            .toPromise();
        }
    }

    deleteProduct(id: any) {
        return this.http.delete(this.apiEndPoint + "/api/products/" + id)
        .toPromise();
    }

    searchProducts(q: string)   {
         return this.http
                .get(this.apiEndPoint + "/api/products?q=" + q)
                .map( (response: Response) => response.json())
    }

     getBrands() {
        return this.http.get(this.apiEndPoint + "/api/brands")
            .map( (response: Response) => response.json())
        .toPromise()
    }

}