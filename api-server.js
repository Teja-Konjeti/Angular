// server.js
var jsonServer = require('json-server')

var jwt = require('jwt-simple');
var _ = require("lodash");
var moment = require('moment');

var server = jsonServer.create()
server.set('jwtTokenSecret', 'yX!fglBbZr');






server.get('/', function(req, res) {
    var results = [];
    results.push("<html><head><title>json-api-server</title></head>");
    results.push("<body>");
    
    results.push("<h1>Welcome to API Server</h2>");
    
    results.push("<p>Server is running at http://localhost:7070</p>");

    var port = 7070;

    var endPoints = [ 
        'products',
        'brands',
        'cities',
        'states',
    ]
    
    results.push("<h1>API End Points</h2>");
    
    results.push("<ul>");
    _.each(endPoints, function(endPoint){
        results.push("<li>");
        var link = "http://localhost:" + port + "/api/" + endPoint;
        results.push("<a href='" + link + "'>" + link + "</a>");
        results.push("</li>");
    })
    results.push("</ul>");



    results.push("<h1>Delayed End Points (2 to 8 seconds delay)</h2>");
    
    results.push("<ul>");
    _.each(endPoints, function(endPoint){
        results.push("<li>");
        var link = "http://localhost:" + port + "/delayed/api/" + endPoint;
        results.push("<a href='" + link + "'>" + link + "</a>");
        results.push("</li>");
    })
    results.push("</ul>");

    results.push("</body></html>");
    res.send(results.join("\n"));
    res.end();
})


var commandLine = process.argv.join(" ").toLowerCase();
console.log("Command Line ", commandLine);

console.log(process.argv);

var defaultsOpts = {
     
}
 

if (commandLine.indexOf("nocors") >= 0) {
    defaultsOpts.noCors = true;
}

var middlewares = jsonServer.defaults(defaultsOpts)
server.use(middlewares)

server.use(function(req, res, next){
       if (req.url.indexOf("/delayed") > -1) {
            //delay minimum 2 - 7 seconds
            req.url = req.url.replace("/delayed", ""); 

            setTimeout(function(){
                next();      
            }, Math.floor(2 + Math.random() * 7) * 1000);
        } else {
            next();
        }
})


var users = [
    {
        id: 1,
        name: 'Administrator',
        role: 'Admin',
        username: 'admin',
        password: 'admin'
    },

    {
        id:2,
        name: 'Staff',
        role: 'Staff',
        username: 'staff',
        password: 'staff'
    },

    {
        id: 3,
        name: 'User',
        role: 'User',
        username: 'user',
        password: 'user'
    }
]


server.use(jsonServer.rewriter({
  '/delayed': '/'
}))

function authenticateUser(req, res) {
    console.log("auth ", req.body.username);

     
    var user = _.find(users, function(user) { return user.username == req.body.username && user.password == req.body.password; });

    if (!user) {
             res.sendStatus(403);
             return;
    }

    var expires = moment().add('days', 7).valueOf();
    var token = jwt.encode({
    iss: user.id,
    exp: expires
    }, server.get('jwtTokenSecret'));

    //remove password before sending to client
    var safeUser = _.clone(user);
    delete safeUser.password;

    res.json({
        token : token,
        expires: expires,
        user: safeUser
    });
 
}

function validateToken(req, res, next) {
    var bearerToken;
    
    var token = req.headers["x-auth-token"];

    if (!token) {
        if (req.headers["authorization"]) {
            token = req.headers["authorization"].split(" ")[1];
        }
    }

    if(!token) {
        res.sendStatus(403);
        return;
    }

    try {
        var decoded = jwt.decode(token, server.get('jwtTokenSecret'));

        
        if (decoded.exp <= Date.now()) {
             res.sendStatus(400);
            return;
        }

        
        var user = _.find(users, function(user) { return user.id == decoded.iss});

        if (!user) {
            res.sendStatus(400);
            return;
        }
    }catch(ex) {
        res.sendStatus(400);
        return;
    }


    next();
     
}


if (commandLine.indexOf("authenable") >= 0) {
     console.log("Authentication enabled");
     server.post('/authenticate', authenticateUser)
     server.use(validateToken); 
}
  
var router = jsonServer.router('db.json')
server.use('/api', router)



server.listen(7070, function (err) {
    if (!err) {
         console.log('JSON Server is running  at 7070')
    }
})