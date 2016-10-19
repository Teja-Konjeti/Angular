import {Component, OnInit} from "@angular/core";

import {BrandService} from "./brand.services";

@Component({
    templateUrl: 'app/brand/templates/brand-list.component.html',
    selector: 'brand-list'
})
export class BrandListComponent implements OnInit {
    brands:any[] = [];
    constructor(private brandService: BrandService) {

    }

    ngOnInit() {
        this.brandService.getBrands()
        .subscribe( (brands: any[]) => {
            this.brands = brands;
        })
    }
 

    ngOnDestroy() {

    }

}