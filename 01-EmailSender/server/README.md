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
