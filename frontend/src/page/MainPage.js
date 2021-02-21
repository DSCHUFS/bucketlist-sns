import React, { Component } from "react";
import MainLayout from "../layout/MainLayout";
import { withRouter } from "react-router-dom";
import FeedPage from "../component/page/FeedPage";

class MainPage extends Component {
  componentDidMount() {
    // const token = localStorage.getItem('token')
    // console.log(token)
    const token = 'testtoken' // token이 없으면 mainpage가 안띄워지기 때문에 임시로 설정해놓은 것
    if(!token) {
      this.props.history.push({
        pathname: '/signin'
      })

    }
  }
  render() {
    return (
      <>
        <MainLayout>
          <FeedPage />
        </MainLayout>
      </>
    );
  }
}

export default withRouter(MainPage);
