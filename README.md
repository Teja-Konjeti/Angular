# Angular 2 Workshop Starter

This repository is forked from official Angular 2 quickstart https://github.com/angular/quickstart

https://github.com/nodesense/ngapp has small modifications and additional configurations needed for Angular 2 Workshop 
done by NodeSen.se
 
This repository has support for both SystemJS Module loader, and Webpack as documented in https://angular.io/docs/ts/latest/guide/webpack.html website. 
 
## Notes

Right now, SystemJS, lite-server work can be done by writing Angular 2 application at app/ folder of root directory, index.html file of root directory

For webpack, the starter code is in /src folder

*eventually we shall have single repository between two sources by end of December 2016*

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




 