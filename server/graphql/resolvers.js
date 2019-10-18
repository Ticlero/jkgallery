import User from './models/user';
import UserImageFiles from './models/uploadImage';

export const resolvers = {
    Query:{
        hello: () =>{
            return "Hello My Cookie Test Server!";
        },
        allUser: async () => {
            return await User.find();
        },
        getByIdUser: async (_,{_userID}) =>{
            return await User.findOne({_userID:_userID});
        },
        getAllFiles: async () =>{
            return await UserImageFiles.find();
        }
    },

    Mutation:{
        addUser: async (_,{input}) =>{
            return await User.create(input);
        },

        addUserImageFile: async (_, { imageInfo }) => {
            return await UserImageFiles.create(imageInfo);
        }
    }
    
}