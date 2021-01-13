import React from "react";
import styled from "styled-components";
import { Button, Card } from "ui-neumorphism";
import userImg from "../../img/user.svg";
import heartImg from "../../img/heart.svg";
import letterImg from "../../img/letter.svg";
import exportImg from "../../img/export.svg";

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

const ButtonStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  width: "200px",
  margin: "20px 10px",
};

class RightSideBar extends React.Component {
  render() {
    return (
      <RightSideBarRoot>
        <Card inset style={CardStyle}></Card>
      </RightSideBarRoot>
    );
  }
}

export default RightSideBar;
