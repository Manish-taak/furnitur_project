import { Sequelize,DataTypes } from "sequelize";
import user from "../models/user.model.js"
import Testinguserform from "../models/testingloginform.model.js"


const sequelize = new Sequelize('user', 'root', '8829860158', {
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
  db.Testinguserform = Testinguserform(sequelize,DataTypes)
  // db.Testinguserform.sync({force:true})
  

  export default db