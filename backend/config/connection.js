const mongoose = require('mongoose')

const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to mongodb")
    } catch (error) {
        console.log(`Error while connecting to mongodb ${error}`)
    }
}

module.exports = {
    connectToDB
}