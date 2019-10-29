import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { USER_INFO_Q } from '../client/queries';
import UserInfoFrom from './m_UserInfoFrom';

const UserInfo = () => {
    const { loading, error, data} = useQuery(USER_INFO_Q);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!!</p>
    return (
        <div>{mappingUserInfo(data)}</div>
    );
};

const mappingUserInfo = (data) =>{
    const user = data.allUser.map((userdata) =>{
        return <UserInfoFrom _userID={userdata._userID} name={userdata.name} age={userdata.age} gender={userdata.gender}/>
    })
    return user;
}

export default UserInfo;

