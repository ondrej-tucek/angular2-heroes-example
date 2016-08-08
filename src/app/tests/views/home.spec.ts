import {
  beforeEachProviders,
  describe,
  inject,
  it
} from '@angular/core/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { HomeViewComponent } from '../../views/home';


describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    BaseRequestOptions,
    MockBackend,
    {
      provide: Http,
      useFactory: function(backend, defaultOptions) {
        return new Http(backend, defaultOptions);
      },
      deps: [MockBackend, BaseRequestOptions]
    },

    HomeViewComponent
  ]);

  it('should have default data', inject([ HomeViewComponent ], (home) => {
    expect(home.localState).toEqual({ value: '' });
  }));

  it('should log ngOnInit', inject([ HomeViewComponent ], (home) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    home.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
