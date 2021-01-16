import { Component } from "react";
import { Card } from "ui-neumorphism";

const CardStyle = {
    margin: '0 10px 20px 10px',
    padding: '10px',
    lineHeight: '24px'
}

class FollowingTagCard extends Component {
    render(){
        return (
            <Card style={CardStyle}>
              팔로잉 태그, 팔로잉 태그, 팔로잉 태그, 팔로잉 태그, 팔로잉 태그, 팔로잉 태그, 팔로잉 태그, 팔로잉 태그, 팔로잉 태그
            </Card>
            );
    }
}

export default FollowingTagCard;