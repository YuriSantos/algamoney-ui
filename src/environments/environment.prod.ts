export const environment = {
  production: true,
  apiUrl: 'https://algamoneyjp-api.herokuapp.com',
  tokenAllowedDomains: [ /algamoneyjp-api.herokuapp.com/ ],
  tokenDisallowedRoutes: [/\/oauth\/token/]
};
