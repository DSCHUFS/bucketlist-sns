import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import RegisterTemplate from '../../component/register/RegisterTemplate'
import SignupForm from '../../component/signup/SignupForm'
import { setInput, checkValid } from '../../reducer/signup'
import { Divider } from 'ui-neumorphism'
import { getToday } from '../../lib/libs'
import '../../css/signup.css'

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
                const today = await getToday()
                check = (userInfo.birth && userInfo.birth < userInfo.death && userInfo.death > today)? true : false
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

    signup = async () => {
        const { validation, userInfo, history } = this.props
        console.log('signup button click')
        const isInputTrue = (curInput) => curInput === true

        if(Object.values(validation).every(isInputTrue)) {
            const {email, password, name, birth, death, profile_image, profile_detail, tag} = userInfo
            const user_info = { email, password, name, birth, death, profile_image, profile_detail, tag }
            console.log(user_info)
            axios.post('signup', user_info)
                .then(function (res) {
                    console.log(`res.data : ${JSON.stringify(res.data)}`)
                    console.log(`res.status : ${JSON.stringify(res.status)}`)
                    if(res.status === 200) {
                        console.log(`signup success`)
                        const token = res.data.token
                        localStorage.setItem("token", token)
                        history.push({
                            pathname: '/'
                        })
                    }
                })
                .catch(function (err) {
                    console.log(`signup post err : ${err}`)
                    const res = err.response
                    if(res && res.status === 400) {
                        console.log(`duplicate email`)
                        alert(`이미 가입된 이메일 입니다. 새로운 이메일으로 가입해주세요`)
                    } 
                })
        } else {
            alert(`입력한 정보가 정확한지 확인해주세요!`)
        }
    }

    render() {
        const { onChange, validation } = this.props
        return(
            <div className='container'>
                <RegisterTemplate text={'SIGNUP'} />
                <Divider dense />
                <SignupForm 
                    onChange = { onChange }
                    signup = { this.signup }
                    checkValid = { this.checkValid }
                    validation = { validation }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.signupInputField,
    validation : state.validInputCheck
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch(setInput(e)),
    preCheckValid: (result) => dispatch(checkValid(result))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)