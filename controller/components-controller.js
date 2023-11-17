
const {global}=require("../components/DummyData")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Registerdata2 } = require("../model/models");

// register...........

const Register = async (req,res)=>{
  const details = req.body 
  const salt = 10
  const regData = await Registerdata2.findOne({email:details.email})

  if(regData){
      return res.send({message:"User is already registered"})
  }
  const hashPassword = bcrypt.hashSync(details.password,salt) 
  const Obj={
      username:details.username,
      email:details.email,
      password:hashPassword
  }
  await Registerdata2.create(Obj) //creating db for registered user

  // const token = jwt.sign({userEmail:details.email},secretKey)

  return res.send({message:"User is successfully Registered"})
}



// login......
// login......

const Login = async (req, res) => {
  try {
    const { data } = req.body;
    const user = await Registerdata2.findOne({ email: data.email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(data.password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: "Password is invalid" });
      }
  
      const token = jwt.sign({ userId: user._id }, "ketan", { expiresIn: "2d" });
  
      return res
        .status(200)
        .json({ message: "User successfully logged In", email: user.email, token });
     
    }
    else{
        res.send({message:"Unauthorized user"})
    }
   } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error, try to solve it" });
    }
   

  
}




const globalData=(req,res)=>{
    res.send(global);
    }

  
    





module.exports={ globalData,Login,Register};