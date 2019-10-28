import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import { LOAD_IMG_FILE_LIST } from '../client/queries';
import FileInfoFrom from './m_FileInfoForm';

const HandleUserImageFile = () => {
    const { loading, error, data} = useQuery(LOAD_IMG_FILE_LIST);
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!!</p>
    return (
        <div>{mappingFileInfo(data)}</div>
    );
};

const mappingFileInfo = (data) =>{
    console.log(data);
    const files = data.getAllFiles.map((file) =>{
        return <FileInfoFrom uploadUser={file.uploadUser} originalname={file.originalname} destination={file.destination} filename={file.filename} key={file._id}/>
    })
    return files;
}

export default HandleUserImageFile;