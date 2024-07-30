const mongoose = require('mongoose')

const tierDetailsSchema = new mongoose.Schema({
    tier: {
        type: String,
    },
    id: {
        type: String
    },
    active: {
        type: Boolean
    },
    benefits: {
        type: [String]
    }
}, { _id: false }
);


const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    accounts: {
        type: [Number],
        required: true
    },
    tier_and_details: {
        type: Map,
        of: tierDetailsSchema
    }
})


const Customer = mongoose.model('Customer', customerSchema)

module.exports = {
    Customer
}