import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'byYear'
})
export class ByYearPipe implements PipeTransform {
    transform (inputs: any, year: any) {
        if (!inputs)
            return;

        if (!year) 
            return inputs;

        let results:any = [];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].year == year) {
                results.push(inputs[i]);
            }
        }
 
        return results;
 
    }
}

import {ProductService} from "./product.services";

@Pipe({
    name: 'searchProducts'
})
export class SearchProductPipe implements PipeTransform {
    constructor(private productService: ProductService) {

    }

    transform(q:any) {
        console.log(q);

        return this.productService.searchProducts(q);
    }
}