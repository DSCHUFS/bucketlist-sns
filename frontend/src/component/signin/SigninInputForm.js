import React, { Component } from 'react'
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class SigninInputForm extends Component {
    onChange = async(e) => {
        const { onChange } = this.props
        await onChange(e)
    }
    render() {
        const {content, id, width, type, placeholder } = this.props
        return (
            <div className='signininputform'>
                <div></div>
                <div className='input'>
                    <h4> { content } </h4>
                    <TextField
                        id={id}
                        width={width}
                        type={type}
                        rounded
                        onChange={ this.onChange.bind(this) }
                        placeholder = { placeholder } 
                        />
                </div>
            </div>
        )
    }
}

export default SigninInputForm
