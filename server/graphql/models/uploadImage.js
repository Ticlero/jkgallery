import mongoose from 'mongoose';

const schema = mongoose.Schema;
const userImageSchema = new schema({
    contentsTitle:{
        type:String,
        default:"제목 없음",
    },
    contentsStory:{
        type:String,
        default:"내용 없음",
    },
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