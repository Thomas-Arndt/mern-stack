const ChatRoomController = require('../controllers/chatroom.controller');
const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    // CHATROOM ROUTES
    app.get('/api/chatrooms', ChatRoomController.findAllChatRooms);
    app.get('/api/chatrooms/:id', ChatRoomController.findOneChatRoom);
    app.put('/api/chatrooms/update/:id', ChatRoomController.updateOneChatRoom);
    app.post('/api/chatrooms/new', ChatRoomController.createNewChatRoom);
    app.delete('/api/chatrooms/delete/:id', ChatRoomController.deleteChatRoom);

    // USER ROUTES
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneUser);
    app.get('/api/users/email/:email', UserController.findOneUserByEmail);
    app.put('/api/users/update/:id', UserController.updateOneUser);
    app.delete('/api/users/delete/:id', UserController.deleteUser);

    // LOGIN/REGISTRATION
    app.post('/api/login', UserController.login);
    app.post('/api/register', UserController.createNewUser);
    app.get('/logout', UserController.logout)

    // AUTHORIZATION
    app.get('/api/authorize', UserController.authorize);
};