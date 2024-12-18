import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoute from "./Routes/auth.js"
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js"
import reviewRoute from "./Routes/review.js"
import bookingRoute from "./Routes/booking.js"
dotenv.config()

const app = express();
const port = process.env.PORT || 8000;

const corsOption = {
    origin:true
}

app.get("/", (req,res)=> {
    res.send('Api is working')
})

//database connected
mongoose.set('strictQuery', false)
const connectDB = async  () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            //useNewUrlParser:true,
            //useUnifiedTopology:true
        })

        console.log("Connected to the MONGO database")
    } catch (error) {
        console.log("Error in connecting to the database")
    }
}


//middleware
app.use(express.json())
app.use(cookieParser());
app.use(cors(corsOption));
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/doctor", doctorRoute)
app.use("/api/v1/reviews", reviewRoute)
app.use("/api/v1/booking", bookingRoute); // ///domain/api/vi/auth/register

app.listen(port, ()=>{
    connectDB();
    console.log(`Server is running on port ${port}.`)
})