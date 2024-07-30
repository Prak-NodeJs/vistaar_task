const router = require('express').Router()
const passport = require('passport')
const {registerAndLoginCustomer, getCustomerDetails,logout} = require('../controller/customer.controller')
const { verifyToken } = require('../utils/auth')


router.get('/auth/google', passport.authenticate("google", ['profile']))


router.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect:process.env.CLIENT_URL,
    failureRedirect:"/v1/customer/login/failed"
}))
 
router.get("/login/success", registerAndLoginCustomer);

router.get("/login/failed", (req, res)=>{
    res.status(401).json({
		status: 'error',
		message: "Log in failure",
	});
})

router.get('/', verifyToken, getCustomerDetails)

const customerRoutes = router
module.exports={
    customerRoutes
}