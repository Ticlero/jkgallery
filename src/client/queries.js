import { gql } from "apollo-boost";

export const USER_INFO_Q = gql`
     query{
        allUser{
            _id
            name
            age
            gender
        }
    }
`;