// App
import { Component, Input } from '@angular/core';

@Component({
  selector: 'list',
  template: '<span *ngFor="let fruit of fruits">{{ fruit }}</span>',
})
export class ListComponent {
  @Input() public fruits: Array<string> = [];
}


// App tests
import { async, inject, TestBed } from '@angular/core/testing';

//import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

//TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());


describe('ListComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent]
    });

    this.fixture = TestBed.createComponent(ListComponent);
  });

  it('should render list', async(() => {
    const element = this.fixture.nativeElement;
    this.fixture.componentInstance.fruits = ['Apple', 'Orange'];
    this.fixture.detectChanges();
    expect(element.querySelectorAll('span').length).toBe(2);
  }));

});