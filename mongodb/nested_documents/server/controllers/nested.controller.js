const { BankAccount } = require('../models/bank_account.model');

// CREATE
module.exports.createNewNested = (req, res) => {
    BankAccount.create(req.body)
    .then(newNested => res.json({ newNested: newNested }))
    .catch(err => res.status(400).json(err));
};

// Read
module.exports.findAllNesteds = (req, res) => {
    BankAccount.find()
        .then(allNesteds => res.json({ nesteds: allNesteds }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err}));
};

module.exports.findOneNested = (req, res) => {
    BankAccount.findOne({ _id: req.params.id })
        .then(nested => res.json({ nested: nested }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err}));
};

// UPDATE
module.exports.updateOneNested = (req, res) => {
    BankAccount.findOneAndUpdate({ _id: req.params.id }, 
        {
            accountType: req.body.accountType,
            balance: req.body.balance,
            $addToSet: {transactions: {amount: req.body.transactions.amount, vendor: req.body.transactions.vendor}}
        }, 
        {new: true, runValidators: true})
        .then(updatedNested => res.json({ updatedNested: updatedNested}))
        .catch(err => res.status(400).json(err));
};

// DELETE
module.exports.deleteNested = (req, res) => {
    BankAccount.deleteOne({ _id: req.params.id })
        .then(result => res.json({ resule: result }))
        .catch(err => res.status(400).json({ message: 'Something went wrong', error: err}));
};