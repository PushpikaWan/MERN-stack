# SERVER SIDE

## Node and Express
 - Node - javascript runtime used to execute code outside of the browser
 - Express - library that run it the node runtime. Had a helper to deal with html trafic easier 

 ### Express
 - use route handlers to handel traffic
 - can write sperate route handlers for services

 ~~~
app.get('/home', (req, res) => {
  res.send({hi: there})
});
 ~~~

* app - declare route handler
* get(..) - we can use opertation like (post, put, delete, patch)
* /home - declare a route
* req - request object
* res - response object
* res.send(...) - send json response immediatley by closing request
* this app.post, put, delete...... can have any number of arguments (functions). when it hits all the functions are call accroding to the sequence. we can put require middlewares there.

~~~
app.listen(5000);
~~~
* to listen node server of 5000 port

### Heroku deployment

- use to deploy app over the internet
- heroku provide dynamic port binding. Therfore it tells port what we need to run\
- need to specify node version to heroku

~~~
const PORT  = process.env.PORT || 5000

~~~
 - need to mention npm and node version in package.json
 ~~~
  "engines":{
    "node": "10.16.0",
    "npm": "6.9.0"
  }
 ~~~
- add starting script
~~~
 "scripts": {
    "start": "node index.js"
  },
~~~
- make sure to add .gitignore file with node_modules
- install heroku CLI
- ** important ** need to add heroku git to root therefore better to create new git project to deploy server (copy this and use below command there)

~~~
git init
heroku create - this will return git remote address and we can use it below
git remote add heroku <url that got from above command>
git push heroku master
heroku open - to open browser
heroku logs - to open logs
~~~

## Passport JS
- partialy automate google authentication flow
- need to add two libs 
  1. passport - general helper for handling auth in express apps
  2. passport stratergy - helper for authenticating with specific method (email, fb, google,...) 
~~~
npm install passport passport-google-oauth20
~~~

## Google account configure with OAuth
- navigate to https://console.developers.google.com/
- create new project and enable oAuth there
- need to add webclient there. then we can get client and secret
- need to add correct Redirect URL there while creating consent  other wise not work
- way to store client secreat in project
  - create config/ keys.js and add all keys there
  - add that file to gitignore

## cookie
- http is stateless therfore server cannot contains any state of clients
- therefore we can use cookie with server requests to inform the client data like tokens
- cookies are automatically manage by browser
- can use cookie-session library
- use passport to serialize and deserialize user object to work with cookie
- need to set below properites to configure cookie
~~~
app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000, //in milliseconds
    keys: ['afsafaefaeaefafaefaefae'] //any random string
  })
);

app.use(passport.initialize());
app.use(passport.session());
~~~

### notes
- all of these passport, cookie-session can be identified as middlewares
- can see with app.use (....)

## Mongo db - use Mongoose
- collection of collections
- schema less can have any structure
- mongose use model class to refer collections
- mongose use model instance to refer records in collections
- there are two ways to use mongo db
  - install in machine
  - use external app hosted in web
- never use require with mongoose module. It needs single instance
  - require mongoose lib with files
  - then get models using that

~~~
const mongoose = require('mongoose');
const User = mongoose.model('User');


//relation ship of survey and user
_user: { type: Schema.Types.ObjectId, ref:'User'}
~~~

## Dev vs Prod
- It's good to create separate google-apis, cookie keys like keys what we set on keys file for dev and production environments
- 

## Promise
- use fetch (). then to call
- can replace by async awit

~~~
//promise
function fetchData(){
  fetch('https:/.......')                 //promise 1
    .then(res => res.json())             // promise 2
    .then(json => console.log(json)); 
}

// async awiat

async function fetchData(){
  const res = await fetch('https:/.......');
  const json = await res.json();          
  console.log(json);   
}

~~~

## production and deployment of client and server
- first check routes are available in express, if not it check the matching client routes
- need to add below code segment

~~~

if (process.env.NODE_ENV === 'production') {
	//express we serve up production assets
	//like our main.js and main.css files
	app.use(express.static('client/build'));

	// express will serve up the index.html file
	//if id doesn't recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
	});
}
~~~
- need to build client side in heroku otherwise we need to add build directory to heroku. But it is not a good option 
-another option (use largely) - pusht to CI -> run tests and stuffs -> CI builds and commits client -> CI pushes build to Heroku
- we use this optio  - pust to heroku -> tell heroku to install all dependencies for client -> Heroku build client project (can use post build)
- use below commands https://devcenter.heroku.com/articles/nodejs-support#customizing-the-build-process
~~~
in package.json
		"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
~~~

## Web hooks - local tunnel
- use local  tunnel
- It allows to share a web service on local development machine without messing with DNS and firewall settings
- we need to add below code to pacakge.json to run local tunnle.
- be careful to provide very unique subdomin name otherwise u will receive any other person's callbacks as well with same name (use random word like - df23erd4w3rfd3wefdsx)
~~~
		"webhook":"lt -p 5000 -s <unique subdomain>"
~~~
- append this call to dev script as well to start concurrently
~~~
	"dev": "concurrently \"npm run server\" \"npm run client\" \"npm run webhook\"",
~~~

## ngrok is alternative for local tunnel https://ngrok.com/

