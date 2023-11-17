
const {global}=require("../components/DummyData")
const {Product}=require("../model/models")

const adddata=async (req,res)=>{
 try{
        const data=await Product.create(global)
    res.send(data)
 }
 catch(err){
    console.log("data not getting",err)
 }
  

}

const finddata=async (req,res)=>{
   const datafinding= await Product.find({})
   res.send(datafinding)
}




module.exports={adddata,finddata}
