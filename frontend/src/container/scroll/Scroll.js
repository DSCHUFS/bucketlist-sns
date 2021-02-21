import React from 'react';
import './Scroll.css'

const Scroll = (props) => {
    return(
        <div className = "scroll" style={{ overflow: 'scroll', height: '1200px'}}>
          {props.children}
      </div>
    );
};

export default Scroll;