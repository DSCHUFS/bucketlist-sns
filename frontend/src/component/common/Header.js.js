import axios from "axios";
import { Component } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { Card } from "ui-neumorphism";
import searchImg from "../../img/search.svg";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";

import { setCurrentUser } from "../../reducer/user";
import { connect } from "react-redux";
import HeaderProfileContainer from "../../container/common/HeaderProfileContainer";

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
  state = {
    currentUser: undefined,
  };

  constructor(props) {
    super(props);
    this.handleOnClickLogo = this.handleOnClickLogo.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  componentDidMount() {
    if (this.props.user === undefined) this.getCurrentUser();
    else this.setState({ currentUser: this.props.user });
  }

  handleOnClickLogo() {
    this.props.history.push("/");
  }

  getCurrentUser() {
    var config = {
      method: "get",
      url: "/user/getid",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios(config)
      .then((response) => {
        this.setState({
          currentUser: response.data.user_id,
        });
        this.setState({
          ...this.state,
          currentUser: response.data.user_id,
        });
        this.props.setCurrentUser(response.data.user_id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.currentUser === undefined) return null;
    return (
      <HeaderRoot>
        <Card style={HeaderRootCard}>
          <HeaderProfileContainer currentUser={this.state.currentUser} />
          <HeaderTitle onClick={this.handleOnClickLogo}>
            Bucket List
          </HeaderTitle>
          <HeaderSearch />
        </Card>
      </HeaderRoot>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (e) => dispatch(setCurrentUser(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
