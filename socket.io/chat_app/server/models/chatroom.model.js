const mongoose = require('mongoose');
const ChatRoomSchema = new mongoose.Schema({
    messages: {
        type: Array,
        required: [true, "Message list is required."]
    }
}, {timestamp: true});
module.exports.ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);
