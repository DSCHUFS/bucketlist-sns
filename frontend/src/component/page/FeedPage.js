import React from 'react';
import FeedList from '../feedList/FeedList';
import InputBox from '../inputBox/InputBox';
import Scroll from '../scroll/Scroll';
import { feeds } from '../../store/Feed';



class FeedPage extends React.Component {
    constructor(){
           super()
           this.state = {
               feeds : feeds,
               title : '',
               bucket_content : '',
               like: 0,
               d_day: 0,

           }
       }
   
   
    onInputChange_title = (event) => {
        console.log("title")
        this.setState({ title: event.target.value })
    }

    onInputChange_content = (event) => {
        console.log("content")
        this.setState({ bucket_content: event.target.value })
    }

    onInputChange_d_day = (event) =>{
        this.setState({ d_day : event.target.value })
    }

    onSubmitFeed = (event) => {
        if ( this.state.title.length === 0){
            alert('put title');
        }else if ( this.state.bucket_content.length === 0 ){
            alert('put contents')
        }else{
            this.state.feeds.push(
                {
                    id : feeds.length,
                    title : this.state.title,
                    content : this.state.bucket_content,
                    d_day : this.state.d_day,
                    like : 0
                }
            )
        }
        console.log(feeds)
    }

    onClickLike = (event) => {
        console.log(this.state.feeds)
    }
    
    onClickDelete = (evet) => {
        console.log("del")
    }


    render(){
        return(
            <div className = "tc">
            <InputBox 
                onInputChange_title = {this.onInputChange_title}
                onInputChange_content = {this.onInputChange_content}
                onInputChange_d_day = {this.onInputChange_d_day}
                onSubmitFeed = {this.onSubmitFeed}
            />
            <Scroll>
                <FeedList 
                     feeds = {this.state.feeds}
                     onClickLike = {this.onClickLike}
                     onClickDelete = {this.onClickDelete}
                     />
            </Scroll>
        </div>
        )
    }
   }


export default FeedPage
 


