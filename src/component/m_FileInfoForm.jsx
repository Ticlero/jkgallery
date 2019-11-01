import React, { Component } from 'react';

const imageModal = document.querySelector("#image-modal");
const imageModalContents = imageModal.querySelector(".modal-contents");
const imageModalImgInfoFrame = imageModalContents.querySelector(".modal-contents-img-info-frame");
const imageModalContentsClose = imageModalImgInfoFrame.querySelector(".modal-contents-close");
const imageModalImgInfo = imageModalImgInfoFrame.querySelector(".modal-contents-img-info");

const imageModalTitle = imageModalContentsClose.querySelector("#modal-contents-title");
const imageModalContentsCloseBtn = imageModalContentsClose.querySelector("#modal-contents-close-btn");

const imageModalImgInfoImg = imageModalImgInfo.querySelector("#modal-contents-img-info-img");
const imageModalImgInfoStory = imageModalImgInfo.querySelector("#modal-contents-img-info-story");


class fileInfoFrom extends Component 
{

    constructor(props){
        super(props);
        console.log(`this.props:`, props);
        const {uploadUser, originalname, destination, filename, contentsTitle, contentsStory} = props;

        console.log(uploadUser, originalname, destination, filename, contentsTitle, contentsStory);
        this.state={
            uploadUser: uploadUser, 
            originalname: originalname, 
            destination: destination, 
            filename: filename, 
            contentsTitle: contentsTitle, 
            contentsStory: contentsStory
        };
        console.log("this.state",this.state);
    }

    openImageModal = (event) =>{
        const targetEle = document.getElementById(this.state.filename.split('.')[0]);
        const storyArr = this.state.contentsStory.split('\n');
        let story = "";

        imageModal.classList.remove("hidden");
        imageModalTitle.innerHTML = this.state.contentsTitle;
        imageModalImgInfoImg.setAttribute("src",targetEle.currentSrc);
        
        for(let i = 0; i<storyArr.length; i++ ){
            if(i===storyArr.length)
                stroy += `<span>${storyArr[i]}</span>`;

                story += `<span>${storyArr[i]}</span><br>`;    
        }
        imageModalImgInfoStory.innerHTML = story;
        imageModalContentsCloseBtn.addEventListener("click", this.closeImageModal);
        console.log(targetEle);
        console.dir(targetEle);
        // console.log(targetEle.currentSrc);
        // console.log(imageModalTitle.innerHTML, imageModalContentsCloseBtn.innerHTML, imageModalImgInfoImg,
        //     imageModalImgInfoStory.innerHTML);
        
    }

    closeImageModal = (event) =>{
        imageModal.classList.add("hidden");
    }

    render(){
        let i = 0;
        const virtualPath = this.state.destination.split('/');
        const contentsArr = this.state.contentsStory.split('\n');
        const key = this.state.filename.split('.');
        
        return (
            <div className="single-image-frame">
                <div className="single-image">
                    <img 
                        src={`${window.location.origin}/${virtualPath[1]}/${this.state.filename}`}
                        id={key[0]}
                        alt={this.state.originalname}
                        width="200" 
                        height="133" 
                        data-uploader={this.state.uploadUser} 
                        data-originalname={this.state.originalname}
                        className="loaded-images"
                        key={key[0]}
                        onClick={this.openImageModal}
                        >
                    </img>
                    <br/>
                    <span>title: {this.state.contentsTitle}</span>
                    <br/>
                    <span>uploader: {this.state.uploadUser}</span>
                </div>
                <div className="image-contents">
                    {
                        contentsArr.map( s =>{
                            return (<span key={key[0]+ i++}>{s}<br/></span>)
                        })
                    }
                </div>
            </div>
        );
    }
};


export default fileInfoFrom;