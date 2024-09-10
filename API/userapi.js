const exp=require('express');
const expressAsyncHandler = require('express-async-handler');
const userapp=exp.Router()
const bcryptjs=require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config();
let expressasynchandler=require('express-async-handler')
userapp.use(exp.json())



userapp.get("/getusers",expressasynchandler(async(request,respond)=>{
    let usercollections=request.app.get("usercollections");
    let users=await usercollections.find().toArray()
    respond.send({message:"users are",payload:users})
}));
userapp.get("/login",expressasynchandler(async(request,respond)=>{
    let usercollections=request.app.get("usercollections");
    let usercredobject=request.body;
    let userofDB=await usercollections.findOne({username:usercredobject.username})
    if(userofDB==null)
    {
        respond.send({message:"the username is invalid"})
    }
    else
    {
        let status= await bcryptjs.compare(usercredobject.password,userofDB.password)
        if(status==false)
        {
            respond.send({message:"invalid password"});
        }
        else
        {
            let token=jwt.sign({username:userofDB.username},process.env.SECRET_KEY,{expiresIn:180})
            respond.send({message:"login success",payload:token,userobj:userofDB})
            
        }
    }
}));
userapp.post("/createuser",expressAsyncHandler(async(request,respond)=>{
    let usercollections=request.app.get("usercollections");
    let newuserobject=request.body;
    let userofDB=await usercollections.findOne({username:newuserobject.username})
    if(userofDB!==null)
    {
        respond.send({message:"the username already exists"})
    }
    else
    {
        const salt = await bcryptjs.genSalt(10); // adjust the cost factor as needed
        let hashpassword = await bcryptjs.hash(newuserobject.password, salt);
        newuserobject.password=hashpassword;
        await usercollections.insertOne(newuserobject);
        respond.send({message:"new user created"})

    }

}));
userapp.delete("/removeuser/:username",expressasynchandler(async (request,respond)=>{
    let usercollections=request.app.get("usercollections");
    let users=await usercollections.find().toArray()
    usern=(request.params.username);
    console.log(usern)
    let userobj=users.find(userobj=>userobj.username==usern)
    if(userobj==undefined)
    {
        respond.send({message:"user not found"})
    }
    else{
        let x=users.indexOf(userobj)
        console.log(x)
        usercollections.deleteOne({username:usern})
        respond.send({message:"user removed"})
    }
}));
userapp.put("/updateuser/:id",expressasynchandler(async(request,respond)=>{
    let usercollections=request.app.get("usercollections"); 
    let users = await usercollections.find().toArray()
    userId=(+request.params.id);
    let userobj=users.find(userobj=>userobj.id==userId)
    let updateuser=request.body
    console.log(updateuser)
    if(userobj==undefined)
    {
        respond.send({message:"user not found"})
    }
    else{
        usercollections.updateOne({id:userId},{$set:updateuser})
        respond.send({message:"updates user"})
    }
}));
module.exports=userapp;