const mongoose = require('mongoose');

TransactionSchema = new mongoose.Schema({
    amount: {type: Number},
    vendor: {type: String},
}, {timestamp: true});

const BankAccountSchema = new mongoose.Schema({
    accountType: {type: String, required: true},
    balance: {type: Number, default: 0},
    transactions: [TransactionSchema]
}, {timestamp: true});
module.exports.BankAccount = mongoose.model('BankAccount', BankAccountSchema);
