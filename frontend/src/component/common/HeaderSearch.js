import React, { Component } from "react";
import styled from "styled-components";
import { Button, TextField } from "ui-neumorphism";
import searchImg from "../../img/search.svg";

const HeaderSearchRoot = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  right: 20px;
`;

class HeaderSearch extends Component {
  state = {
    open: false,
  };

  handleClickSearch = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    return (
      <HeaderSearchRoot>
        {this.state.open === true ? (
          <TextField style={{ marginTop: "22px" }} />
        ) : null}
        <Button
          style={{ borderRadius: "25px", width: "50px", height: "50px" }}
          onClick={this.handleClickSearch}
        >
          <img width="25px" height="25px" src={searchImg} />
        </Button>
      </HeaderSearchRoot>
    );
  }
}

export default HeaderSearch;
