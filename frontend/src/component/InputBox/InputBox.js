import { React, Component } from 'react';
import './Inputbox.css';
import ButtonPush from '../buttonpush/ButtonPush'
import { TextArea, TextField, Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import {feeds} from '../../store/Feed';
import Feed from '../feed/Feed';

const InputBox = ({onInputChange_title, onInputChange_content, onInputChange_d_day, onSubmitFeed} ) => {
    return(
        <Card className = "inputbox">
        <h1>What's your Bucket</h1>
        <div>
        <input 
            className = 'title'
            type="text" 
            placeholder ="title for bucket" 
            onChange = {onInputChange_title}
        />
        <input
            className = 'dday'
            type="text" 
            placeholder ="D-day for bucket" 
            onChange = {onInputChange_d_day}
            />
        </div>
        <input 
            className = 'content'
            type="text" 
            placeholder ="contents for bucket" 
            onChange = {onInputChange_content}
        />
        <div className = "buttonpush">
            <ButtonPush onSubmitFeed = {onSubmitFeed}></ButtonPush>
        </div>
    </Card>
    )

}

export default InputBox

/*
const InputBox = ({content, /*onInputChange_title ,onInputChange_content, onSubmit}) => {
    return (
        <div class = "tc box">
            <div className = "tc inputBox">
            <h1>Push Bucket</h1>
                    <input 
                        className = 'title'
                        type="text" 
                        placeholder ="your bucket" 
                        onChange = {onInputChange_title}
                    />
                    <input 
                        className = 'content'
                        type="text" 
                        placeholder ="your bucket" 
                        onChange = {onInputChange_content}
                    />
                <br></br>
                <ButtonPush onSubmits = {onSubmit} ></ButtonPush>
        </div>

        </div>

 
    )
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
   
   
       onInputChange_title = (event) => {
           this.setState({ title: event.target.value })
       }
   
       onInputChange_content = (event) => {
           this.setState({ bucket_content: event.target.value })
       }
   
       onSubmit = (event) => {
           this.setState({ bucket_content: event.target.value })
           this.state.feeds.push(
               {
                   id : feeds.length + 1,
                   title : this.state.title,
                   content : this.state.bucket_content
               }
           )
           console.log('click');
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
                       //</div>feeds = {this.state.feeds}
                      // onDelete = {this.onDelete}
                        />
               </Scroll>
                </div>
           )
       }
   }
   */