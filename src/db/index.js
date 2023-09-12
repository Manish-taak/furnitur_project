import { Sequelize,DataTypes } from "sequelize";
import user from "../models/user.model.js"
import testingform from "../models/testingloginform.model.js"
import products from "../models/products.model.js";
import cartmodel from "../models/cart.model.js";

const sequelize = new Sequelize('user', 'root', '6377115988', {
    host: 'localhost',
    dialect: "mysql"/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  (async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  })()
  let db = {}

  db.user = user(sequelize,DataTypes)
  // db.user.sync({force:true})
  db.testingform = testingform(sequelize,DataTypes)
  // db.testingform.sync({force:true})
  db.products = products(sequelize,DataTypes)
  // db.products.sync({force:true})
  db.cartmodel = cartmodel(sequelize,DataTypes)
  // db.cartmodel.sync({force:true})
  
  export default db