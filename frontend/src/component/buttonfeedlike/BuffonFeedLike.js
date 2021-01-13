import React from 'react';
import { Button } from 'ui-neumorphism'

const ButtonFeedLike = ({onClickLike}) =>{
    return (
        <div>
            <Button onClick = {onClickLike} >
              like
            </Button>
        </div>
    );
}

export default ButtonFeedLike;