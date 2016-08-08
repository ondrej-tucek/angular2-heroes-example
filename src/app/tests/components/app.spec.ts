import {
  beforeEachProviders,
  inject,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { AppComponent } from '../../components/app';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    AppComponent
  ]);

  it('should have a url', inject([ AppComponent ], (app) => {
    expect(app.name).toEqual('Heroes example');
  }));

});
