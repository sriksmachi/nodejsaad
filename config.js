exports.creds = {
    clientID: 'dc2b892f-6b61-4f58-9937-1b6f7b4544aa',
    clientSecret: 'WM/cqDPMfOovHF/H8w34ECJrRDIQOhUjpdXoFT5NOCg=',
    audience: 'https://governanceframework.onmicrosoft.com/nodejsapp',    
    redirectUrl: 'https://localhost:443/auth/openid/return',
    // you cannot have users from multiple tenants sign in to your server unless you use the common endpoint
    // example: https://login.microsoftonline.com/common/.well-known/openid-configuration
    identityMetadata: 'https://login.microsoftonline.com/governanceframework.onmicrosoft.com/.well-known/openid-configuration',
    validateIssuer: true, // if you have validation on, you cannot have users from multiple tenants sign in to your server
    passReqToCallback: false,
    responseType: 'id_token', // for login only flows use id_token. For accessing resources use `id_token code
    responseMode: 'form_post', // For login only flows we should have token passed back to us in a POST
    loggingLevel: 'info', // valid are 'info', 'warn', 'error'. Error always goes to stderr in Unix.
    scope: ['email', 'profile'] // additional scopes you may wish to pass
};