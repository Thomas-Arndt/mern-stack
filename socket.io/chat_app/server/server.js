// IMPORT PACKAGES
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('dotenv').config();
const cookieParser = require('cookie-parser');

// CONFIGURE MONGOOSE
require('./config/mongoose.config');

// CONFIGURE EXPRESS
app.use(
    cors({credentials:  true, origin: 'http://localhost:3000'}), 
    express.json(), 
    express.urlencoded({extended: true}), 
    cookieParser()
    );

// ROUTES
const ChatRoomRoutes = require('./routes/chatroom.routes');
ChatRoomRoutes(app);

// PORT
const server = app.listen(port, () => console.log('Listening on port '+port+'...'));

// IMPORT/CONFIGURE WEBSOCKET
const io = require('socket.io')(server, { cors: true });

// WEBSOCKET CONNECTION
io.on("connection", socket => {
    console.log(`New connection with id: ${socket.id}`);
    
    socket.emit('connection_ok', 'Connection to websocket successful.')
    io.emit('new_user_connect', socket.id)

    socket.on('new_message_from_client', msg => {
        io.emit('new_message_from_server', msg);
    })
})