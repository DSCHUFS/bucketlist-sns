import React from "react";
import styled from "styled-components";
import { Card } from "ui-neumorphism";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import FollowingTagCard from "./FollowingTagCard";

const RightSideBarRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  right: 0;
  padding: 10px;
  width: 400px;
  background-color: #e4ebf5;
`;

const CardStyle = {
  padding: "30px 10px",
  width: "100%",
  height: "100%",
};

class RightSideBar extends React.Component {
  render() {
    return (
      <RightSideBarRoot>
        <Card inset style={CardStyle}>
        <FollowingTagCard/>
        <Calendar/>
        </Card>
      </RightSideBarRoot>
    );
  }
}

export default RightSideBar;
