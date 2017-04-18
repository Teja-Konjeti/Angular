import {Injectable} from "@angular/core"

@Injectable()

export class ProductService{

    constructor()
    {
        console.log("Product Service");
    }

    getProducts()
    {
        return [
            {name:'moto'},
            {name:'iphone'},
            {name:'blacckberry'}
        ]
    }
}