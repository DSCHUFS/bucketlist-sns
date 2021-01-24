import React, { Component } from "react";
import MainLayout from "../layout/MainLayout";
import { withRouter } from "react-router-dom";
import FeedPage from "../component/page/FeedPage";

class MainPage extends Component {
  componentDidMount() {
    // 확인
  }
  render() {
    const location = this.props.location;
    const token = location.state ? location.state.token : "";
    // key 검사 => 없으면 없는대로 처리
    // 있으면 로그인
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
