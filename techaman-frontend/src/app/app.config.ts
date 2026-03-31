import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { KeycloakAngularModule, KeycloakService, KeycloakBearerInterceptor } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
return () =>
keycloak.init({
config: {
url: 'http://localhost:8080',
realm: 'techaman-realm',
clientId: 'techaman-angular'
},
initOptions: {
onLoad: 'login-required',
checkLoginIframe: false
},
enableBearerInterceptor: true,
bearerExcludedUrls: ['/assets', '/clients/public']
});
}

export const appConfig: ApplicationConfig = {
providers: [
provideRouter(routes),
provideHttpClient(withInterceptorsFromDi()),
importProvidersFrom(KeycloakAngularModule),
{
provide: APP_INITIALIZER,
useFactory: initializeKeycloak,
multi: true,
deps: [KeycloakService]
},
{
provide: HTTP_INTERCEPTORS,
useClass: KeycloakBearerInterceptor,
multi: true
},
KeycloakService
]
};