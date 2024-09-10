const { error } = require('console')
const exp=require('express')
const { request } = require('https')
const app=exp()
const path=require('path')
let expressasynchandler=require('express-async-handler')
let mdbc=require('mongodb').MongoClient
app.use(exp.static(path.join(__dirname,'./build')))
require('dotenv').config()
const DBurl=process.env.DATABASE_COONECTION_URL;
mdbc.connect(DBurl)
.then((client)=>{
let Dbobj=client.db("testt")
let pcollections=Dbobj.collection("pcollections")
app.set("pcollections",pcollections)
let usercollections=Dbobj.collection("usercollections")
app.set("usercollections",usercollections)
const userapp=require('./API/userapi')
const productapp = require('./API/productapi')
app.use('/user',userapp)
app.use('/product',productapp)
app.use('*',(request,respond)=>{
    respond.sendFile(path.join(__dirname,'./build/index.html'))
})

console.log("DB connected")
})
.catch(err=>console.log(err))

app.use((error,request,response,next)=>{
    response.send({message:"error:",reason:`${error.message}`})

})

port=process.env.PORT
app.listen(port,()=>console.log(`webserver listening from port ${port}.......`))