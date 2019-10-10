import User from './models/user';

export const resolvers = {
    Query:{
        hello: () => "Hello JKGallery's GraphQL World",
        allUser: async () => await User.find(),
    },
    Mutation:{
        addUser: async (root, {input}) => User.create(input)
    }
    
}