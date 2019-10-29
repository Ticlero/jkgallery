import mongoose from 'mongoose';

const schema = mongoose.Schema;
const userImageSchema = new schema({
    uploadUser:{
        type:String,
        required: true,  
    },
    originalname:{
        type: String,
    },
    encoding:{
        type: String,
    } ,
    mimetype:{
        type: String,
    } ,
    destination:{
        type: String,
    } ,
    filename:{
        type: String,
    },
    size: {
        type: Number
    }
});

export default mongoose.model("userImageFile", userImageSchema);