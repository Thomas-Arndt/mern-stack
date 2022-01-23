const { User } = require('../models/user.model');

// CREATE
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
    .then(newUser => res.json({ newUser: newUser }))
    .catch(err => res.status(400).json(err));
};

// Read
module.exports.findAllUsers = (req, res) => {
    User.find()
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json({ user: user }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

// UPDATE
module.exports.updateOneUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedUser => res.json({ updatedUser: updatedUser}))
        .catch(err => res.status(400).json(err));
};

// DELETE
module.exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(result => res.json({ resule: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};