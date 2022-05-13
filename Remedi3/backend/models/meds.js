import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const medSchema = new Schema ({
    name: {
    type: String,
    required: true,
    },
    count:{
    type: String,
    required: true,
    },
    instructions:{
    type: String,
    required: true,
    },
    howMany:{
    type: String,
    required: true,
    }
}, {timestamps: true});
const Med = mongoose.model('Med', medSchema);
export default Med;