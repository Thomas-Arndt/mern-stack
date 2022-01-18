const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('./server/config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({extended: true}));
const ProductRoutes = require('./server/routes/product.routes')
ProductRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}...`));