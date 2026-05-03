import express from 'express';
import cors from 'cors';

const app=express();

app.use(cors({
    origin:[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:3000",
        //add production url here
    ],
    credentials:true,
}))
app.use(express.json())

app.get("/api/message",(req,res)=>{
    res.json({message:"Hello World"})
})

const PORT=4000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

