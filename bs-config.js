// bs-config.js
"use strict";

/// Export configuration options
module.exports = {
   // "port": 8888, //lite server assign default port
    
    "files" : "./src/**/*.{js, html, css}",
    
    "server" : { 
            "baseDir" : "./",
            "index": "index.html",
            //directory: true,
            routes: {
                "/node_modules": "node_modules"
            }

        },
   
        
    middleware: [
        function (req, res, next) {
            next();
        },
 
]
}