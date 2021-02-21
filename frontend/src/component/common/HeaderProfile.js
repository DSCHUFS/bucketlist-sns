import { Component } from "react";
import styled from "styled-components";
import { Avatar, ProgressLinear } from "ui-neumorphism";

const HeaderProfileRoot = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  left: 20px;
`;

class HeaderProfile extends Component {
  subDate() {
    const userInfo = this.props.userInfo;
    const birth = new Date(userInfo.birth); //"now"
    const death = new Date(userInfo.death); // some date
    const today = new Date();
    const total = Math.abs(birth - death); // difference in milliseconds
    const past = Math.abs(today - birth);
    // console.log(past / (1000 * 60 * 60 * 24));
    // console.log(total / (1000 * 60 * 60 * 24));
    // console.log(Math.floor((past / total) * 100));
    return Math.floor((past / total) * 100);
  }
  render() {
    console.log(this.props.userInfo);
    const progress = this.subDate();
    const userInfo = this.props.userInfo;
    return (
      <HeaderProfileRoot>
        <Avatar>{userInfo.name[0]}</Avatar>
        <div style={{ margin: "10px" }}>
          <div
            style={{
              margin: "5px",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            {userInfo.name}
          </div>
          <ProgressLinear
            value={progress}
            style={{ width: "200px", height: "10px" }}
            color="var(--primary)"
          />
        </div>
      </HeaderProfileRoot>
    );
  }
}

export default HeaderProfile;
