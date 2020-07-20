import React from 'react';
import './ToolBar.css';

export default function ToolBar(props: any) {
    // left toolbar view with all the tools
    return (
        <aside>
            {/* title */}
            <h1>ToolBox</h1>
            {/* general tools */}
            <div className="tools_wrapper">
                <Tools name='rectangle' callBack={props.emitCreateElement} />
                <Tools name='circle' callBack={props.emitCreateElement} />
                <Tools name='square' callBack={props.emitCreateElement} />
            </div>
            {/* other tools */}
        </aside>
    )
}

type Props = {
    name: string;
    callBack: any;
}
const Tools: React.FC<Props> = ({
    name,
    callBack
}) => (
        <button className="tool" onClick={() => callBack(name)}>
            <span>{name}</span>
        </button>
    )