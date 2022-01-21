const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('./config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({extended: true}));
const HandshakeRoutes = require('./routes/shake.routes')
HandshakeRoutes(app);

const server = app.listen(port, () => console.log('Listening on port '+port+'...'));
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log("Nice to meet you! (shake hand)");
    console.log(socket.id);
    socket.emit("test", "This is a test socket connection to Thomas's handshake app.")
});