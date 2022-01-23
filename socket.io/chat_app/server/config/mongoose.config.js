const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_chatroom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database, db_chatroom'))
    .catch(err => console.log('Something went wrong connecting to the database...', err));