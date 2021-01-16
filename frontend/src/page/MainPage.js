import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import styled from "styled-components";
import LeftSideBar from "../component/sidebar/LeftSideBar";


const MainPageRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 80px;
  width: 100%;
  height: calc(100vh - 80px);
`;

const TopNav = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 80px;
  background-color: grey;
`;

const RightSideBar = styled.div`
  display: flex;
  flex-direction: column;
  right: 0;
  width: 400px;
  background-color: blue;
`;

const FeedDiv = styled.div`
  width: 100%;
`;
class MainPage extends Component {
  render() {
    const location = this.props.location
    const token = (location.state) ? location.state.token : ''
    return (
      <>
        <TopNav>상단바</TopNav>
        <MainPageRoot>
          <LeftSideBar>왼쪽</LeftSideBar>
          <FeedDiv>메인 피드</FeedDiv>
          <RightSideBar>오른쪽</RightSideBar>
        </MainPageRoot>
      </>
    );
  }
}

export default withRouter(MainPage);
