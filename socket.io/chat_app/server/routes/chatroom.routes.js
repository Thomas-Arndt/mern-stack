const ChatRoomController = require('../controllers/chatroom.controller');
const UserController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    // CHATROOM ROUTES
    app.get('/api/chatrooms', authenticate, ChatRoomController.findAllChatRooms);
    app.get('/api/chatrooms/:id', authenticate, ChatRoomController.findOneChatRoom);
    app.put('/api/chatrooms/update/:id', authenticate, ChatRoomController.updateOneChatRoom);
    app.post('/api/chatrooms/new', ChatRoomController.createNewChatRoom);
    app.delete('/api/chatrooms/delete/:id', authenticate, ChatRoomController.deleteChatRoom);

    // USER ROUTES
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', authenticate, UserController.findOneUser);
    app.get('/api/users/email/:email', authenticate, UserController.findOneUserByEmail);
    app.put('/api/users/update/:id', UserController.updateOneUser);
    app.delete('/api/users/delete/:id', authenticate, UserController.deleteUser);

    // LOGIN/REGISTRATION
    app.post('/api/login', UserController.login);
    app.post('/api/register', UserController.createNewUser);
    app.get('/logout', UserController.logout)

    // AUTHORIZATION
    app.get('/api/authorize', UserController.authorize);
};