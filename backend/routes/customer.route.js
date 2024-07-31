const router = require('express').Router()
const passport = require('passport')
const {registerAndLoginCustomer, getCustomerDetails,logout} = require('../controller/customer.controller')
const { verifyToken } = require('../utils/auth')


router.get('/auth/google', passport.authenticate("google", ['profile']))


router.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect:process.env.CLIENT_URL,
    failureRedirect:process.env.CLIENT_URL
}))
 
router.get("/login/success", registerAndLoginCustomer);
router.post("/logout",verifyToken, logout);


router.get('/', verifyToken, getCustomerDetails)

const customerRoutes = router
module.exports={
    customerRoutes
}