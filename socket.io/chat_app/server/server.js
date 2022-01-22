const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
require('./config/mongoose.config');
app.use(cors(), express.json(), express.urlencoded({extended: true}));
const ChatRoomRoutes = require('./routes/chatroom.routes');
ChatRoomRoutes(app);

const server = app.listen(port, () => console.log('Listening on port '+port+'...'));
const io = require('socket.io')(server, { cors: true });

io.on("connection", socket => {
    console.log(`New connection with id: ${socket.id}`);
    socket.emit('connection_ok', 'Connection to websocket successful.')
    io.emit('new_user_connect', socket.id)
    socket.on('new_message_from_client', msg => {
        io.emit('new_message_from_server', msg);
    })
})