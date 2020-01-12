if(process.env.NODE_ENV === 'production'){
 // we are in a production return set of production keys	
 module.exports = require('./prod');
}
else{
	//we are in a development. return dev keys
	module.exports = require('./dev');
}
