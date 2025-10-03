export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080',
  tokenAllowedDomains: [/localhost:8080/],
  tokenDisallowedRoutes: [/\/oauth2\/token/],
  oauthCallbackUrl: 'http://localhost:4200/authorized',
  logoutRedirectToUrl: 'http://localhost:4200'
};
