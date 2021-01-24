import React from 'react';

//css
import {Button} from 'ui-neumorphism';


class ButtonFeedCreate extends React.Component{
    render(){
        return(
            <Button onClick = {this.props.onSubmitFeed}>올리기</Button>
        )
    }
}

export default ButtonFeedCreate