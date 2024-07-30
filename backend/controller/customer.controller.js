const {Customer}  = require('../model/cutomer.model.js')
const jwt = require('jsonwebtoken')

const registerAndLoginCustomer = async (req, res, next) => {
    try {
        if(req.user){
            const customerData = req.user
            const email = customerData?.emails[0]?.value
            
            const newCustomer = {
               name:customerData.displayName,
               email,
               profilePic:customerData?.photos[0]?.value,
               provider:customerData.provider
            }
            const token = jwt.sign({newCustomer}, process.env.JWT_SCERET, {
                expiresIn:"2h"
            })
            res.status(200).json({
                status:"success",
                message:"Logged In successfully",
                data:{access_token:token}
            })
        }else{
            res.status(401).json({
                status:"error",
                message:"unauthorized",
            })
        }
    }
    catch (error) {
        next(error)
    }
}

const getCustomerDetails = async (req, res, next) => {
    try {
        let where = {
            active:true
        }
        if(req.query.active){
            where.active=req.query.active
        }
        
        const activeCustomers = await Customer.find(where).select(
            "name address accounts"
          );

        res.status(200).json({
            status:"success",
            message:"customer data retrived",
            data: activeCustomers
        })
    }
    catch (error) {
        next(error)
    }
}


module.exports = {
    registerAndLoginCustomer,getCustomerDetails
}