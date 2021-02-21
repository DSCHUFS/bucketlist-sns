import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { Card, Chip } from "ui-neumorphism";

const CardStyle = {
  margin: "0 10px 20px 10px",
  padding: "10px",
  lineHeight: "24px",
};

class FollowingTagCard extends Component {
  state = {
    following_tags: undefined,
  };
  componentDidMount() {
    this.getFollowingTags();
  }

  getFollowingTags() {
    // console.log(sessionStorage.getItem("current_user"));
    var config = {
      method: "get",
      url: `/tag/following/list/${sessionStorage.getItem("current_user")}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data.tags));
        if (response.data.tags !== "No following tags")
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
    // console.log(this.state.following_tags);
    return (
      <div>
        <span style={{ fontWeight: "bold" }}>FOLLOWING TAGS</span>
        <div style={CardStyle}>
          {this.state.following_tags !== undefined
            ? this.state.following_tags.map((e) => (
                <Chip
                  style={{
                    margin: "5px",
                    fontSize: "1rem",
                  }}
                  label
                >
                  {e}
                </Chip>
              ))
            : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: state.User.user,
});

export default connect(mapStateToProps, {})(FollowingTagCard);
