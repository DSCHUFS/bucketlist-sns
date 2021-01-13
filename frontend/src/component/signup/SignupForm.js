import React, { Component } from 'react'
import { Card, Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import SignupInputForm from './SignupInputForm' 

class SignupForm extends Component {
    render() {
        const { onChange, onRegister, checkValid } = this.props
        return ( 
        <Card>
        <SignupInputForm 
            content = 'Email'
            id = 'email'
            width = '300'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = 'Password'
            id = 'password'
            width = '300'
            type = 'password'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = 'Password Check'
            id = 'pwCheck'
            width = '300'
            type = 'password'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = 'Name'
            id = 'name'
            width = '300'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = 'Birth'
            id = 'birth'
            width = '300'
            type = 'date'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = 'Death'
            id = 'death'
            width = '300'
            type = 'date'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = 'Profile image'
            id = 'profile_image'
            width = '300'
            type = 'file'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = '소개글'
            id = 'profile_detail'
            width = '500'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
        />
        <SignupInputForm 
            content = 'Tags'
            id = 'tag'
            width = '500'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
        />

        <Button rounded onClick={ onRegister }> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
        </Card>
        )
    }
}

export default SignupForm