
const {global}=require("../components/DummyData")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Registerdata2 } = require("../model/models");

// register...........

const Register = async (req, res) => {
  try {
    const data = req.body;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    const duplicatefound=Registerdata2.findOne({email:data.email})
    if(duplicatefound){
      return res.send({ message: "User registered successfully" });
    }
    await Registerdata2.create(data);

    const token = jwt.sign({ userId: data.email }, "ketan", {
      expiresIn: "1d",
    });

    return res.send({ message: "User registered successfully", token });
  } catch (error) {
    console.log(error); 
    return res.send({ message: "Internal Server Error", error: error });
  }
  
};



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