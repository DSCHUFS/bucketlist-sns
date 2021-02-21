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
        const userId = response.data.user_id;
        this.setState({
          currentUser: userId,
        });
        this.setState({
          ...this.state,
          currentUser: userId,
        });
        this.props.setCurrentUser(userId);
        sessionStorage.setItem("current_user", userId);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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

