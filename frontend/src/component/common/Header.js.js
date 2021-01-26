import { Component } from "react";
import styled from "styled-components";
import { Card } from "ui-neumorphism";
import searchImg from "../../img/search.svg";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";

const HeaderRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 80px;
`;

const HeaderRootCard = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "calc(100% - 20px)",
  height: "100%",
  padding: "10px",
};

class Header extends Component {
  render() {
    return (
      <HeaderRoot>
        <Card style={HeaderRootCard}>
          <HeaderProfile />
          <div style={{ fontSize: "36px", fontWeight: "bold" }}>
            Bucket List
          </div>
          <HeaderSearch />
        </Card>
      </HeaderRoot>
    );
  }
}

export default Header;
