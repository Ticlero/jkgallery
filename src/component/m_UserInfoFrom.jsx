import React from 'react';

const UserInfoFrom = ({_id, name, age, gender}) => {
    return (
        <div>
            <p>{_id}</p>
            <p>{name}</p>
            <p>{age}</p>
            <p>{gender}</p>
        </div>
    );
};

export default UserInfoFrom;