import React from 'react';
import './Inputbox.css';
import Button from '../Button/Button'

const InputBox = ({content, onInputChange_title ,onInputChange_content, onSubmit}) => {
    return (
        <div class = "box">
            <div className = "inputBox">
                <h1> What's yout Bucket </h1>
                <input 
                    className = "title" 
                    type="text" 
                    placeholder ="your bucket" 
                    onChange = {onInputChange_title}
                />
                    <br></br>
                    <input 
                        className = "content" 
                        type="text" 
                        placeholder ="your bucket" 
                        onChange = {onInputChange_content}
                    />
                    <br></br>
                    <Button  onSubmits = {onSubmit} ></Button>
            </div>
        </div>

    )
}

export default InputBox