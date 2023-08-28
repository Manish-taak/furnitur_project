import db from "../db/index.js";

const findonedata = async (req, res) => {
  try {
    let data = req.body;
    let result = await db.testingform.findOne({ where: { email: data.email } });
    if (result != null) {
      res.status(200).send("email is alrady exist");
    } else {
      let result = await db.testingform.create(data);
      res
        .status(200)
        .send({ message: "submit successfull", data: result, status: 200 });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findAlldata = async (req, res) => {
  try {
    let result = await db.testingform.findAll();
    res.status(200).send({ message: "okkk", data: result });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const destroydata = async (req, res) => {
  try {
    let data = req.params.email;
    let result = await db.testingform.destroy({ where: { email: data } });
    res
      .status(200)
      .send({ message: "data deleted", data: result, status: 200 });
  } catch (error) {
    res.status(500).send({ message: "something went wrong" });
  }
};

let updateusers = async (req, res) => {
  try {
    let response = await db.testingform.update(req.body, {
      where: {
        id: req.body.id,
      },
    });

    res.status(200).send(response);
  } catch (error) {
    res.status(200).send(error);
  }
};

export { findonedata, findAlldata, destroydata, updateusers };
