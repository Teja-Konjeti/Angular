// App
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductService {
  constructor(private http: Http) {}

  getProducts() {
    return this.http.get('http://localhost:7070/api/products');
  }
}


// App tests
import { inject, TestBed } from '@angular/core/testing';

import { BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

//import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

//TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('Http', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions],
        },
      ],
    });
  });

  beforeEach(inject([MockBackend], (backend: MockBackend) => {
    const baseResponse = new Response(new ResponseOptions({ body: '[{"name":"Phone1"}]' }));
    backend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
  }));

  it('should return response when subscribed to getUsers', inject([ProductService], (productService: ProductService) => {
      productService.getProducts().subscribe((res: Response) => {
      expect(res.json()).toEqual([{name: 'Phone1'}]);
    });
  }));

})
