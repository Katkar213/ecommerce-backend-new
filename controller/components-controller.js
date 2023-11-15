
const {global}=require("../components/DummyData")

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userRegister } = require("../model/models");

// register...........

const Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const Userexist = await Register.findOne({ email });
    // if (Userexist) {
    //   return res.status(400).json({ message: "User already exist" });
    // }
    const hashedPassword = await bcrypt.hash(password, 10);
    // const newUser = new Register({ email, password: hashedPassword });
    // await newUser.save();
    const token = jwt.sign({ userId: newUser._id }, "secret1", {
      expiresIn: "1d",
    });
    return res
      .status(201)
      .json({ message: "User registered successfully", token, email });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


// login......

const Login = async (req, res) => {

  try {
    const { email, password } = req.body;
    const user = await Register.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password is inValid" });
    }
    const token = jwt.sign({ userId: user._id }, "secret", { expiresIn: "2d" });
    return res
      .status(200)
      .json({ message: "User  successfully logged In", email, token });



  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error try to solve it" });
  }
};



const globalData=(req,res)=>{
    res.send(global);
    }

  
    





module.exports={ globalData,Login,Register};