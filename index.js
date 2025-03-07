const express = require("express");
require("dotenv").config();
const app = express();
const dbConnect = require("./config/database.js");

const PORT = process.env.PORT || 5004;

app.use(express.json());

app.listen(PORT, (req, res) => {
    console.log(`Sever is running at port ${PORT}`);
})