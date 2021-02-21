import React ,{ Component } from 'react';
//import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import FeedCard from '../feedcard/FeedCard'
import Scroll from '../../container/scroll/Scroll'


class FeedList extends Component{
    constructor(){
        super()
        this.state = {
            feeds : this.props,
        }
    }

    //로그인 토큰 넣기.



    render(){
        var data = this.props.feeds
        var i = 0;
        var feedlist = [];
        //console.log(this.props.mod);
        while ( i < data.length){
            feedlist.push(            

                <FeedCard 
                    key = {i}
                    id = {this.props.feeds[i].id}
                    title = {this.props.feeds[i].title}
                    content = {this.props.feeds[i].content}
                    like = {this.props.feeds[i].like}
                    like_token = {this.props.feeds[i].like_token}
                    d_day = {this.props.feeds[i].d_day}
                    del_token = {this.props.feeds[i].del_token}
                    onDelete = {this.props.onDelete}
                    onSetContent = {this.props.onSetContent}
                    onSaveContent = {this.props.onSaveContent}
                    //mod = {this.props.mod}
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