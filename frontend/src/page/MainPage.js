import React, { Component } from "react";
import MainLayout from "../layout/MainLayout";
import { withRouter } from "react-router-dom";
import FeedPage from "../component/page/FeedPage";

class MainPage extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.history.push({
        pathname: "/signin",
      });
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
