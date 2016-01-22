## docker-container-explorer

This tool provides an explorer for docker container on docker hub and will retrieve additional details on the specific build based on the build sha1.


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to `http://localhost:8080`

### Known Issues
- angular2-polyfills.js is currently being handled manually. 
- bundle size is large, due to inline sourcemaps from angular2 npm source.