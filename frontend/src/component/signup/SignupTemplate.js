import React, { Component } from 'react'
import { Card, H5 } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class SignupTemplate extends Component {
    render() {
        return (
            <div>
                <Card height='55' style={{padding: '10px'}}>
                    <H5 style={{fontWeight:'bold'}}>
                    BUCKETLIST SIGNUP
                    </H5>
                </Card>
            </div>
        )
    }
}

export default SignupTemplate