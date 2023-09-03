import db from "../db/index.js";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
const datacreate = async (req, res) => {
  try {
    let data = req.body;
    let encrypt = await bcrypt.hash(data.password,12)
    data.password= encrypt
    let result = await db.user.findOne({ where: { email: data.email } });
    if (result != null) {
      res.status(500).send({ message: "email is already exist" });
    } else {
      let result = await db.user.create(data);
      res.status(200).send({ data: result, status: 200 });
    }
  } catch (error) {
    res.status(500).send(error.message); 
  }
};

const getdata = async (req, res) => {
  try {
    console.log("==hii");
    let data = req.body;
    let result = await db.user.findOne({ where: { email: data.username } });

    let match = bcrypt.compareSync(data.password,result.password)

    if (match) {
      const token = Jwt.sign({ email: data.username },"testing",{expiresIn:'1h'});
      console.log(token)
      res.status(200).send({ message: "log in successfull" ,token : token });
    } else {
      res.status(500).send({ message: "check your email and password" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updatedata = async (req, res) => {
  try {
    let data = req.body.email;
    console.log("======cfghjkll");
    let result = await db.user.findOne({ where: { email: data } });
    if (result !== null) {
      let result = await db.user.update(
        { password: req.body.confirmpassword },
        { where: { email: data } }
      );
      res
        .status(200)
        .send({ message: "your password has changed successfully" });
    } else {
      res.status(500).send({ message: "something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export { datacreate, getdata, updatedata };
