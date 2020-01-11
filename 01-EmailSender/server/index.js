const express = require('express');
const app = express();

//route handler
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});


//dynamic port binding with environment variables and 5000 in developer environment
const PORT  = process.env.PORT || 5000;
app.listen(PORT);
