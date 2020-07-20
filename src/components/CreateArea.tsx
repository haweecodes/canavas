import React from 'react';
import './CreateArea.css';

type Props = {
    element: string;
}
const CreateArea: React.FC<Props> = ({element}) => {
    
    // check if element is empty or not
    // if(!!element) {
    //         let newElement = document.createElement(element);

    //         switch(element){
    //             case 'button':
    //                 newElement.innerHTML = 'Click Me';
    //                 break;
    //             case 'input':
    //                 // type casting from html element to input element
    //                 (newElement as HTMLInputElement).value = 'Type something';
    //                 break;
    //             default:
    //                 newElement.innerHTML = 'New Text';
    //             }
                
    //         // get the box element from the section area
    //         let boxElement = document.getElementById('boxElement');
    //         boxElement?.appendChild(newElement);
    // }
    return(
        <section>
            {/* edit area */}
            <div className="main_wrapper" id="boxElement"></div>
        </section>
    )
}


export default CreateArea;