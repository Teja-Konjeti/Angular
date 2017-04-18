import {Injectable} from "@angular/core"
import {Http,Response} from "@angular/http";

import "rxjs/add/operator/map"
@Injectable()

export class ProductService{

    constructor(private http:Http)
    {
        console.log("Product Service");
    }

 getProducts(){
        return this.http.get("http://localhost:7070/api/products")
                    .map((response:Response) => {
                        console.log("response: ",response);
                        let products = response.json();

                        products.map ((product:any)=>{
                            product.likes = Math.ceil(Math.random()*1000);

                            product.price = 20+Math.ceil(Math.random()*1000);
                            product.released = new Date();
                        })

                        return products;
        })
    }
}