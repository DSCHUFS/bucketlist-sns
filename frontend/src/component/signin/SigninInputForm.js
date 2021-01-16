import React, { Component } from 'react'
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class SigninInputForm extends Component {
    onChange = () => {
        const { onChange } = this.props
        onChange()
    }
    render() {
        const {content, id, width, type, placeholder } = this.props
        return (
            <div className='inputform'>
                <div></div>
                <div className='input'>
                    <h4> { content } </h4>
                    <TextField
                        id={id}
                        width={width}
                        type={type}
                        rounded
                        onChange={ this.onChange }
                        placeholder = { placeholder } 
                        />
                </div>
            </div>
        )
    }
}

export default SigninInputForm
