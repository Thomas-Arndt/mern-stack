const { ChatRoom } = require('../models/chatroom.model');

// CREATE
module.exports.createNewChatRoom = (req, res) => {
    ChatRoom.create(req.body)
    .then(newChatRoom => res.json({ newChatRoom: newChatRoom }))
    .catch(err => res.status(400).json(err));
};

// Read
module.exports.findAllChatRooms = (req, res) => {
    ChatRoom.find()
        .then(allChatRooms => res.json({ chatrooms: allChatRooms }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneChatRoom = (req, res) => {
    ChatRoom.findOne({ _id: req.params.id })
        .then(chatroom => res.json({ chatroom: chatroom }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err}));
};

// UPDATE
module.exports.updateOneChatRoom = (req, res) => {
    ChatRoom.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedChatRoom => res.json({ updatedChatRoom: updatedChatRoom}))
        .catch(err => res.status(400).json(err));
};

// DELETE
module.exports.deleteChatRoom = (req, res) => {
    ChatRoom.deleteOne({ _id: req.params.id })
        .then(result => res.json({ resule: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err}));
};