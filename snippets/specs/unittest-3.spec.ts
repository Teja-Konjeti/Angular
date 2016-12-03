import { Component, Input } from '@angular/core';


// App DI
class ProductService {
  public products: Array<{}> = [{name: 'iPhone'}];

  getProducts() {
      return this.products;
  }
}

@Component({
  selector: 'list',
  template: '<span *ngFor="let product of products">{{ product.name }}</span>',
})
class ProductListComponent {
  private products: Array<{}> = [];

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }
}


// App tests
import { async, inject, TestBed } from '@angular/core/testing';

class MockUserService {
  public products: Array<{}> = [{name: 'Phone 1'}];

   getProducts() {
      return this.products;
   }
}

describe('ListComponent DI', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      providers: [{ provide: ProductService, useClass: MockUserService }],
    });

    this.fixture = TestBed.createComponent(ProductListComponent);
  });

  it('should render list', async(() => {
    const element = this.fixture.nativeElement;
    this.fixture.detectChanges();
    expect(element.querySelectorAll('span').length).toBe(1);
  }));

});

/*
// App DI for Component
@Component({
  selector: 'list',
  template: '<span *ngFor="let user of users">{{ user }}</span>',
  providers: [UserService],
})
class ListComponentComponentDI {
  private users: Array<string> = [];

  constructor(userService: UserService) {
    this.users = userService.users;
  }
}

// App DI for Component tests
describe('ListComponent DI Component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponentBootstrapDI],
    });

    this.fixture = TestBed
      .overrideComponent(ListComponentBootstrapDI, {
        set: {
          providers: [{ provide: UserService, useClass: MockUserService }],
        },
      })
      .createComponent(ListComponentBootstrapDI);
  });

  it('should render list', async(() => {
    const element = this.fixture.nativeElement;
    this.fixture.detectChanges();
    expect(element.querySelectorAll('span').length).toBe(2);
  }));

});
*/