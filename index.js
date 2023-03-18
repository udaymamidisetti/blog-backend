const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { urlencoded } = require("express");
const authController = require("./controllers/authController");
const blogController = require("./controllers/blogController");
const multer = require("multer");
const dotenv = require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGOOSE_URL).then(() => console.log("Connected"));
app.use("/auth", authController);
app.use("/blog", blogController);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.filename);
  },
});
const upload = multer({
  storage: storage,
});
app.post("/upload", upload.single("image"), async (req, res) => {
  return res.status(200).json({ msg: "Successsfully Uploaded" });
});
app.listen(process.env.PORT, () => console.log("Server Started"));
