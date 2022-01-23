const ChatRoomController = require('../controllers/chatroom.controller');
const UserController = require('../controllers/user.controller');

module.exports = app => {
    // CLIENT ROUTES
    app.get('/api/chatrooms', ChatRoomController.findAllChatRooms);
    app.get('/api/chatrooms/:id', ChatRoomController.findOneChatRoom);
    app.put('/api/chatrooms/update/:id', ChatRoomController.updateOneChatRoom);
    app.post('/api/chatrooms/new', ChatRoomController.createNewChatRoom);
    app.delete('/api/chatrooms/delete/:id', ChatRoomController.deleteChatRoom);

    // SERVER ROUTES
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneUser);
    app.put('/api/users/update/:id', UserController.updateOneUser);
    app.post('/api/users/new', UserController.createNewUser);
    app.delete('/api/users/delete/:id', UserController.deleteUser);
};