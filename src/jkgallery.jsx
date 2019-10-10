import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HandleMenuBar from './component/m_HandleMenuBar';
import HandleMenu from './component/m_HandleMenu';
import MyHome from './component/m_MyHome';
import './jkgallery.css';

import {ApolloProvider} from '@apollo/react-hooks';
import JKApolloClient from './client/jkApolloClient';

class JKGallery extends Component{
    
    constructor(props)
    {
        super(props);
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
                    <div className="login-form">
                        <div className="id-box">
                            <label for="id-text-box">아이디</label>
                            <input id="id-text-box" className="id-pwd-box" type="text" placeholder="아이디 입력"></input>
                        </div>
                        <div className="pwd-box">
                            <label for="pwd-text-box">비밀번호</label>
                            <input id="pwd-text-box" className="id-pwd-box" type="password" placeholder="비밀번호 입력"></input>
                        </div>
                        <div className="login-btn-box">
                            <button>로그인</button>
                        </div>
                    </div>
                    <Switch>
                        <Route exact={true} path="/"  component={MyHome}></Route>
                        <Route exact={true} path="/menu-bar/:name"  component={HandleMenu}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </ApolloProvider>
        );
    }
}

export default JKGallery;