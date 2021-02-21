import React, { Component } from "react";
//import { Card } from 'ui-neumorphism'
import "ui-neumorphism/dist/index.css";
import FeedCard from "../feedcard/FeedCard";
import Scroll from "../../container/scroll/Scroll";
import axios from "axios";
import { TabItems } from "ui-neumorphism";

class FeedList extends Component {
  state = {
    bucket_list: undefined,
  };
  constructor() {
    super();
    this.state = {
      feeds: this.props,
    };
    this.getList = this.getList.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  getList() {
    var config = {
      method: "get",
      url: "/bucket/list",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios(config)
      .then((response) => {
        console.log(response.data.info);
        this.setState({
          ...this.state,
          bucket_list: response.data.info,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.bucket_list === undefined) {
      return null;
    }
    const data = this.state.bucket_list;
    return (
      <Scroll>
        {data.map((e, i) => (
          <FeedCard
            key={i}
            id={e.bucket_id}
            title={e.bucket_title}
            content={e.bucket_contents}
            like={e.like}
            like_token={e.my_like}
            d_day={e.d_day}
            del_token={e.del_token}
            onDelete={this.props.onDelete}
            onSetContent={this.props.onSetContent}
            onSaveContent={this.props.onSaveContent}
            //mod = {this.props.mod}
          />
        ))}
      </Scroll>
    );
  }
}

export default FeedList;
