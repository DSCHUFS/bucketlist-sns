import React, { Component } from "react";
import "ui-neumorphism/dist/index.css";
import { feeds } from "../../store/Feed";

//component

import BucketGetBox from "../bucketgetbox/BucketGetBox";
import FeedList from "../feedList/FeedList";

import moment from 'moment';

//container

//reducer
import { connect } from "react-redux";
import { setContent } from "../../action";

//import Scroll from '../../container/scroll/Scroll';

//css
import "../../css/FeedPage.css";

const mapStateToProps = (state) => {
  return {
    nbucket: state.nbucket,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange_content: (event) => dispatch(setContent(event.target.value)),
  };
};

class FeedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: feeds,
      selected_content_id: 0,
      ntitle: "",
      //nbucket : '',
      like: 0,
      dday: "",
      del_id: -1,
    };
  }

  onInputChange_title = (event) => {
    console.log("title");
    this.setState({ ntitle: event.target.value });
  };
  /*
    onInputChange_content = (event) => {
        console.log("content")
        this.setState({ nbucket: event.target.value })
    }
    */
  onInputChange_d_day = (event) => {
    var m = moment()
    var days = event.target.value
    console.log(days)

    var result = Math.ceil(moment.duration(m.diff(days)).asDays())
    if ( result >= 0 ){
      alert("오늘보다 더 뒤로 날짜를 지정해주세요.")
    }else{
      this.setState({ dday: -(result) });
      console.log(-(result))

  }


  };
  onSubmitFeed = (event) => {
    if (this.state.ntitle.length === 0) {
      alert("제목을 입력해주세요!");
    } else if (this.props.nbucket.length === 0) {
      alert("내용을 입력해주세요!");
    } else {
      this.setState({
        feeds: feeds.push({
          id: feeds.length,
          title: this.state.ntitle,
          content: this.props.nbucket,
          d_day: this.state.dday,
          like: 0,
        }),
      });
    }
    console.log(feeds);
  };

  onDelete = (num) => {
    if (window.confirm("너의 버킷을 삭제할꺼야?")) {
      this.setState({ del_id: num });
      console.log(num);
    } else {
      alert("잘 생각했어!");
    }
  };

  render() {
    const { nbucket, onInputChange_content } = this.props;

    return (
      <div className="feeds">
        <BucketGetBox
          className="bucketgetbox"
          onInputChange_title={this.onInputChange_title}
          onInputChange_content={onInputChange_content}
          onInputChange_d_day={this.onInputChange_d_day}
          onSubmitFeed={this.onSubmitFeed}
        />
        <FeedList feeds={feeds} onDelete={this.onDelete}></FeedList>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
