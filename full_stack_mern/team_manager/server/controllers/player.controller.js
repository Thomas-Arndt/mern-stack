const { Player } = require('../models/player.model');

// CREATE
module.exports.createNewPlayer = (req, res) => {
    Player.create(req.body)
    .then(newPlayer => res.json({ newPlayer: newPlayer }))
    .catch(err => res.status(400).json(err));
};

// Read
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({ players: allPlayers }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({ _id: req.params.id })
        .then(player => res.json({ player: player }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

// UPDATE
module.exports.updateOnePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedPlayer => res.json({ updatedPlayer: updatedPlayer}))
        .catch(err => res.status(400).json(err));
};

// DELETE
module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({ _id: req.params.id })
        .then(result => res.json({ resule: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};