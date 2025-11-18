import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"

import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"
import connectCloudinary from './config/cloudinary.js'


const app=express()
const PORT=process.env.PORT || 8080
connectDB()
connectCloudinary()


app.use(express.json())
app.use(cors())





app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
    console.log("hello")
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`your appis running on port ${PORT}`)
})


