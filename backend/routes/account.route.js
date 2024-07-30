const router = require('express').Router()

const { getAccountTransactionDetail,getAccountsTransactonsBelow5000, getDistinctProducts } = require('../controller/accounts.controller')

router.get("/products",getDistinctProducts)

router.get("/:accountId", getAccountTransactionDetail)
router.get("/transactions/below5000",getAccountsTransactonsBelow5000)


const accountsRoutes = router
module.exports={
   accountsRoutes
}