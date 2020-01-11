const express = require('express');

require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);
//dynamic port binding with environment variables and 5000 in developer environment
const PORT = process.env.PORT || 5000;
app.listen(PORT);
