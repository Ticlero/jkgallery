import React, { Component, Fragment } from 'react';

class HandleCaleandar extends Component {
    componentDidMount()
    {
        const calEle = document.querySelector(".caleandar");
        const events = [];
        const setting = {
        };
        console.dir("calEle",calEle);
        if(calEle !== undefined){
            caleandar(calEle, events, setting);
        }
    }
    render() {
        return (
            <Fragment>
            <div className="caleandar"></div>
            </Fragment>
        );
    }
}

export default HandleCaleandar;