import React from 'react';

const fileInfoFrom = ({uploadUser, originalname, destination, filename}) => {
    return (
        <div>
            <p>{uploadUser}</p>
            <p>{originalname}</p>
            <p>{destination}</p>
            <p>{filename}</p>
        </div>
    );
};


export default fileInfoFrom;