import React, { Component } from 'react'
import { H5 } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class RegisterTemplate extends Component {
    render() {
        const { text } = this.props
        return (
            <div className='header'>
                    <H5> BUCKETLIST {text} </H5>
            </div>
        )
    }
}

export default RegisterTemplate
