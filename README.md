# Angular 2 Workshop Starter

This repository is forked from official Angular 2 quickstart https://github.com/angular/quickstart

https://github.com/nodesense/ngapp has small modifications and additional configurations needed for Angular 2 Workshop 
done by NodeSen.se
 
This repository has support for both SystemJS Module loader, and Webpack as documented in https://angular.io/docs/ts/latest/guide/webpack.html website. 
 
## Notes

Right now, SystemJS, lite-server work can be done by writing Angular 2 application at app/ folder of root directory, index.html file of root directory

For webpack, the starter code is in /src folder

*eventually we shall have single repository between two sources by end of December 2016*


## API Server

We have API server that provides GET, PUT, POST and DELETE methods, handles CORS, Authentication.

The code for api-server located in /server/api-server.js
and the backend is a simple json file /server/db.json

To start API server, run the below command, this starts api-server at port 7070

> npm run api

we have below apis, products are taken from wikipedia smart phone page

    1. /api/products
    2. /api/brands
    3. /api/cities
    4. /api/states
    
we also have delayed resonse apis, useful for promise.all during promise workshop. Delayed api adds random 2-8 seconds delay before response.

    1. /delayed/api/products
    2. /delayed/api/brands
    3. /delayed/api/cities
    4. /delayed/api/states

### Authentication

Note, Authentication is not enabled by default.
We have basic oauth authentication for api-server, which can be 
enabled on need basis by running below command 

To run the server with authentication, we need below command
 
   > npm run api-with-auth

We have three users with hardcoded password.

    staff: staff
    password: staff

    username: user
    password: user

    username: admin
    password: admin

To Authenticate with the server, the client should call below api

    POST http://localhost:7070/oauth/token

must send url-form encoded key/values, with 'username' and 'password' field


Server validate username and password, send JSON reply with serialized user object (without password), user id, JWT Token.

After Authentication, the client should send "Authorization" with Bearer scheme

    Example:

    Authorization: Bearer flfkalsdjflkajdfalflkjdslkfjaslk.kfalsjdklfajsl

    
== Cors ==

Cors is included by default, to disable Cors, command line "noCors" while running the server. We disable cors for demonstration purpose.

       > npm run api-nocors

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v6.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.
 
## Create a new project based on the QuickStart

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone  https://github.com/nodesense/ngapp  my-proj
cd my-proj
```
   
## Install npm packages


Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
```
 
The `npm install` commands install all the package.json dependencies needed for this respository that includes
Angular packages, SystemJS, Karma, Gulp, Webpack, Protractor, Jasmine, including ExpressJS, JSON API Server
for RESTful API server.

### SystemJS
 
The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server` with SystemJS Module Loader
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.


### Webpack

* `npm run start-wp` - runs the webpack server
* `npm run test-wp` - runs the unit tests on webpack server

You're ready to write your application.



### npm scripts

We've captured many of the most useful commands in npm scripts defined in the `package.json`:

* `npm start` - runs the compiler and  lite-server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm test` - compiles, runs and watches the karma unit tests

* `npm run start-wp` starts webpack, webpack-development server, typescript loader
* `npm run test-wp` starts webpack with karma, jasmine unit testing




 