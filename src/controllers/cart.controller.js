// import { where } from "sequelize"
import db from "../db/index.js"

const cartcreate = async (req,res)=>{
    try {
        let data = req.body
        let result = await db.cartmodel.create(data)
        res.status(200).send({message:"ok"})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getCart = async (req,res)=>{
    try {
        let data =   req.body.email
        let result = await db.cartmodel.findAll(data)
        res.status(200).send({result, message:"all data get"})
    } catch (error) {
        res.status(500).send(error)
    }
}


let updatecartquantity = async (req, res) => {
    try {
        let data = req.params.id;
        let result = await db.cartmodel.update(req.body,{ where: { id: data } });
        res.status(200).send({ message: "update", data: result, status: 200 });
      } catch (error) {
        res.status(500).send({ message: "something went wrong" });
      }
  };

export {cartcreate,getCart,updatecartquantity} 




