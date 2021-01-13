import React from 'react';
import Feed from '../feed/Feed';
import { feeds } from '../../store/Feed';
import './FeedList.css';
import { Card } from 'ui-neumorphism'

import ButtonFeedDelete from '../buttonfeeddelete/ButtonFeedDelete';
import ButtonFeedLike from '../buttonfeedlike/BuffonFeedLike';

const FeedList = ({feeds , onClickLike, onClickDelete}) =>{
   return(
    <div >
        {feeds.map((user, i) => {
            return (
                <Card className = "scroll-box">
                    <Feed className = "feed-card"
                        key={i}  
                        title = {feeds[i].title}
                        content = {feeds[i].content}
                        d_day = {feeds[i].dday}
                        like = {feeds[i].like}
                    />
                    <div className = "buttonbox">
                        <ButtonFeedDelete onClickDelete = {onClickDelete}></ButtonFeedDelete>
                        <ButtonFeedLike onClickLike = {onClickLike} ></ButtonFeedLike>
                    </div>

                    
                </Card>
            )}
        )}
    </div>
)

}
export default FeedList

    /*
    constructor(){
        super()
        this.state = {
            feeds : feeds,
            title : '',
            bucket_content : '',
        }
    }

    onDelete = (event) => {
        delete this.state.feeds[feeds.id-1];
        console.log(feeds)
        console.log('delete');
    }

    onLike = (event) => {
        console.log('Like');
    }
    */

/*
class FeedPage extends React.Component {

    constructor(){
           super()
           this.state = {
               feeds : feeds,
               title : '',
               bucket_content : '',
           }
       }
   

       onDelete = (event) => {
           console.log('delete');
       }
   
   
    
   
   
       render(){
           return(
               <div class = "tc">
               <InputBox 
                   //onInputChange_title = {this.onInputChange_title} 
                   //onInputChange_content = {this.onInputChange_content}
                   //onSubmit = {this.onSubmit}
                   />
               <Scroll>
                   <FeedList 
                       //</div>
                       feeds = {this.state.feeds}
                      // onDelete = {this.onDelete}
                        />
               </Scroll>
           </div>
           )
       }
   }*/