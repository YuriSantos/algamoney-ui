import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app-routing.module';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

export function tokenGetter(): string {
  return localStorage.getItem('token') || '';
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    providePrimeNG(),
    JwtHelperService,
    {
      provide: JWT_OPTIONS,
      useValue: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains,
        disallowedRoutes: environment.tokenDisallowedRoutes
      }
    }
  ]
};
