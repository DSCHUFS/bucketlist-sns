import React ,{ Component } from 'react';
import { Card  } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css';
import '../../css/BucketGetBox.css'

//component
import ButtonFeedCreate from '../buttonfeedcreate/ButtonFeedCreate'
//import ButtonFeedDelete from '../buttonfeeddelete/ButtonFeedDelete'


class BucketGetBox extends Component{
    render(){
        return(
            <Card className="getbucket">
                <h1>What's your Bucket</h1>
                <div>

                    <input 
                    className = "title"
                    type = "text"
                    placeholder = "어떤 버킷?"
                    onChange = {this.props.onInputChange_title}
                    />
                    
                    <input 
                        className = "dday"
                        type = "text"
                        placeholder = "D-day"
                        onChange = {this.props.onInputChange_d_day}
                    />

                    <input 
                        className = "content"
                        type = "text"
                        placeholder = "내용이 뭐니?"
                        onChange = {this.props.onInputChange_content}
                    />


                    <div>
                        <ButtonFeedCreate 
                            onSubmitFeed = {this.props.onSubmitFeed}
                        />
                        <input
                            className ="imgs"
                            type = "file"

                        />


                    </div>

                </div>
            </Card>
        )

    }
}

export default BucketGetBox