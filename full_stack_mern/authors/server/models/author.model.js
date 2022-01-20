const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Author Name is required."],
        minlength: [3, "Author Name must be at least 3 characters."]
    }
}, {timestamp: true});
module.exports.Author = mongoose.model('Author', AuthorSchema);