const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('./server/config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({extended: true}));
const PlayerRoutes = require('./server/routes/player.routes')
PlayerRoutes(app);

app.listen(port, () => console.log('Listening on port '+port+'...'));