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

export const LOAD_IMG_FILE_LIST = gql`
    query{
        getAllFiles{
            uploadUser
            originalname
            destination
            filename
        }
    }
`;