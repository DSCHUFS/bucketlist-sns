import axios from "axios";
import { Component } from "react";
import Profile from "../../component/profile/Profile";

class ProfileContainer extends Component {
  state = {
    user_info: undefined,
    following_tags: undefined,
  };

  constructor(props) {
    super(props);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.getFollowingTags = this.getFollowingTags.bind(this);
  }

  componentDidMount() {
    this.getUserInfo();
    this.getFollowingTags();
  }

  getUserInfo() {
    var config = {
      method: "get",
      url: `/user/${this.props.userId}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios(config)
      .then((response) => {
        this.setState({
          ...this.state,
          user_info: response.data.info,
        });
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
  }

  getFollowingTags() {
    var config = {
      method: "get",
      url: `/tag/following/list/${this.props.userId}`,
      headers: {
        Authorization: localStorage.getItem("token"),
        "user-id": this.props.userId,
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.tags));
        this.setState({
          ...this.state,
          following_tags: response.data.tags,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    if (
      this.state.user_info !== undefined &&
      this.state.following_tags !== undefined
    )
      return (
        <Profile
          userInfo={this.state.user_info}
          followingTags={this.state.following_tags}
        />
      );
    return null;
  }
}

export default ProfileContainer;
