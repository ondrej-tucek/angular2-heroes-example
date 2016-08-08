import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AboutViewComponent } from '../../views/about';


describe('About', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    AboutViewComponent
  ]);

  it('should log ngOnInit', inject([ AboutViewComponent ], (about) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
