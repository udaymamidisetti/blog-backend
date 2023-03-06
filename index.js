const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { urlencoded } = require("express");
const authController = require("./controllers/authController");
const blogController = require("./controllers/blogController");
const dotenv = require("dotenv").config();
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_URL).then(() => console.log("Connected"));
app.use("/auth", authController);
app.use("/blog", blogController);
app.listen(process.env.PORT, () => console.log("Server Started"));
