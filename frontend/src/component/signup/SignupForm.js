import React, { Component } from 'react'
import { Card, Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import SignupInputForm from './SignupInputForm' 

class SignupForm extends Component {
    render() {
        const { onChange, onRegister, checkValid, validation } = this.props
        return ( 
        <div className='formContainer'>
        <SignupInputForm 
            content = 'Email'
            id = 'email'
            width = '300'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.email }
        />
        <SignupInputForm 
            content = 'Password'
            id = 'password'
            width = '300'
            type = 'password'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.password }
        />
        <SignupInputForm 
            content = 'Password Check'
            id = 'pwCheck'
            width = '300'
            type = 'password'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.pwCheck }
        />
        <SignupInputForm 
            content = 'Name'
            id = 'name'
            width = '300'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.name }
        />
        <SignupInputForm 
            content = 'Birth'
            id = 'birth'
            width = '300'
            type = 'date'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.birth }
        />
        <SignupInputForm 
            content = 'Death'
            id = 'death'
            width = '300'
            type = 'date'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.death }
        />
        <SignupInputForm 
            content = 'Profile image'
            id = 'profile_image'
            width = '300'
            type = 'file'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.profile_image }
        />
        <SignupInputForm 
            content = '소개글'
            id = 'profile_detail'
            width = '500'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.profile_detail }
        />
        <SignupInputForm 
            content = 'Tags'
            id = 'tag'
            width = '500'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.tag }
        />

        <Button rounded onClick={ onRegister }> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
        </div>
        )
    }
}

export default SignupForm