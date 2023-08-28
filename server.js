import express, { Router } from "express"
import db from "./src/db/index.js"
import dotenv from "dotenv"
import fs from "fs"
import cors from "cors";
import multer from "multer"
import userroutes from "./src/routes/user.routes.js";
import testingroutes from "./src/routes/testing.routes.js"
import products from "./src/routes/products.route.js"
// import {getone,findAlldata,deletedata} from "./src/controllers/userform.controller.js"
// import {datacreate,getdata,putdata} from "./src/controllers/user.controller.js"



const app = express()
dotenv.config()
app.use(cors('*'))
app.use('/static', express.static('uploads'))

const port =  process.env.PORT || 4000

// const upload = multer({  
//   storage:multer.diskStorage({
//     destination: async function(req,file,cb)
//     {
//       const path = process.cwd()+`/uploads/`;   
//       fs.mkdirSync(path, { recursive: true })   
//       cb(null,path)   
//       },
//     filename:function(req,file,cb)
//     {
//       cb(null,file.fieldname+"_"+Date.now()+"-"+file.originalname)
//     }
//   }) 
// }).single("my_file"); // field name
// app.post("/uplode",upload,(req,res)=>{ 
//   res.send("file upload")
// })

app.use(express.json())
userroutes(app)
testingroutes(app)
products(app)
// // register
// app.post('/datacreate',datacreate)

// // loginform
// app.post('/getdata',getdata)


// // forgetpassword
// app.put('/putuserdata',putdata)

// super
// app.post('/getone',getone)
// app.get('/getfinddata',findAlldata)
// app.delete('/deletedata/:email',deletedata)

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
 


