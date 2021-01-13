import React from 'react';
import { Button } from 'ui-neumorphism'

const ButtonFeedDelete = ({onClickDelete}) =>{
    return (
        <div>
            <Button onClick = {onClickDelete} >
              del
            </Button>
        </div>
    );
}

export default ButtonFeedDelete;