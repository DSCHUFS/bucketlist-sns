import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import HeaderProfile from "../../component/common/HeaderProfile";

class HeaderProfileContainer extends Component {
  state = {
    user_info: undefined,
  };

  constructor(props) {
    super(props);
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  componentDidMount() {
    this.getUserInfo(this.props.currentUser);
  }

  getUserInfo(userId) {
    var config = {
      method: "get",
      url: `/user/${userId}`,
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

  render() {
    if (this.state.user_info === undefined) return null;
    return <HeaderProfile userInfo={this.state.user_info} />;
  }
}

const mapStateToProps = (state) => ({
  user: state.User.user,
});

export default connect(mapStateToProps, {})(HeaderProfileContainer);
