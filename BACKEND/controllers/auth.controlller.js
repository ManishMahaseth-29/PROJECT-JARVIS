import genToken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const sihnup=async (req,res)=>{
try {
    const {name,email,password}=req,body

    const existEmail=await User.findone({email})
    if(existEmail){
        return res.status(400).json({message:"Email already exists"})
    }

    if(password.length<6){
        return res.status(400).json({message:"Password must be at least 6 characters"})
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const user=await User.create({
        name,password:hashedPassword,email
    }) 
    
    const token=await genToken(user._id)

    res.cookie("token",token,{
        httpOnly:true,
        maxAge:10*24*60*60*1000 // 10 days
        sameSite:"strict",
        secure:false // set to true if using https
    })


} catch (error) {

}
}