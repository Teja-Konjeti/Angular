import {Component} from "@angular/core";

@Component({
    template: `
                Search Text <input [(ngModel)]="q"> <br />
                                
                <table>
                    <tr>
                        <th>Product</th>
                        
                    </tr>
                    <tr *ngFor="let p of (q | searchProducts | async)">
                        <td>
                            <product-widget [productInfo]="p" >
                            </product-widget>
                        </td>
                    </tr>
                </table>
    
    `
})
export class ProductSearchComponent {
    q: any = '';
}