import mongoose from 'mongoose';

mongoose.set('useCreateIndex', true);//DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead. 오류 제거
const schema = mongoose.Schema;
const userSchema = new schema({
    _id:{
        type:String,
    },
    _userID:{
        type: String,
        required: true,
    },
    _userPwd:{
        type: String, 
        required: true, 
        trim: true
    },
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
    },
    gender:{
        type:String,
    }
});

export default mongoose.model('user',userSchema);