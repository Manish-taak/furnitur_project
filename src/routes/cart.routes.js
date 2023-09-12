import  express  from "express";
import {cartcreate, getCart,updatecartquantity} from "../controllers/cart.controller.js";
import verifyToken from "../middleware/auth.js";
const cartmodel = (app) => {
    let routes = express.Router();
    routes.post("/cartpost",verifyToken, cartcreate);
    routes.get("/getCart",verifyToken, getCart);
    routes.put("/update/:id", updatecartquantity);
    app.use("/cart", routes);
};



export default cartmodel;
