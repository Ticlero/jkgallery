import React, { Component } from 'react';
import MyHome from './m_MyHome.jsx';
import AboutUs from './m_AboutUs.jsx';
import ReadMe from './m_ReadMe.jsx';
import MyImage from './myimage.jsx';
import UserInfo from './m_UserInfo.jsx'
import LoadImg from './m_HandleUserImageFile';
import HandleCaleandar from './handleCaleandar';


class HandleMenu extends Component {

    _renderMenu(){
        const menuType = this.props.match.params.name;
        console.log(menuType);
        switch(menuType){
            case "MyHome" || "/":
                return <MyHome props={this.props}></MyHome>
            case "AboutUs":
                return <AboutUs props={this.props}></AboutUs>
            case "ReadMe":
                return <ReadMe props={this.props}></ReadMe>
            // case "MyImage":
            //     return <MyImage props={this.props}></MyImage>
            // case "UserInfo":
            //     return <UserInfo props={this.props}></UserInfo>
            case "LoadImg":
                return <LoadImg props={this.props}></LoadImg>
            case "Caleandar":
                return <HandleCaleandar props={this.props}></HandleCaleandar>
            default:
                return <div>요청하신 정보가 없습니다.</div>
        }
    }

    render() {
        return (
            <div className="_route">
                {this._renderMenu()}
            </div>
        );
    }
}

export default HandleMenu;