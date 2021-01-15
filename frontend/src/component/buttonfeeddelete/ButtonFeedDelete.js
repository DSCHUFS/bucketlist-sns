import React from 'react';

//css
import {Button} from 'ui-neumorphism';


class ButtonFeedDelete extends React.Component{
    render(){
        return(
            <Button 
                onClick = {function(e){
                    this.props.onDelete(this.props.id)
                }.bind(this)}
            >삭제하기
            </Button>
        )
    }
}

export default ButtonFeedDelete