import mongoose from 'mongoose';

const schema = mongoose.Schema;
const userImageSchema = new schema({
    uploadUser:{
        type:String,
        required: true,  
    },
    createDate:{
        timestamps:{
            createAt: 'create_at'
        }
    },
    comment:{
        type:String,
    },
    fieldname:{
        type:String,
        required: true,  
    },
    originalname:{
        type:String,
        required: true,  
    },
    encoding:{
        type:String,
        required: true,  
    },
    mimetype:{
        type:String,
        required: true,  
    },
    destination:{
        type:String,
        required: true,  
    },
    filename:{
        type:String,
        required: true,  
    },
    path:{
        type:String,
        required: true,  
    },
    size:{
        type: Number,
        required: true,
    },
})

export default mongoose.model("userImageFiles", userImageSchema);