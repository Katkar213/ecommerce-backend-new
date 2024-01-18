
const {global}=require("../components/DummyData")
const {Product,addcartdata}=require("../model/models")

const adddata=async (req,res)=>{
 try{
        const data=await Product.create(global)
    res.send(data)
 }
 catch(err){
    console.log("data not getting",err)
 }

}

const addcart1=async(req,res)=>{
   const data=req.body;
   console.log(data)
  const data2=await addcartdata.create(data);
  res.send(data2)
}

const finddata=async (req,res)=>{
   const datafinding= await Product.find({})
   res.send(datafinding)
}






module.exports={adddata,finddata,addcart1}
