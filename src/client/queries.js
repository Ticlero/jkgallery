import { gql } from "apollo-boost";

export const USER_INFO_Q = gql`
     query{
        allUser{
            _userID
            _userPwd
            name
            age
            gender
        }
    }
`;