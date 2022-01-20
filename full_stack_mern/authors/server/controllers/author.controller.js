const { Author } = require('../models/author.model');

// CREATE
module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => res.json({ newAuthor: newAuthor }))
    .catch(err =>res.status(400).json(err))
};

// Read
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({ authors: allAuthors }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then(author => res.json({ author: author }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

// UPDATE
module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json({ updatedAuthor: updatedAuthor}))
        .catch(err =>res.status(400).json(err));
};

// DELETE
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json({ resule: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};