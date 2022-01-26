const NestedController = require('../controllers/nested.controller');
module.exports = app => {
    app.get('/api/nesteds', NestedController.findAllNesteds);
    app.get('/api/nesteds/:id', NestedController.findOneNested);
    app.put('/api/nesteds/update/:id', NestedController.updateOneNested);
    app.post('/api/nesteds/new', NestedController.createNewNested);
    app.delete('/api/nesteds/delete/:id', NestedController.deleteNested);
};