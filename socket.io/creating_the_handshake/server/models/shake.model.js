const mongoose = require('mongoose');
const ShakeSchema = new mongoose.Schema({
    type: {type: String}
}, {timestamp: true});
module.exports.Shake = mongoose.model('Shake', ShakeSchema);
