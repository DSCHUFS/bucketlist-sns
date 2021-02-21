
import React, { Component } from "react";
import { Card, TextArea } from "ui-neumorphism";

import "../../css/FeedCard.css";

//component
import ButtonFeedDelete from "../buttonfeeddelete/ButtonFeedDelete";
import ButtonFeedLike from "../buttonfeedlike/ButtonFeedLike";
import ButtonSetting from "../buttonsetting/ButtonSetting";



import Upload from '../Upload'


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

    }else{
      this.setState({
        like_token : this.state.like_token-1,
        like: this.state.like-1, 
      });
    }
  };

  onSetting = (id, mod) =>{
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
          <img src = ''/>
          <div className = "buttons">
            <ButtonFeedLike  onLike={this.onLike} num = {this.props.id} />
            <ButtonFeedDelete  onDelete={this.props.onDelete} id={this.props.id} />
            <ButtonSetting  
              onSetting= {this.onSetting} 
              id={this.props.id} 
              mod = {this.state.mod}
            />  
          </div>

          <Upload/>
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


}

export default FeedCard;
