const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    account_id: {
        type: Number,
        required: true,
        unique:true
    },
    limit: {
        type: Number,
        required: true
    },
    products: {
        type: [String], required: true
    }
}, {
    timestamps:true
})

const Accounts = mongoose.model('Accounts', accountSchema)

module.exports = {
    Accounts
}

