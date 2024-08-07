const {ApiError} = require('./ApiError')
const jwt= require('jsonwebtoken')

const verifyToken = async (req, res, next)=>{
    try {
        const token = req.cookies.token
        if (!token){
            throw new ApiError(401, 'unauthorized')
        }
        const user = jwt.verify(token, process.env.JWT_SCERET)
        req.user= user
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    verifyToken
}