const exp=require('express')
const productapp=exp.Router()
let expressasynchandler=require('express-async-handler')
productapp.use(exp.json())



productapp.get("/getproducts",expressasynchandler(async(request,respond)=>{
    let pcollections=request.app.get("pcollections");
    let products=await pcollections.find().toArray()
    respond.send({message:"products are",payload:products})
}));
productapp.get("/getproduct/:id",expressasynchandler(async(request,respond)=>{
    let pcollections=request.app.get("pcollections");
    productid=(+request.params.id);
    let userobj=await pcollections.findOne({id:productid})
    console.log(userobj)
    if(userobj==undefined)
    {
        respond.send({message:"product not found"})
    }
    else{
        respond.send({message:"product found",payload:userobj})
    }
}));
productapp.post("/createproduct",(request,respond)=>{
    let pcollections=request.app.get("pcollections");
    let pobject=request.body;
    console.log(pobject)
    pcollections.insertOne(pobject,(err,result)=>{
        if(err){
            console.log("error occured",err);
        }
        else{
            respond.send({message:"inserted"})
    }
});
});
productapp.delete("/removeproduct/:id",expressasynchandler(async (request,respond)=>{
    let pcollections=request.app.get("pcollections");
    let products=await pcollections.find().toArray()
    productid=(+request.params.id);
    console.log(productid)
    let userobj=products.find(userobj=>userobj.id==productid)
    if(userobj==undefined)
    {
        respond.send({message:"product not found"})
    }
    else{
        let x=products.indexOf(userobj)
        console.log(x)
        pcollections.deleteOne({id:productid})
        respond.send({message:"product removed"})
    }
}));
productapp.put("/updateproduct/:id",expressasynchandler(async(request,respond)=>{
    let pcollections=request.app.get("pcollections"); 
    let products = await pcollections.find().toArray()
    productid=(+request.params.id);
    let userobj=products.find(userobj=>userobj.id==productid)
    let updateuser=request.body
    console.log(updateuser)
    if(userobj==undefined)
    {
        respond.send({message:"product not found"})
    }
    else{
        pcollections.updateOne({id:productid},{$set:updateuser})
        respond.send({message:"updates product"})
    }
}));
module.exports=productapp;