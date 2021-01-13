import React from 'react';
import './Scroll.css';


const Scroll = (props) => {

    return(
        <div className = "scroll_box"
        style = {{
            overflowY: 'scroll',
            width : '550px', 
            height : '800px',
        }}>
            {props.children}
        </div>
    );
};

export default Scroll;