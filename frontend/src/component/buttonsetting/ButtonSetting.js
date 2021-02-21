import React from 'react';

//css
import {Button} from 'ui-neumorphism';


class ButtonSetting extends React.Component{
    render(){
        if (this.props.mod === 0){
            return(
                <Button 
                    onClick = {function(e){
                        this.props.onSetting(this.props.id, this.props.mod)
                    }.bind(this)}
                >수정하기
                </Button>
            )
        }else{
            return(
                <Button 
                    onClick = {function(e){
                        this.props.onSaveContent(this.props.id)
                        this.props.onSetting(this.props.id, this.props.mod)
                    }.bind(this)}
                >수정완료
                </Button>
            )
        }

    }
}

export default ButtonSetting