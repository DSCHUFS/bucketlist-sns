import { Component } from "react";
import styled from "styled-components";
import Header from "../component/common/Header.js";
import LeftSideBar from "../component/common/LeftSideBar";
import RightSideBar from "../component/common/RightSideBar";

const MainLayoutRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 90px);
`;
const FeedDiv = styled.div`
  width: 100%;
`;

class MainLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <MainLayoutRoot>
          <LeftSideBar>왼쪽</LeftSideBar>
          <FeedDiv>{this.props.children}</FeedDiv>
          <RightSideBar>오른쪽</RightSideBar>
        </MainLayoutRoot>
      </>
    );
  }
}

export default MainLayout;
