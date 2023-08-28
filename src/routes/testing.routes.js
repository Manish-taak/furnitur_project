import express from "express";

import {
  findonedata,
  findAlldata,
  destroydata,
  updateusers,
} from "../controllers/testingloginform.js";

const testingroutes = (app) => {
  let routes = express.Router();

  routes.post("/getonedata", findonedata);
  routes.get("/getAlldata", findAlldata);
  routes.delete("/deletedata:email", destroydata);
  routes.put("/", updateusers);
  app.use("/testinguserform", routes);
};

export default testingroutes;
