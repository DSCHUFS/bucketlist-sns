import React, { Component } from "react";
import { Card } from "ui-neumorphism";
import "../../css/FeedCard.css";

//component
import ButtonFeedDelete from "../buttonfeeddelete/ButtonFeedDelete";
import ButtonFeedLike from "../buttonfeedlike/ButtonFeedLike";

class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: this.props.like,
    };
  }

  onLike = (event) => {
    this.setState({
      like: this.state.like + 1,
    });
  };

  render() {
    return (
      <Card className="feedbox">
        <div className="likeday ma3">
          <h1>{this.props.title}</h1>
          like : {this.state.like} D-day : {this.props.d_day}
        </div>
        <div className="contentbox">{this.props.content}</div>
        <img
          className="imgs"
          alt=""
          src={`http://robohash.org/${this.props.id}?200*200`}
        />
        <div className="buttons">
          <ButtonFeedLike onLike={this.onLike} />
          &nbsp; &nbsp;
          <ButtonFeedDelete onDelete={this.props.onDelete} id={this.props.id} />
        </div>
      </Card>
    );
  }
}

export default FeedCard;
