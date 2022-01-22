const ChatRoomController = require('../controllers/chatroom.controller');
module.exports = app => {
    app.get('/api/chatrooms', ChatRoomController.findAllChatRooms);
    app.get('/api/chatrooms/:id', ChatRoomController.findOneChatRoom);
    app.put('/api/chatrooms/update/:id', ChatRoomController.updateOneChatRoom);
    app.post('/api/chatrooms/new', ChatRoomController.createNewChatRoom);
    app.delete('/api/chatrooms/delete/:id', ChatRoomController.deleteChatRoom);
};