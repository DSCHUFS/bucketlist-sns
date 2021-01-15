import React ,{ Component } from 'react';
import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import '../../css/FeedCard.css'



//component
import ButtonFeedDelete from '../buttonfeeddelete/ButtonFeedDelete'
import ButtonFeedLike from '../buttonfeedlike/ButtonFeedLike'

class FeedCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            like : this.props.like,
        }
    }
    
    onLike = (event) =>{
        this.setState(
            {
                like : this.state.like + 1
            }
        )
    }
    

    render(){
        return(
            <Card >
                <h1>{this.props.title}</h1>
                <p> like : {this.state.like} D-day : {this.props.d_day} </p>
                <div className = "contentbox">
                    {this.props.content}<br></br>
                    Feed's id is {this.props.id}
                </div>
                <ButtonFeedLike onLike = {this.onLike}/>
                <ButtonFeedDelete 
                    onDelete = {this.props.onDelete}
                    id = {this.props.id}/>
            </Card>
        )

    }
}

export default FeedCard