import express from "express";
import multer from "multer";
import {
  datacreate,
  getdata,
  updatedata,
} from "../controllers/user.controller.js";

// import {datacreate,getdata,updatedata} from "./src/controllers/user.controller.js"


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + "/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix =
      file.fieldname +
      "-" +
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      "-" +
      file.originalname;
    req.body.profile = uniqueSuffix;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const userroutes = (app) => {
  let routes = express.Router();
  routes.post("/userdatacreate",upload.single("profile"), datacreate);
  routes.post("/getuserdata", getdata);
  routes.put("/putuserdata", updatedata);

  app.use("/user", routes);
};

export default userroutes;
