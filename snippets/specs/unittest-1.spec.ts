// App
import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<span>{{ sayHello() }}</span>',
})
export class ApplicationComponent {
  public name: string = 'Angular';

  sayHello(): string {
    return `Hello ${this.name}`;
  }
}

// App tests

describe('ApplicationComponent Test', () => {

  beforeEach(() => {
    this.app = new ApplicationComponent();
  });

  it('should have name property', () => {
    expect(this.app.name).toBe('Angular');
  });

  it('should say hello with name property', () => {
    expect(this.app.sayHello()).toBe('Hello Angular');
  });

});
