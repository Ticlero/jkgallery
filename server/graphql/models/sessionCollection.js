import mongoose, { Schema } from 'mongoose';

const schema = mongoose.Schema;
const sessionSchema = new schema({
    logined:{
        type: Boolean,
    },
    loginedID:{
        type:String,
    }
});

export default mongoose.model('session', sessionSchema);