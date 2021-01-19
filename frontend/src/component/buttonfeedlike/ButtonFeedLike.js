import React from 'react';

//css
import {Button} from 'ui-neumorphism';
import '../../css/ButtonFeedLike.css'

class ButtonFeedLike extends React.Component{
    render(){
        return(
            <Button className="likeButton" onClick = {this.props.onLike}>
            좋아요
            </Button>
        )
    }
}

export default ButtonFeedLike