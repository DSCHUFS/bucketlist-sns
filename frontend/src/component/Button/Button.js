import React from 'react';
import './Button.css';

const Button = ({onSubmits}) =>{
    return (
        <div>
            <button class = 'button' onClick = {onSubmits}>Push</button>
        </div>
    );
}

export default Button;