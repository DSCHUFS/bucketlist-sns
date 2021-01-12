import React, { Component } from 'react'
import axios from 'axios'
import SignupTemplate from '../component/signup/SignupTemplate'
import SignupForm from '../component/signup/SignupForm'

class SignupContainer extends Component {
    constructor(props) {
        super()
        this.state = {
        email: '',
        pw: '',
        pwCheck: '',
        name: '',
        birth: '',
        death: '',
        profile_image: '',
        profile_text: '',
        tags: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.id]: e.value})
    }

    onRegister = async () => {
        console.log('signup button click')
        console.log(this.state)
        const postSignup = async() => {
            const res = await axios.post('localhost:3000/signup', this.state)
            console.log(`res : ${res}`)
        }
        postSignup()
    }

    render() {
        return(
            <div style={{backgroundColor: '#e6e9f2'}}>
                <SignupTemplate />
                <SignupForm 
                    onChange = { this.onChange }
                    onRegister = { this.onRegister }
                />
            </div>
        )
    }
}

export default SignupContainer