import db from "../db/index.js";

const datacreate = async (req, res) => {
  try {
    let data = req.body;
    let result = await db.products.create(data);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findAlldata = async (req, res) => {
  try {
    let result = await db.products.findAll({});
    res.status(200).send({ result });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export { datacreate, findAlldata };
