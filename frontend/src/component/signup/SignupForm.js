import React, { Component } from 'react'
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'
import SignupInputForm from './SignupInputForm' 
import { Link } from 'react-router-dom'

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
            placeholder = 'foo@example.com'
        />
        <SignupInputForm 
            content = 'Password'
            id = 'password'
            width = '300'
            type = 'password'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.password }
            placeholder = 'password'
        />
        <SignupInputForm 
            content = 'Password Check'
            id = 'pwCheck'
            width = '300'
            type = 'password'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.pwCheck }
            placeholder = 'password 확인'
        />
        <SignupInputForm 
            content = 'Name'
            id = 'name'
            width = '300'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.name }
            placeholder = '50자이내로 입력해주세요'
        />
        <SignupInputForm 
            content = 'Birth'
            id = 'birth'
            width = '300'
            type = 'date'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.birth }
            placeholder = '0000-00-00'
        />
        <SignupInputForm 
            content = 'Death'
            id = 'death'
            width = '300'
            type = 'date'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.death }
            placeholder = '0000-00-00'
        />
        <SignupInputForm 
            content = 'Profile image'
            id = 'profile_image'
            width = '300'
            type = 'file'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.profile_image }
            placeholder = '프로필 사진 없음'
        />
        <SignupInputForm 
            content = '소개글'
            id = 'profile_detail'
            width = '500'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.profile_detail }
            placeholder = '간단한 자기소개를 200자 이내로 적어주세요'
        />
        <SignupInputForm 
            content = 'Tags'
            id = 'tag'
            width = '500'
            type = 'text'
            onChange = { onChange }
            checkValid = { checkValid }
            validation = { validation.tag }
            placeholder = 'tag1/tag2/tag3'
        />

        <Button rounded onClick={ onRegister }> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;signup&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
        </div>
        )
    }
}

export default SignupForm