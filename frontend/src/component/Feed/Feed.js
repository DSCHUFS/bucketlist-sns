import React from 'react';
import { Card } from 'ui-neumorphism'
import ButtonFeedDelete from '../buttonfeeddelete/ButtonFeedDelete';
import ButtonFeedLike from '../buttonfeedlike/BuffonFeedLike';
import './Feed.css';

const Feed = (props, {onClickLike}) => {
    return(
        <Card className = 'feedcard tl ma2'>
            <div className = "feedheader">
                <h1>{props.title}</h1>
                <p className = "tr"> D-DAY {props.d_day} And Like {props.like}</p>
            </div>
            <div className = "contentbox">{props.content}</div>
        </Card>
    )
}

export default Feed;


