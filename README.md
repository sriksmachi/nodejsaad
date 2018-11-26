# AzureAD with Node.js 7.x
This solution demonstrates a simple Node.js app built with minimum version 7.4.0.  To see a tutorial using Node.js version 4.x, see https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-devquickstarts-openidconnect-nodejs.

##Installation
This solution requires an SSL server.  Certificates are not provided in the repository, you will need to generate them.  In the root of the project:

```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```

The config.js file uses environment variables instead of checking secrets into code.  Using Visual Studio Code, this is simple.  Click Debug, then Settings to generate the .vscode/launch.json file.  Edit to include the following secrets:

```{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceRoot}/app.js",
            "env": {
                "CLIENT_ID":"<YOUR CLIENT ID FROM AZURE AD>",
                "CLIENT_SECRET":"<YOUR SECRET FROM AZURE AD>",
                "REDIRECT_URL":"<YOUR REDIRECT URL... For example, https://localhost/auth/openid/return",
                "AUDIENCE": "https://<NAME OF YOUR TENANT>.onmicrosoft.com/node-aad",
                "IDENTITY_METADATA":"https://login.microsoftonline.com/<NAME OF YOUR TENANT>.onmicrosoft.com/.well-known/openid-configuration"
            }
        },
        {
            "type": "node",
            "request": "attach",
            "name": "Attach to Process",
            "address": "localhost",
            "port": 5858
        }
    ]
}
```
If you are not using Visual Studio Code, you can launch node using the desired environment variables as parameters.

```
sudo CLIENT_ID=YOUR CLIENT_ID CLIENT_SECRET=YOUR_APP_SECRET_KEY REDIRECT_URL=https://localhost/auth/openid/return AUDIENCE=https://<YOUR_TENANT>.onmicrosoft.com/node-aad IDENTITY_METADATA=https://login.microsoftonline.com/<YOUR_TENANT>.onmicrosoft.com/.well-known/openid-configuration node app.js 
```
