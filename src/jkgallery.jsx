import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {ApolloProvider} from '@apollo/react-hooks';
import JKApolloClient from './client/jkApolloClient';

import HandleMenuBar from './component/m_HandleMenuBar';
import HandleMenu from './component/m_HandleMenu';
import MyHome from './component/m_MyHome';
import LoginRegister from './component/l_loginRegister.jsx';
import HandleLoginComponent from './component/m_HandleLoginComponent';
import WritePaper from './component/writePaper';
import './jkgallery.css';
import HandleLoginedForm from './component/handleLoginedForm';


class JKGallery extends Component{
    
    constructor(props)
    {
        super(props);
        this.state = {};
        this._getSessionInfo();
    }

    componentDidMount(){
        console.log(this.state.logined, this.state.userID);
    }

    callLoginCallAPI = () =>{
        return fetch(`http://www.jkgallery.kr:80/sessionChecked`).then( (res) => {
            return res.json();
        }).then((result)=> {
            const jObj = JSON.parse(result);
            return jObj;
        });
    }

    _getSessionInfo = async () =>{
        const jObj = await this.callLoginCallAPI();
        this.setState({
            logined:jObj.status.logined,
            userID: jObj.status.userId
        });
    }
    _handleLogoutButton = () =>{
        console.log("logout!");
        this.setState({});
        console.log(this.state);
    }
    render()
    {
        return(
        <ApolloProvider client={JKApolloClient}>
            <BrowserRouter>
                <div className="JKGallery">
                    <div className="_header-div">
                        <header>
                        <h1>J.K Gallery</h1>
                        </header>
                        <nav className="_header-nav">                        
                        <HandleMenuBar/>
                        </nav>
                    </div>
                    {
                        this.state.logined?
                        <HandleLoginedForm userid={this.state.userID} _handleLogoutButton={this._handleLogoutButton}/>                   
                        :<HandleLoginComponent/>
                    }
                    <Switch>
                        <Route exact={true} path="/"  component={MyHome}></Route>
                        <Route exact={true} path="/menu-bar/:name"  component={HandleMenu}></Route>
                        <Route exact={true} path="/login/Register"  component={LoginRegister}></Route>
                        <Route exact={true} path="/write/paper" component={WritePaper}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </ApolloProvider>
        );
    }
}

export default JKGallery;