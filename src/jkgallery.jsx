import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HandleMenuBar from './component/m_HandleMenuBar';
import HandleMenu from './component/m_HandleMenu';
import MyHome from './component/m_MyHome';
import LoginRegister from './component/l_loginRegister.jsx';
import HandleLoginComponent from './component/m_HandleLoginComponent';
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
                    <HandleLoginComponent/>
                    <Switch>
                        <Route exact={true} path="/"  component={MyHome}></Route>
                        <Route exact={true} path="/menu-bar/:name"  component={HandleMenu}></Route>
                        <Route exact={true} path="/login/Register"  component={LoginRegister}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </ApolloProvider>
        );
    }
}

export default JKGallery;