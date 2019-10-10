import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HandleMenuBar extends Component {
    
    render() {
        return (
            <ul>
              <li><Link to="/menu-bar/MyHome"><button>Home</button></Link></li>
              <li><Link to="/menu-bar/MyImage"><button>Gallery</button></Link></li>
              <li><Link to="/menu-bar/AboutUs"><button>About us</button></Link></li>
              <li><Link to="/menu-bar/ReadMe"><button>ReadMe</button></Link></li>
              <li><Link to="/menu-bar/UserInfo"><button>UserInfo</button></Link></li>
            </ul>
        );
    }
}

export default HandleMenuBar;