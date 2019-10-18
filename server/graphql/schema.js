import { resolvers } from "./resolvers";
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs =`
    type Query{
        hello: String!,
        allUser: [User],
        getByIdUser(_userID: String!): User,
    }

    type User{
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
        uploadUser: String!
        createDate: String!
        comment: String!
        fieldname: String!
        originalname: String!
        encoding: String!
        mimetype: String!
        destination: String!
        filename: String!
        path: String!
        size: Int!
    }

    type Mutation{
        addUser(input: userInput): User
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})