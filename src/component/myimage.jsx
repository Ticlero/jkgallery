import React, {Component} from 'react';
import './myimage.css'
import Unsplash from 'unsplash-js';

import 'regenerator-runtime/runtime';

const ACCESS_KEY = "c057687267e8721a84dd4661b3d7eca0f94459dd09d1e53bfc1d3da69d9444d9";
const SECRET_KEY = "fc3f322a9812d3a59b389a30954ceea83fe9e9f28d09a249e10a9fd297cc54eb";

const  unsplash = new Unsplash({
    applicationId: ACCESS_KEY,
    secret: SECRET_KEY,
})

const Makeimage = ({alt, src}) => {
    //console.log({alt}, {src});
    return (
        <div className="single-image-frame">
            <div className="single-image">
                <img src={src} alt={alt} width="200" height="133"></img>
                <p>test</p>
            </div>
        </div>
    );
};

class MyImage extends Component{
    constructor(p)
    {
        super(p);
        this.state = {};
    }

    componentDidMount(){
        this._getImageInfo();
    }

    _getImageInfo = async () =>{
        const loadImage = await this._CallImageApi();
        this.setState({
            images: loadImage.results,
        })
    }

    _CallImageApi = () =>{
        const imageSrc = unsplash.search.photos("landscape",1, 20)
        .then(toJson => toJson.json())
        .then(json =>{
            return json;
        })
        return imageSrc;
    }

    _renderImages = () =>{
        const images = this.state.images.map((image) =>{
            return <Makeimage alt={image.alt_description} src={image.urls.thumb} key={image.id}/>
        })
        return images;
    }

    render()
    {   
         return( <div className={this.state.images ? "_myimage" : "_myimage_loading"}>
                 {this.state.images ? this._renderImages() : "_myimage_loading"}
             </div>);
    }
}

export default MyImage;