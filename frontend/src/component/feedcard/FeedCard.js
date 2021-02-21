<<<<<<< Updated upstream
import React ,{ Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css';
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
=======
import React, { Component } from "react";
import { Card, TextArea } from "ui-neumorphism";
import "../../css/FeedCard.css";

//component
import ButtonFeedDelete from "../buttonfeeddelete/ButtonFeedDelete";
import ButtonFeedLike from "../buttonfeedlike/ButtonFeedLike";
import ButtonSetting from "../buttonsetting/ButtonSetting";

class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: this.props.like,
      like_token : this.props.like_token,
      mod : 0,
    };
  }

  onLike = (event) => {
    console.log(this.state)
    if ( this.state.like_token === 0){
      this.setState({
        like_token : this.state.like_token+1,
        like: this.state.like+1, 
      });
>>>>>>> Stashed changes
    }
    
    onLike = (event) =>{
        if (this.state.like === 1){
            this.setState(
                {
                    like : this.state.like -1
                }
            )
        } 
        else{
            this.setState(
                {
                    like : this.state.like + 1
                }
            )

        }
    }
<<<<<<< Updated upstream


    render(){
        return(
            <Card 
                className = "feedbox">
                <div className = "likeday ma3">
                    <h1>{this.props.title}</h1>
                    like : {this.state.like} D-day : {this.props.d_day}
                </div>
                <div className = "contentbox">
                    {this.props.content}
                </div>
                <img className = "imgs" alt= '' src= {`http://robohash.org/${this.props.id}?200*200`} />
                <div className = "buttons">
                    <ButtonFeedLike onLike = {this.onLike}/>
                    &nbsp; &nbsp;
                    <ButtonFeedDelete 
                        onDelete = {this.props.onDelete}
                        id = {this.props.id}/>
                </div>
            </Card>
        )

    }
=======
  };

  onSetting = (id, mod) =>{
    //console.log(mod);

    if ( mod === 1){
      this.setState({
        mod : 0,
      })
    }else{
      var result = window.confirm("수정을 하면 이전 내용을 사라집니다.");

      if (result){
        this.setState({
          mod : 1,
        })
      }


      //var choice = confirm('수정을 하면 이전 내용은 사라집니다. 수정하시겠습니까?');
      //this.props.onSaveContent(id)

      //this.props.onSaveContent(id)
      //this.props.onSetContent()
    }
    

  }

  render() {
    //console.log(this.props.mod);
    if ( this.state.mod === 0){
      return (
        <Card className="feedbox">
          <h1>{this.props.title}</h1>
          <p className = "likeday"> like : {this.state.like} D-day : {this.props.d_day}</p>
          <div className="contentbox">{this.props.content}</div>
          <div className = "buttons">
            <ButtonFeedLike  onLike={this.onLike} num = {this.props.id} />
            <ButtonFeedDelete  onDelete={this.props.onDelete} id={this.props.id} />
            <ButtonSetting  
              onSetting= {this.onSetting} 
              id={this.props.id} 
              mod = {this.state.mod}
            />  
          </div>
        </Card>
      );
    }else{
      return (
        <Card className="feedbox">
          <h1>{this.props.title}</h1>
          <p className = "likeday"> like : {this.state.like} D-day : {this.props.d_day}</p>
          <textarea 
            className="content"
            placeholder = "새로운 내용을 입력하세요."
            onChange={this.props.onSetContent}
             ></textarea>
          <div className = "buttons">
            <ButtonFeedLike  onLike={this.onLike} num = {this.props.id} />
            <ButtonFeedDelete  onDelete={this.props.onDelete} id={this.props.id} />
            <ButtonSetting
              onSetting= {this.onSetting}
              onSaveContent = {this.props.onSaveContent}
              id={this.props.id} 
              mod = {this.state.mod}/>  
          </div>
        </Card>
      );  
    }
  }
>>>>>>> Stashed changes
}

export default FeedCard