export const environment = {
  production: true,
  apiUrl: 'https://algamoneyjp-api.herokuapp.com',
  tokenAllowedDomains: [ new RegExp ('/algamoneyjp-api.herokuapp.com/') ],
  tokenDisallowedRoutes: [ new RegExp ('/\/oauth\/token/')]
};
