import React from 'react';
import { feeds } from '../../Store/Feed';
import './Feed.css';

const Feed = (props) => {
    return(
        <div className = 'feed-box tc bg-light-pink br4 pa3 ma4 bw5 shadow-5'>
            <div>
                date location
                <button>like</button>
                <button>progress</button>
            </div>
            <div>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </div>
            <div>
                <button>del</button>
            </div>

        </div>
    )
}

export default Feed;