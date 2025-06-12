import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, inject } from '@angular/core';
import { provideRouter, Router } from '@angular/router';
import { provideHttpClient, withInterceptors, HttpRequest } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([
        (req: HttpRequest<unknown>, next) => {
          // Get the auth token from localStorage
          const authToken = localStorage.getItem('authToken');
          
          // Clone the request and add the authorization header if token exists
          if (authToken) {
            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${authToken}`
              }
            });
          }
          
          return next(req);
        }
      ])
    )
  ]
};
