const ShakeController = require('../controllers/shake.controller');
module.exports = app => {
    app.get('/api/shakes', ShakeController.findAllShakes);
    app.get('/api/shakes/:id', ShakeController.findOneShake);
    app.put('/api/shakes/update/:id', ShakeController.updateOneShake);
    app.post('/api/shakes/new', ShakeController.createNewShake);
    app.delete('/api/shakes/delete/:id', ShakeController.deleteShake);
};