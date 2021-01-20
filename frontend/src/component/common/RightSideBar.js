/*global kakao*/
import React from "react";
import styled from "styled-components";
import { Card } from "ui-neumorphism";
import Calendar from "react-calendar";
import "./Calendar.css";

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
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7,
        };

        const map = new window.kakao.maps.Map(container, options);
      });
    };
  }

  render() {
    return (
      <RightSideBarRoot>
        <Card inset style={CardStyle}>
          <FollowingTagCard />
          <Calendar />
          <div
            style={{ width: "100%", height: "400px", marginTop: "10px" }}
            id="Mymap"
          />
        </Card>
      </RightSideBarRoot>
    );
  }
}

export default RightSideBar;
