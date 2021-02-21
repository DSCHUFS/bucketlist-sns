import axios from "axios";
import { Component } from "react";
import Profile from "../../component/profile/Profile";

class ProfileContainer extends Component {
  state = {
    user_info: null,
  };
  componentDidMount() {
    var config = {
      method: "get",
      url: "http://localhost:3001/mypage",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    let res = axios(config)
      .then((response) => {
        return response.data.info;
      })
      .catch((error) => {
        console.log(error);
        return null;
      });

    res.then((data) => {
      this.setState({
        ...this.state,
        user_info: data,
      });
    });
  }

  render() {
    // console.log(this.state);
    if (this.state.user_info !== null)
      return <Profile userInfo={this.state.user_info} />;
    return null;
  }
}

export default ProfileContainer;
