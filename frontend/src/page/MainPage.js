import React, { Component } from "react";
import MainLayout from "../layout/MainLayout";
import { withRouter } from "react-router-dom";
import FeedPage from "../component/page/FeedPage";

class MainPage extends Component {
  componentDidMount() {
    localStorage.setItem('token', 'thisistoken') // temp localStorage
    const token = localStorage.getItem('token')
    // console.log(token)
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
