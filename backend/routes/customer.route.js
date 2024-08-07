const router = require('express').Router()
const passport = require('passport')
const {registerAndLoginCustomer, getCustomerDetails,checkLoginStatus,logout} = require('../controller/customer.controller')
const { verifyToken } = require('../utils/auth')


router.get('/auth/google', passport.authenticate("google", ['profile']))

router.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect:'/v1/customer/login/success',
    failureRedirect:process.env.CLIENT_URL
}))
 
router.get("/login/success", registerAndLoginCustomer);

router.get("/check/login",verifyToken, checkLoginStatus)


router.post("/logout",verifyToken, logout);

router.get('/', verifyToken, getCustomerDetails)

const customerRoutes = router
module.exports={
    customerRoutes
}