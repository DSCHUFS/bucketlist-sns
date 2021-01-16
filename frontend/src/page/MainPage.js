import React, { Component } from "react";
import MainLayout from "../layout/MainLayout";
import { withRouter } from 'react-router-dom';

class MainPage extends Component {
  render() {
    const location = this.props.location
    const token = (location.state) ? location.state.token : ''
    return (
      <>
        <MainLayout>hello</MainLayout>
      </>
    );
  }
}

export default withRouter(MainPage);
