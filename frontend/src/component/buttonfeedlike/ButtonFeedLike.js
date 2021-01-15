import React from 'react';

//css
import {Button} from 'ui-neumorphism';


class ButtonFeedLike extends React.Component{
    render(){
        return(
            <Button onClick = {this.props.onLike}>
            좋아요
            </Button>
        )
    }
}

export default ButtonFeedLike