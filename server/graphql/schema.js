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
        _id: ID!,
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
        _id: String!,
        contentsTitle: String!
        contentsStory: String!
        uploadUser: String!,
        originalname: String!,
        encoding: String!,
        mimetype: String!,
        destination: String!,
        filename: String!,
        size: Int!
    }

    input imageFileInput{
        contentsTitle: String!,
        contentsStory: String!,
        uploadUser: String!,
        originalname: String!,
        encoding: String!,
        mimetype: String!,
        destination: String!,
        filename: String!,
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