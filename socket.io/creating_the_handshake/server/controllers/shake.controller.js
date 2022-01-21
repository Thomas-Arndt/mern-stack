const { Shake } = require('../models/shake.model');

// CREATE
module.exports.createNewShake = (req, res) => {
    Shake.create(req.body)
    .then(newShake => res.json({ newShake: newShake }))
    .catch(err => res.status(400).json(err));
};

// Read
module.exports.findAllShakes = (req, res) => {
    Shake.find()
        .then(allShakes => res.json({ shakes: allShakes }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneShake = (req, res) => {
    Shake.findOne({ _id: req.params.id })
        .then(shake => res.json({ shake: shake }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

// UPDATE
module.exports.updateOneShake = (req, res) => {
    Shake.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedShake => res.json({ updatedShake: updatedShake}))
        .catch(err => res.status(400).json(err));
};

// DELETE
module.exports.deleteShake = (req, res) => {
    Shake.deleteOne({ _id: req.params.id })
        .then(result => res.json({ resule: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};