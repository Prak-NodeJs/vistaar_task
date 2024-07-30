const router = require('express').Router()

const { getAccountTransactionDetail,getAccountsTransactonsBelow5000, getDistinctProducts } = require('../controller/accounts.controller')
const { verifyToken } = require('../utils/auth')

router.get("/products",getDistinctProducts)

router.get("/:accountId", verifyToken,getAccountTransactionDetail)
router.get("/transactions/below5000",verifyToken,getAccountsTransactonsBelow5000)


const accountsRoutes = router
module.exports={
   accountsRoutes
}