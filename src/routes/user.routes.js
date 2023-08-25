import express from 'express'
import { datacreate, getdata, updatedata } from '../controllers/user.controller.js'

// import {datacreate,getdata,updatedata} from "./src/controllers/user.controller.js"


const userroutes = (app) =>{
   let routes = express.Router() 

   routes.post('/userdatacreate',datacreate)
   routes.get('/getuserdata',getdata)
   routes.put('/putuserdata',updatedata)

   app.use('/user',routes)

}
   

export default userroutes
