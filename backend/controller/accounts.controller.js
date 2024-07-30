const { Accounts } = require("../model/accounts.model")
const {TransRecord} = require("../model/transaction.model")
const { ApiError } = require("../utils/ApiError")

const getAccountTransactionDetail = async (req, res, next) => {
    try {
        const { accountId } = req.params

        const transactions = await TransRecord.findOne({account_id:accountId })
        
        if(!transactions){
            throw new ApiError(404, `No Transactions found for accountId ${accountId}`)
        }

        res.status(200).json({
            status: "success",
            message: "Transactions fetched successfully",
            data: transactions
        })
    }
    catch (error) {
        next(error)
    }
}

const getAccountsTransactonsBelow5000= async (req, res, next) => {
    try {
        const transactions = await TransRecord.find(
            {
                "transactions.amount":{$lt:5000}
            }
        ).select('account_id')
        
        res.status(200).json({
            status: "success",
            message: "Transactions fetched successfully",
            data: transactions
        })
    }
    catch (error) {
        next(error)
    }
}

const getDistinctProducts = async (req, res, next)=>{
    try {
        const products = await Accounts.distinct('products')
        res.status(200).json({
            status: "success",
            message: "Products fetched successfully",
            data: products
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAccountTransactionDetail,getAccountsTransactonsBelow5000,getDistinctProducts 
}