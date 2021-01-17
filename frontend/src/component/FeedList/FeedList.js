import React ,{ Component } from 'react';
//import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import FeedCard from '../feedcard/FeedCard'
import Scroll from '../../container/scroll/Scroll'


class FeedList extends Component{
    constructor(){
        super()
        this.state = {
            feeds : this.props
        }
    }



    render(){
        var data = this.props.feeds
        var i = 0;
        var feedlist = [];
        while ( i < data.length){
            feedlist.push(            
            <FeedCard 
                key = {i}
                id = {this.props.feeds[i].id}
                title = {this.props.feeds[i].title}
                content = {this.props.feeds[i].content}
                like = {this.props.feeds[i].like}
                d_day = {this.props.feeds[i].d_day}
                onDelete = {this.props.onDelete}       
            ></FeedCard>)
            i = i + 1
        }
        return(
            <Scroll>
                {feedlist}
            </Scroll>
        )
    }
}

export default FeedList