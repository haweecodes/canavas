import React, { Component } from 'react';
import './ToolBar.css';

export default class ToolBar extends Component {
    render(){
        return(
            <aside>
                {/* title */}
                <h1>ToolBox</h1>
                {/* general tools */}
                <div className="tools_wrapper">
                    <Tools />
                    <Tools />
                </div>
                {/* other tools */}
            </aside>
        )
    };
}

function Tools() {
    return(
        <div className="tool">
            <span>Textbox</span>
        </div>
    )
}