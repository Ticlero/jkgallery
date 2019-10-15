import React from 'react';

const UserInfoFrom = ({_userID, name, age, gender}) => {
    return (
        <div>
            <p>{_userID}</p>
            <p>{name}</p>
            <p>{age}</p>
            <p>{gender}</p>
        </div>
    );
};

export default UserInfoFrom;