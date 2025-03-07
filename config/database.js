const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("MongoDB connected successfully :)");
    } catch (error) {
        console.log("MongoDB connection unsuccessfull !");
    }
}

module.exports = connectdb()