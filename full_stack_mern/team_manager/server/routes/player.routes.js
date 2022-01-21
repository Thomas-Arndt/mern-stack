const PlayerController = require('../controllers/player.controller');
module.exports = app => {
    app.get('/api/players', PlayerController.findAllPlayers);
    app.get('/api/players/:id', PlayerController.findOnePlayer);
    app.put('/api/players/update/:id', PlayerController.updateOnePlayer);
    app.post('/api/players/new', PlayerController.createNewPlayer);
    app.delete('/api/players/delete/:id', PlayerController.deletePlayer);
};