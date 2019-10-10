import { resolvers } from "./resolvers";
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs =`
    type Query{
        hello: String!,
        allUser: [User],
        getByIdUser: User
    }

    type User{
        _id: ID!,
        name: String!,
        age: Int!,
        gender: String!,
    }

    input userInput{
        name: String!,
        age: Int!,
        gender: String!
    }
    type Mutation{
        addUser(input: userInput): User
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
})