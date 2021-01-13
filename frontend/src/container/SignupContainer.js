import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import SignupTemplate from '../component/signup/SignupTemplate'
import SignupForm from '../component/signup/SignupForm'
import { setInput, checkValid } from '../reducer/signup'

class SignupContainer extends Component {
    checkValid = async (id) => {
        const { userInfo, validation, preCheckValid } = this.props
        let check = false
        let len = userInfo[id].length
        switch (id) {
            case 'email' :
                const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
                check = (0 < len && regExp.test(userInfo.email))? true : false
                return preCheckValid({id, check})
            case 'pwCheck':
                check = (validation.password && userInfo.password === userInfo.pwCheck)? true :  false
                return preCheckValid({id, check})
            case 'name':
                check = (0 < len && len <= 50 )? true : false
                return preCheckValid({id, check})
            case 'death':
                check = (userInfo.birth < userInfo.death)? true : false
                return preCheckValid({id, check})
            case 'profile_image':
                check = true
                return preCheckValid({id, check})
            case 'profile_detail' :
                check = (0 < len && len <= 200)? true : false
                return preCheckValid({id, check})
            default :
                check = (0 < len)? true : false
                return preCheckValid({id, check})
        }
    }

    onRegister = async () => {
        console.log('signup button click')
        const user_info = this.props.userInfo
        console.log(user_info)
        // tag /로 붙여서 전송하기
        const postSignup = async() => {
            const res = await axios.post('http://localhost:3001/signup', this.props.userInfo) // server랑 client port가 같아서 서버를 임의로 3001로 바꾸고 테스트
            console.log(`res : ${JSON.stringify(res)}`)
        }
        postSignup()
    }

    render() {
        const { onChange } = this.props
        return(
            <div style={{backgroundColor: '#e6e9f2'}}>
                <SignupTemplate />
                <SignupForm 
                    onChange = { onChange }
                    onRegister = { this.onRegister }
                    checkValid = { this.checkValid }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.signup,
    validation : state.validation
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch(setInput(e)),
    preCheckValid: (result) => dispatch(checkValid(result))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)