import { Injectable } from '@angular/core';

export abstract class CartStorageService {

    constructor(private storage: Storage) {

    }

    addProduct(product: any) {
        let productJson = this.storage.getItem("product." + product.id);

        if (!productJson) {
            let item: any = {
                name: product.name,
                id: product.id,
                quantity: 1
            }

            this.storage.setItem("product." + product.id, JSON.stringify(item));
        } else {
         let item = JSON.parse(productJson);
            item.quantity += 1;
            this.storage.setItem("product." + product.id, JSON.stringify(item));
        }
    }


    
  removeProduct(id: any) {
    this.storage.removeItem("product." + id);
  }

  getProducts() {
    let items : any = [];

    for(var key in this.storage) {
      if (key.indexOf("product.") >= 0) {
        items.push(JSON.parse(this.storage.getItem(key)));
      }
    }

    return items;
  }

  removeAll() {
      //this.storage.clear(); //buggy, shall remove all keys

    for(var key in this.storage) {
        if (key.indexOf("product.") >= 0) {
            this.storage.removeItem(key);
        }
    }
  }
}

export class CartLocalStorageService extends CartStorageService {
    constructor() {
        super(window.localStorage);
    }
}


export class CartSessionStorageService extends CartStorageService {
    constructor() {
        super(window.sessionStorage);
    }
}