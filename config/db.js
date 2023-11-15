const mongoose=require("mongoose");
const cloudurl="mongodb+srv://ketankatkar213:033970@cluster0.o9mu0e2.mongodb.net/Ecommerce?retryWrites=true&w=majority";


const connection=async ()=>{
    try{
      await mongoose.connect(cloudurl)
    }
    catch(err){
        console.log(err)
    }
  
}

module.exports=connection