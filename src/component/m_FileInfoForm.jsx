import React from 'react';

const fileInfoFrom = ({uploadUser, originalname, destination, 
    filename, contentsTitle, contentsStory}) => 
    {
        const virtualPath = destination.split('/');
        const key = filename.split('.')[0];
        console.log(key);
        return (
            <div className="single-image-frame">
                <div className="single-image">
                    <img src={`${window.location.origin}/${virtualPath[1]}/${filename}`} alt={originalname} key={key} width="200" height="133" data-uploader={uploadUser} data-originalname={originalname}></img>
                    <p>{contentsTitle}</p>
                </div>
                <div className="image-contents">
                    {contentsStory}
                </div>
            </div>
        );
    };


export default fileInfoFrom;