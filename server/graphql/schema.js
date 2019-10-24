import { resolvers } from "./resolvers";
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs =`
    type Query{
        hello: String!,
        allUser: [User],
        getByIdUser(_userID: String!): User,
        getAllFiles: [Imageinfo]
    }

    type User{
        _id: ID,
        _userID: String!,
        _userPwd: String!,
        name: String!,
        age: Int!,
        gender: String!,
    }

    input userInput{
        _userID: String!,
        _userPwd: String!,
        name: String!,
        age: Int!,
        gender: String!,
    }
    
    type Imageinfo{
        uploadUser: String!,
        originalname: String!,
        encoding: String!,
        mimetype: String!,
        destination: String!,
        filename: String!,
        path: String!,
        size: Int!
    }

    input imageFileInput{
        uploadUser: String!,
        originalname: String!,
        encoding: String!,
        mimetype: String!,
        destination: String!,
        filename: String!,
        path: String!,
        size: Int!
    }

    type Mutation{
        addUser(input: userInput): User,
        addUserImageFile(input: imageFileInput): Imageinfo
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})