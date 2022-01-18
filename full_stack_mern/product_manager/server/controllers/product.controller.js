const { Product } = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json({ products: allProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(product => res.json({ product: product }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json({ newProduct: newProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
        .then(updatedProduct => res.json({ updatedProduct: updatedProduct}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => res.json({ resule: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};