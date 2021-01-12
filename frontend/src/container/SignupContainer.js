import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import SignupTemplate from '../component/signup/SignupTemplate'
import SignupForm from '../component/signup/SignupForm'
import { setInput } from '../reducer/signup'

class SignupContainer extends Component {
    onRegister = async () => {
        console.log('signup button click')
        console.log(this.props.userInfo)
        const postSignup = async() => {
            const res = await axios.post('http://localhost:3001/signup', this.props.userInfo) // server랑 client port가 같아서 서버를 임의로 3001로 바꾸고 테스트
            console.log(`res : ${JSON.stringify(res)}`)
        }
        postSignup()
    }

    render() {
        const {onChange} = this.props
        return(
            <div style={{backgroundColor: '#e6e9f2'}}>
                <SignupTemplate />
                <SignupForm 
                    onChange = { onChange }
                    onRegister = { this.onRegister }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: {
        email: state.signup.email,
        password: state.signup.pw,
        name: state.signup.name,
        birth: state.signup.birth,
        death: state.signup.death,
        profile_image: state.signup.profile_image,
        profile_detail: state.signup.profile_text,
        tag: state.signup.tags
    }
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch(setInput(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)