const express=require("express");

const app=express();



const connection=require("./config/db")
const stripe=require("stripe")("sk_test_51OFIp6SASTZsWUYjISFzbmjyRk74mtxrqIwa5y4DfmpVSRsSLHc7rnobjakNC5sR9eiRkNQSzkKxHHIx3GJwFPaq00xK5aMQvZ")

const routes=require("./Routes/Routes")
const cors=require("cors")



app.use(cors())
app.use(express.json())
app.use("/api",routes)

app.post("/checkout",async(req,res)=>{
  const {products}=req.body;
  console.log(products)
  const lineItems =products.map((product)=>({
    price_data:{
        currency:"inr",
        product_data:{
            
            name:product.model,

        },
        unit_amount:product.price * 100
    },
    quantity:product.quantity
   }))

   const session =await stripe.checkout.sessions.create({
    payment_method_types:["card"],
     line_items:lineItems,
    mode:"payment",
    success_url:"https://euphonious-salmiakki-b13f02.netlify.app/",
    cancel_url:"https://euphonious-salmiakki-b13f02.netlify.app/cart",


})
res.json({id:session.id})

})
app.listen(4001,async ()=>{
    try{
    await connection();
    console.log("server running fine");
    }
    catch(err){
      console.log(err)
    }
})