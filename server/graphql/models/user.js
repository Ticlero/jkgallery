import mongoose from 'mongoose';

const schema = mongoose.Schema;
const userSchema = new schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
    },
    gender:{
        type: String,
    }
});

export default mongoose.model('user',userSchema);