import React from 'react';
import Feed from '../Feed/Feed';
import { feeds } from '../../Store/Feed';


const FeedList = ( {feeds} ) => { 
    return(
        <div>
            {feeds.map((user, i) => {
                return (
                <div>
                    <Feed 
                    key={i}  
                    title = {feeds[i].title}
                    content = {feeds[i].content}
                    />
                </div>
                    
                )
            })}

        </div>
    );



}

export default FeedList