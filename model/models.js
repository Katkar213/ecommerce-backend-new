const mongoose=require("mongoose")

const userRegister = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
});


const userSchema = mongoose.Schema({
    category: String,
    id: String,
    type: String,
    name: String,
    model: String,
    color: String,
    image: String,
    brand: String,
    size: String,
    sleeveLength: String,
    product: String,
    download_url: String,
    material: String,
    price: Number,
    RAM: String,
    ROM: String,
    expandableMemory: String,
    display: String,
    processor: String,
    graphics: String,
    resolution: String,
      smartFeatures: String,
      origin: String,
      features: String,
      weight: String,
      storage: String,
      capacity: String,
      washPrograms: String,
      camera: String,
      energyRating: String,
      battery: String,
      operatingSystem: String, 
      quantity:Number
  });

//   const ketan=userSchema(
//     {

//     }
//   )



const Product=mongoose.model("ProductData",userSchema)
module.exports={Product,userRegister}










