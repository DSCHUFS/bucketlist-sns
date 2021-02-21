import React, { Component } from "react";
import styled from "styled-components";
import { Button, Card, Chip, TextArea, TextField } from "ui-neumorphism";
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
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  width: "90%",
};

class Profile extends Component {
  state = {
    user_info: undefined,
    following_tags: undefined,
    add_tag: false,
    edit_detail: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      user_info: props.userInfo,
      following_tags: props.followingTags,
    };

    this.handleOnKeyDownDetail = this.handleOnKeyDownDetail.bind(this);
    this.handleOnKeyDownAddTag = this.handleOnKeyDownAddTag.bind(this);
  }

  editBirth() {}

  editDeath() {}

  editDetail() {}

  handleOnKeyDownDetail(e) {
    if (!e.shiftKey && e.keyCode === 13) {
      if (e.target.value.length > 150) {
        return false;
      }
      var data = JSON.stringify({
        name: this.state.user_info.name,
        birth: this.state.user_info.birth,
        death: this.state.user_info.death,
        profile_image: this.state.user_info.profile_image,
        profile_detail: e.target.value,
      });

      var config = {
        method: "put",
        url: "/user/update",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          this.setState({
            ...this.state,
            edit_detail: false,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log(e.target.value);
      const val = e.target.value;
      this.setState({
        ...this.state,
        user_info: {
          ...this.state.user_info,
          profile_detail: val,
        },
      });
    }
  }

  removeTag(tagName) {
    var data = JSON.stringify({ tag_name: tagName, following: "unfollowing" });

    var config = {
      method: "post",
      url: "/tag/following",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        this.setState({
          ...this.state,
          following_tags: this.state.following_tags.filter(
            (e) => e !== tagName
          ),
        });
      })
      .catch(function (error) {
        alert("태그 제거 실패했습니다.");
        console.log(error);
      });
  }

  addTag(tagName) {
    // TODO 중복 체크
    console.log(this.state.following_tags.filter((e) => e === tagName));
    if (this.state.following_tags.filter((e) => e === tagName).length > 0) {
      return false;
    }

    var data = JSON.stringify({ tag_name: tagName, following: "following" });

    var config = {
      method: "post",
      url: "/tag/following",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        this.setState({
          ...this.state,
          following_tags: [...this.state.following_tags, tagName],
        });
      })
      .catch(function (error) {
        alert("태그 제거 실패했습니다.");
        console.log(error);
      });

    return true;
  }

  handleOnKeyDownAddTag(e) {
    if (e.keyCode === 13) {
      let res = this.addTag(e.target.value);
      if (!res) alert("중복된 태그입니다");
    }
  }

  render() {
    console.log(this.state);
    const userInfo = this.state.user_info;
    const followingTags = this.state.following_tags;

    if (userInfo === undefined || followingTags === undefined) return <></>;
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
        {this.state.edit_detail ? (
          <TextArea
            width={300}
            height={120}
            autoExpand
            label="정보를 입력해주세요."
            value={this.state.user_info.profile_detail}
            onKeyDown={this.handleOnKeyDownDetail}
            counter={150}
          />
        ) : (
          <>
            <h4 style={{ color: "#555555" }}>{userInfo.profile_detail}</h4>
            <br />
            <div
              onClick={() =>
                this.setState({
                  ...this.state,
                  edit_detail: !this.state.edit_detail,
                })
              }
              style={{ cursor: "pointer" }}
            >
              수정하기
            </div>
          </>
        )}
        <br />
        <Card style={FollowingTagStyle}>
          <h4>Following Tags</h4>
          <hr style={{ marginTop: "3px", width: "90%" }} />
          <br />
          <RowDiv>
            {followingTags.map((e, idx) => (
              <Chip
                key={e}
                style={ChipStyle}
                size="large"
                closable
                onAction={() => this.removeTag(e)}
              >
                {e}
              </Chip>
            ))}
          </RowDiv>

          <br />
          {this.state.add_tag ? (
            <TextField
              label="태그 추가"
              dense
              onKeyDown={this.handleOnKeyDownAddTag}
            />
          ) : (
            <AddTagDiv
              onClick={() => this.setState({ ...this.state, add_tag: true })}
            >
              <Chip style={ChipStyle} size="large">
                +
              </Chip>
            </AddTagDiv>
          )}
        </Card>
      </ProfileRoot>
    );
  }
}

export default Profile;
