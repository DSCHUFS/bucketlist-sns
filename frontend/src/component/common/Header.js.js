import { Component } from "react";
import { withRouter } from "react-router";
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

const HeaderTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
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
  constructor(props) {
    super(props);
    this.handleOnClickLogo = this.handleOnClickLogo.bind(this);
  }

  handleOnClickLogo() {
    this.props.history.push("/");
  }
  render() {
    return (
      <HeaderRoot>
        <Card style={HeaderRootCard}>
          <HeaderProfile />
          <HeaderTitle onClick={this.handleOnClickLogo}>
            Bucket List
          </HeaderTitle>
          <HeaderSearch />
        </Card>
      </HeaderRoot>
    );
  }
}

export default withRouter(Header);
