import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import SignupTemplate from '../component/signup/SignupTemplate'
import SignupForm from '../component/signup/SignupForm'
import { setInput, checkValid } from '../reducer/signup'
import { Divider } from 'ui-neumorphism'
import './signup.css'

class SignupContainer extends Component {
    getToday = async () => {
        let today = new Date()
        let dd = today.getDate()
        if(dd < 10) {
            dd = '0' + dd
        }
        let mm = today.getMonth() + 1
        if(mm < 10) {
            mm = '0' + mm
        }
        let yyyy = today.getFullYear()
        today = `${yyyy}-${mm}-${dd}`
        return today
    }
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
                const today = await this.getToday()
                check = (userInfo.birth < userInfo.death && userInfo.death > today)? true : false
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
        const { validation, userInfo, history } = this.props
        console.log('signup button click')
        const isInputTrue = (curInput) => curInput === true

        if(Object.values(validation).every(isInputTrue)) {
            const {email, password, name, birth, death, profile_image, profile_detail, tag} = userInfo
            const user_info = { email, password, name, birth, death, profile_image, profile_detail, tag }
            console.log(user_info)
            axios.post('http://localhost:3001/signup', user_info)
                .then(function (res) {
                    console.log(`res.data : ${JSON.stringify(res.data)}`)
                    console.log(`res.status : ${JSON.stringify(res.status)}`)
                    if(res.status === 200) {
                        console.log(`signup success`)
                        
                        const token = res.data.token
                        history.push({
                            pathname: '/',
                            state: {token: token}
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
                <SignupTemplate />
                <Divider dense />
                <SignupForm 
                    onChange = { onChange }
                    onRegister = { this.onRegister }
                    checkValid = { this.checkValid }
                    validation = { validation }
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