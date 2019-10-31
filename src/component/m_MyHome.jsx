import React from 'react';
import './m_MyHome.css';
import AboutUs from './m_AboutUs.jsx';
import ReadMe from './m_ReadMe.jsx';
import MyImage from './myimage.jsx'
import LoadImg from './m_HandleUserImageFile';

function MyHome(props){
    console.log(props)
    return (
        <div className="my-home">
            <div className="h-about-us">
                <AboutUs/>
            </div>
            <div className="h-read-me">
                <ReadMe/>
            </div>
            <div className="h-my-image">
                <LoadImg/>
            </div>
        </div>
    )
}

export default MyHome;