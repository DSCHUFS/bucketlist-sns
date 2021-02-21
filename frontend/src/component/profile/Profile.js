import React, { Component } from "react";
import styled from "styled-components";
import { Card, Chip } from "ui-neumorphism";
import axios from "axios";

const ProfileRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px;
`;

const ProfileImage = styled.div`
  background-color: none;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  margin: 10px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const AddTagDiv = styled.div`
  cursor: pointer;
`;

const ChipStyle = {
  justifyContent: "center",
  alignItems: "center",
  margin: "5px",
};

const FollowingTagStyle = {
  padding: "10px",
  width: "90%",
};

class Profile extends Component {
  state = {
    user_info: undefined,
  };

  constructor(props) {
    super(props);
    this.state = {
      user_info: props.userInfo,
    };
  }

  editBirth() {}

  editDeath() {}

  editDetail() {}

  removeTag() {}

  addTag() {
    // TODO 중복 체크
  }

  render() {
    // console.log(this.state.user_info);
    let userInfo = this.state.user_info;
    if (userInfo === undefined) return <></>;
    return (
      <ProfileRoot>
        <Card style={{ borderRadius: "100px", margin: "10px" }}>
          <ProfileImage />
        </Card>
        <h2>{userInfo.name}</h2>
        <br />
        <h4>
          {userInfo.birth.split("T")[0].replaceAll("-", ".")} &nbsp;-&nbsp;
          {userInfo.death.split("T")[0].replaceAll("-", ".")}
        </h4>
        <br />
        <h4 style={{ color: "#555555" }}>{userInfo.profile_detail}</h4>
        <br />
        <Card style={FollowingTagStyle}>
          <h4>Following Tags</h4>
          <hr style={{ marginTop: "3px" }} />
          <br />
          <RowDiv>
            {userInfo.following_tags.map((e) => (
              <Chip
                style={ChipStyle}
                size="large"
                closable
                onAction={() => console.log("clicked")}
              >
                {e}
              </Chip>
            ))}
            <AddTagDiv onClick={() => console.log("add Clicked")}>
              <Chip style={ChipStyle} size="large">
                +
              </Chip>
            </AddTagDiv>
          </RowDiv>
        </Card>
      </ProfileRoot>
    );
  }
}

export default Profile;
