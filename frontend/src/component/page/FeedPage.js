import React, { Component} from "react";
//import {useState} from "react";
import "ui-neumorphism/dist/index.css";
import { feeds } from "../../store/Feed";


//component

import BucketGetBox from "../bucketgetbox/BucketGetBox";
import FeedList from "../feedList/FeedList";
import axios from "axios";
import moment from "moment";


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
      nbucket : '',
      like: 0,
      dday: 0,
      selectedFile : null,
      del_token: -1,

    };
  }

  onInputChange_title = (event) => {

    this.setState({ ntitle: event.target.value });
  };
  
  onInputChange_content = (event) => {

      this.setState({ nbucket: event.target.value })
  }

  onInputChange_d_day = (event) => {
    var m = moment()
    var days = event.target.value
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
    } else if (this.state.nbucket.length === 0) {
      alert("내용을 입력해주세요!");
    } else if ( this.state.dday === 0 ){
      alert("날짜를 입력해주세요!")
    } 
    else {

      this.setState({
        feeds: feeds.push({
          id: feeds.length,
          title: this.state.ntitle,
          content: this.state.nbucket,
          d_day: this.state.dday,
          img : this.state.nimg,
          like: 0,
          like_token : 0,
          del_token : 0,
        }),
      });
    }
    console.log(feeds);
  /*
    if ( localStorage.getItem('token')){
      if (this.state.ntitle.length === 0) {
        alert("제목을 입력해주세요!");
      } else if (this.state.nbucket.length === 0) {
        alert("내용을 입력해주세요!");
      } else {
        this.setState({
          feeds: feeds.push({
            id: feeds.length,
            title: this.state.ntitle,
            content: this.state.nbucket,
            d_day: this.state.dday,
            like: 0,
            like_token : 0,
          }),
        });
      }
      console.log(feeds);
    }else{
      alert('로그인을 해주세요!');
      console.log(localStorage.getItem('token'));
    }*/


  };



  onInputChange_pic = (event) => {
    console.log("Giveup");

  }


/*
  onSetting = (num, mod) => {
    console.log(mod)
    console.log("내용 수정하기");
    if ( mod === 0){
      mod = 1
    }else{
      mod = 0
    }
    console.log(feeds[num])
    console.log(mod)
  };
*/
  

onSetContent = (event) => {
  console.log(event.target.value)
  this.setState({ nbucket: event.target.value })
};

onSaveContent = (num) => {
  console.log(this.state.nbucket)
  console.log(feeds[num].content)
  feeds[num].content = this.state.nbucket
  this.setState( {
    feeds : feeds.map(
      content => feeds[num].id === num 
      ? this.state.nbucket
      : content
    )
  })
  console.log(feeds)
}

  


  onDelete = (num) => {
    //console.log(this.state.feeds[num])
    if (window.confirm("너의 버킷을 삭제할꺼야?")) {
      this.setState({ feeds : feeds.splice(num,1)});
    } else {
      alert("잘 생각했어!");
    }
    console.log(this.state.feeds[num])
  };

  render() {
    //const { nbucket, onInputChange_content } = this.props;
    var mod = 0;
    //console.log(mod);

    return (
      <div className="feeds">
        <BucketGetBox
          className="bucketgetbox"
          onInputChange_title={this.onInputChange_title}
          onInputChange_content={this.onInputChange_content}
          onInputChange_d_day={this.onInputChange_d_day}
          onSubmitFeed={this.onSubmitFeed}

          onInputChange_pic = {this.onInputChange_pic}
 
        />
        <FeedList 
          feeds={feeds} 
          onDelete={this.onDelete}
          onSetContent = {this.onSetContent}
          onSaveContent = {this.onSaveContent}
          mod = {mod}
          ></FeedList>
        

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
