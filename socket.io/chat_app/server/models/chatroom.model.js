const mongoose = require('mongoose');
const ChatRoomSchema = new mongoose.Schema({
    uuid: {type: String},
    message: {type: String}
}, {timestamp: true});
module.exports.ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);
