import mongoose from 'mongoose';
import Med from '../models/meds.js';

export const viewMeds = async(req, res)=>{
    try{
        const meds = await Med.find();
        res.status(200).json(meds);
    }catch(error){
        res.status(404).jdon({ error : error.message})

    }
}
export const createMed = async(req,res) => {
    const meds= new Med(req.body);
    try{
        await meds.save();
        res.status(200).json(meds);
    }
    catch(error){
        res.status(404).json({error: error.message});
    }
}

export const updateMed = async(req, res)=>{
const{id}=req.params;
const{name,instructions,count,howMany} = req.body
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('The id ${id} is not valid');
}
const med = {name, instructions, count, howMany, _id:id};
await Med.findByIdAndUpdate(id,med,{new:true});
res.json(med);
}

export const deleteMed = async(req, res)=>{
    const{id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send('The id ${id} is not valid');
    }
    await Med.findByIdAndRemove(id);
    res.json({message: "Deleted medicine"});
    }