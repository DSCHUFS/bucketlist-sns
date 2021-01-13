import React from 'react';
import { Button } from 'ui-neumorphism'
import './ButtonPush.css';

const ButtonPush = ({onSubmitFeed}) =>{
    return (
        <div>
            <Button onClick = {onSubmitFeed} >
              Push
            </Button>
        </div>
    );
}

export default ButtonPush;