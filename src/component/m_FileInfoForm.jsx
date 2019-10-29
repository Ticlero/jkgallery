import React from 'react';

const fileInfoFrom = ({uploadUser, originalname, destination, filename}) => {
    const virtualPath = destination.split('/');
    const key = filename.split('.')[0];
    console.log(key);
    return (
        <div className="single-image-frame">
            <div className="single-image">
                <img src={`${window.location.origin}/${virtualPath[1]}/${filename}`} alt={originalname} key={key} width="200" height="133" data-uploader={uploadUser} data-originalname={originalname}></img>
                <p>test</p>
            </div>
        </div>
    );
};


export default fileInfoFrom;