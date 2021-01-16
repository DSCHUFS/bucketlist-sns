import React, { Component }from 'react'
import RegisterTemplate from '../../component/register/RegisterTemplate'
import SigninForm from '../../component/signin/SigninForm'
import { Divider } from 'ui-neumorphism'
import '../signup/signup.css'

class SigninContainer extends Component {
    onChange = () => {
        console.log(`signin onChange`)
    }
    onRegister= () => {
        console.log(`singin onRegister`)
    }
    render() {
        return (
            <div>
            <RegisterTemplate text={'SIGNIN'} />
            <Divider dense />
            <SigninForm
                onChange={this.onChange}
                onRegister={this.onRegister}/>
            </div>
        )
    }
}

export default SigninContainer
