import React, { Component } from 'react'
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class SignupInputForm extends Component {
    render() {
        const { content, width, type, id } = this.props
        return (
            <div>
                <h4> { content } </h4>
                <TextField
                    id={id}
                    width={width}
                    type={type}
                    style={{display: 'inline-block'}}
                    rounded
                    onChange={this.props.onChange.bind(this)}>
                </TextField>
            </div>
        )
    }
}

export default SignupInputForm