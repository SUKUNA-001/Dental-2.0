import User from "../models/UserSchema.js"
import Doctor from "../models/DoctorSchema.js"
import jwt from"jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = user => {
    return jwt.sign(
    {
    id:user._id, 
    role:user.role
} ,
    process.env.JWT_SECRET_kEY ,
    {
        expiresIn : '15d'
    })
}

export const register = async(req, res)=>{

    const{email,password,name,role,photo,gender} = req.body;

    try {
        
        let user = null

        if(role==="patient"){
           user = await User.findOne({email})
        }
        else if(role==="doctor"){
            user = await Doctor.findOne({email})
        }

        //check if user exist

        if(user){
            return res
            .status(400)
            .json({message: "User already exist"})
        }

        /// hash password

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password ,salt)

        if(role==="patient"){
            user = new User({
                email,
                password:hashPassword,
                name,
                role,
                photo,
                gender
            })
        }

        if(role==="doctor"){
            user = new Doctor({
                email,
                password:hashPassword,
                name,
                role,
                photo,
                gender
            })
        }

         user.save();

        res.status(200).json({sucess:true ,message: "User created successfully"})

    } catch (error) {
        res.status(500).json({sucess:false ,message: "User not Created, Try Again!"})
    }
}

export const login = async (req, res)=>{

    const {email} = req.body

    try {
        let user = null;

        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})

        if(patient){
            user = patient
        }
        if(doctor){
            user = doctor
        }

        //check if user exist
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        //verify password
        const isPasswordMatch =  bcrypt.compare(req.body.password, user.password);

        if(!isPasswordMatch){
            return res.status(404).json({ status: false ,message: "Invalid credentials"})
        }


        //get token
        const token  = generateToken(user);

        const {password, role,appointments, ...rest}= user._doc

        res
        .status(200)
        .json({sucess:true ,message: "User logged in successfully", token ,data:{...rest},role});

    } catch (error) {
        res.status(500)
            .json({sucess:false,message: "Failed to Login, Try Again!" })
        
    }
}