const {globalData,Login,Register,search}=require("../controller/components-controller")
const {adddata,finddata}=require("../controller/servercontroller")

const auth=require("../auth")
const routes=require("express").Router()



routes.get("/global",globalData)
routes.post("/login",Login)
routes.post("/register",Register)
routes.get("/search", search);
routes.get("/",auth,(req,res)=>{
    res.send("welcome")
})

routes.post("/adddata",adddata)
routes.get("/finddata",finddata)


module.exports=routes;