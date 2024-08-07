const { Customer } = require('../model/cutomer.model.js')
const jwt = require('jsonwebtoken')
const { ApiError } = require('../utils/ApiError.js')

const registerAndLoginCustomer = async (req, res, next) => {
    try {
        const customerData = req.user
        const email = customerData?.emails[0]?.value

        let newCustomer = {
            name: customerData.displayName,
            email,
            profilePic: customerData?.photos[0]?.value,
            provider: customerData.provider
        }

        const token = jwt.sign({ newCustomer }, process.env.JWT_SCERET, {
            expiresIn: '2h'
        })

        res.cookie("token", token, {
            maxAge:2*60*60*1000,
            httpOnly: true,
        });

        res.redirect(process.env.CLIENT_URL)
    }
    catch (error) {
        next(error)
    }
}

const getCustomerDetails = async (req, res, next) => {
    try {
        let where = {
            active: true
        }
        if (req.query.active) {
            where.active = req.query.active
        }

        const activeCustomers = await Customer.find(where).select(
            "name address accounts"
        );

        res.status(200).json({
            status: "success",
            message: "customer data retrived",
            data: activeCustomers
        })
    }
    catch (error) {
        next(error)
    }
}

const checkLoginStatus = async (req, res, next)=>{
  try {
     res.status(200).json({
        success:true,
        message:'logged In',
        data:req.user
     })
  } catch (error) {
    next(error)
  }
}

const logout = async (req, res, next) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                console.log("hello here")
                throw new ApiError(500, err)
            }
            res.clearCookie("token")
            res.status(200).json({ message: 'Logged out successfully' });
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    registerAndLoginCustomer, getCustomerDetails,checkLoginStatus, logout
}