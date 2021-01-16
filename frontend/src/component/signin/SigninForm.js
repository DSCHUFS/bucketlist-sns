import React, { Component } from 'react'
import 'ui-neumorphism/dist/index.css'
import RegisterButton from '../register/RegisterButton'
import SigninInputForm from './SigninInputForm'

class SigninForm extends Component {
    render() {
        const { onChange, onRegister } = this.props
        return ( 
            <div className='formContainer'>
            <SigninInputForm 
                content = 'Email'
                id = 'email'
                width = '500'
                type = 'text'
                onChange = {onChange}
                placeholder = 'foo@example.com'
            />
            <SigninInputForm 
                content = 'Password'
                id = 'password'
                width = '500'
                type = 'password'
                onChange = {onChange}
                placeholder = 'password'
            />
            <RegisterButton onRegister={onRegister} text={'signin'} />
            </div>
        )
    }
}

export default SigninForm