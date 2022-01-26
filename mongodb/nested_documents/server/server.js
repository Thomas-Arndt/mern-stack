// IMPORT PACKAGES
const express = require('express');
const cors = require('cors');
const app = express();

// CONFIGURE MONGOOSE
require('./config/mongoose.config');

// CONFIGURE EXPRESS
app.use(
    cors(), 
    express.json(), 
    express.urlencoded({extended: true})
    );

// ROUTES
require('./routes/nested.routes')(app);

// PORT
const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));