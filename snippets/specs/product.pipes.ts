//TODO: implement ByYearPipe
//TODO: implement AutoComplete Search

import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'byYear'  
})
export class ByYearPipe implements PipeTransform {
    transform(products?:any[], year?:number | string) {
        if (products)
            console.log("products at pipe ", products.length);

        console.log("byYEar ", year);

        if (!products)
            return;
        
        if (!year) {
            return products;
        }

        let results:any[] = [];

        for(let product of products) {
            if (product.year == year) {
                results.push(product);
            }
        }

        return results;
    }
}
