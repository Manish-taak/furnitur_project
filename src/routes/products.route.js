import express from "express";

import { datacreate, findAlldata } from "../controllers/products.controller.js";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(process.cwd());
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
    req.body.image = uniqueSuffix;
    cb(null, uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const products = (app) => {
  let routes = express.Router();
  routes.post("/create", upload.single("image"), datacreate);
  routes.get("/findall", findAlldata);
  app.use("/product/", routes);
};

export default products;

