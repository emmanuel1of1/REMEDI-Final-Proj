import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import medRoutes from './routes/meds.js';

var app = express();  
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}))/
app.use(cors()); 
app.use('/meds', medRoutes)

const mongodb="mongodb+srv://remedidb:dbgamer@cluster0.79fak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app.get('/', (req,res)=>{
    res.send('Welcome');
});
 const PORT = process.env.PORT || 5000;
 app.listen(PORT, console.log("Server started on port"+ PORT));
 
 mongoose.connect(mongodb, { 
     useUnifiedTopology: true,
     useNewUrlParser: true,
    }).then(()=>
 console.log("Mongodb connected")).catch(err => console.log(err));

