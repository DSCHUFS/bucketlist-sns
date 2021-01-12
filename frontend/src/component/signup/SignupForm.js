import React, { Component } from 'react'
import { Card, Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import SignupInputForm from './SignupInputForm' 

class SignupForm extends Component {
    render() {
        const { onChange, onRegister } = this.props
        return ( 
        <Card>
        <SignupInputForm 
            content = 'Email'
            id = 'email'
            width = '300'
            type = 'text'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = 'Password'
            id = 'pw'
            width = '300'
            type = 'password'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = 'Password Check'
            id = 'pwCheck'
            width = '300'
            type = 'password'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = 'Name'
            id = 'name'
            width = '300'
            type = 'text'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = 'Birth'
            id = 'birth'
            width = '300'
            type = 'date'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = 'Death'
            id = 'death'
            width = '300'
            type = 'date'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = 'Profile image'
            id = 'profile_image'
            width = '300'
            type = 'file'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = '소개글'
            id = 'profile_text'
            width = '500'
            type = 'text'
            onChange = { onChange }
        />
        <SignupInputForm 
            content = 'Tags'
            id = 'tags'
            width = '500'
            type = 'text'
            onChange = { onChange }
        />

        <Button rounded onClick={ onRegister }> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
        </Card>
        )
    }
}

export default SignupForm