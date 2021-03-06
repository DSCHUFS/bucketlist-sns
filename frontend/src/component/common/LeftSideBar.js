import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button, Card } from "ui-neumorphism";
import userImg from "../../img/user.svg";
import heartImg from "../../img/heart.svg";
import letterImg from "../../img/letter.svg";
import exportImg from "../../img/export.svg";
import { connect } from "react-redux";

const LeftSideBarRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  left: 0;
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

class LeftSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClickProfile = this.handleOnClickProfile.bind(this);
  }

  handleOnClickProfile() {
    this.props.history.push(`/user/${this.props.user}`);
  }
  render() {
    // console.log(window.location.href);
    const currentMenu = window.location.href.split("/")[3];

    return (
      <LeftSideBarRoot>
        <Card inset style={CardStyle}>
          <Button
            text={currentMenu === "user" ? false : true}
            style={ButtonStyle}
            onClick={this.handleOnClickProfile}
          >
            <img
              src={userImg}
              width="20px"
              height="20px"
              style={{ marginRight: "10px" }}
            />
            프로필
          </Button>
          {/* <Button text style={ButtonStyle}>
            <img
              src={userImg}
              width="20px"
              height="20px"
              style={{ marginRight: "10px" }}
            />
            나의 버킷
          </Button> */}
          <Button text style={ButtonStyle}>
            <img
              src={heartImg}
              width="20px"
              height="20px"
              style={{ marginRight: "10px" }}
            />
            내가 좋아요 누른 버킷
          </Button>
          {/* <Button text style={ButtonStyle}>
            <img
              src={letterImg}
              width="20px"
              height="20px"
              style={{ marginRight: "10px" }}
            />
            개발자 Contact
          </Button> */}
          <Button text style={ButtonStyle}>
            <img
              src={exportImg}
              width="20px"
              height="20px"
              style={{ marginRight: "10px" }}
            />
            Export 버킷
          </Button>
          {/* <Button text style={ButtonStyle}>
            <img
              src={userImg}
              width="20px"
              height="20px"
              style={{ marginRight: "10px" }}
            />
            전체 사용자 통계
          </Button> */}
        </Card>
      </LeftSideBarRoot>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.User.user,
});

export default connect(mapStateToProps, {})(withRouter(LeftSideBar));
