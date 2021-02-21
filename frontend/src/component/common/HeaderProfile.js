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
  render() {
    return (
      <HeaderProfileRoot>
        <Avatar>K</Avatar>

        <div style={{ margin: "10px" }}>
          <div
            style={{
              margin: "5px",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            고병학
          </div>
          <ProgressLinear
            value={40}

            style={{ width: "200px", height: "10px" }}
            color="var(--primary)"
          />
        </div>
      </HeaderProfileRoot>
    );
  }
}

export default HeaderProfile;
