/*
 * These are globally available services in any component or any other service
 */

// Angular 2
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
// Angular 2 Http
import { HTTP_PROVIDERS } from '@angular/http';
// Angular 2 Forms
import { disableDeprecatedForms, provideForms } from '@angular/forms';
// Angular 2 Material
// TODO(gdi2290): replace with @angular2-material/all
import { MATERIAL_PROVIDERS } from './material';

/*
* Application Providers/Directives/Pipes
* providers/directives/pipes that only live in our browser environment
*/
export const APPLICATION_PROVIDERS = [
  disableDeprecatedForms(),
  provideForms(),
  ...HTTP_PROVIDERS,
  ...MATERIAL_PROVIDERS,
  { provide: LocationStrategy, useClass: PathLocationStrategy }
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
