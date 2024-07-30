const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  transaction_code: {
    type: String,
    enum: ['buy', 'sell'],
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  price: {
    type: String, 
    required: true
  },
  total: {
    type: String, 
    required: true
  }
});

const transactionsShema = new mongoose.Schema({
  account_id: {
    type: Number,
    required: true,
    unique:true
  },
  transaction_count: {
    type: Number,
    required: true
  },
  bucket_start_date: {
    type: Date,
    required: true
  },
  bucket_end_date: {
    type: Date,
    required: true
  },
  transactions: [transactionSchema] 
});

const TransRecord = mongoose.model('Transaction',  transactionsShema);

module.exports =  {
    TransRecord
}
