import React, { Component }from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import RegisterTemplate from '../../component/register/RegisterTemplate'
import SigninForm from '../../component/signin/SigninForm'
import { Divider } from 'ui-neumorphism'
import { setInput } from '../../reducer/signin'
import '../../css/signin.css'

class SigninContainer extends Component {
    signin = () => {
        const { userInput, history } = this.props
        console.log(`singin onRegister`)
        console.log(this.props.userInput)
        axios.post('signin', userInput)
            .then(function(res) {
                console.log(`res.data : ${JSON.stringify(res.data)}`)
                console.log(`res.status : ${res.status}`)
                if(res.status === 200) {
                    console.log(`signin success`)
                    const token = res.data.token
                    history.push({
                        pathname: '/',
                        state: {token: token}
                    })
                }
            })
            .catch(function(err) {
                console.log(`signin post err : ${err}`)
                const res = err.response
                if(res && res.status === 400) {
                    console.log(`signin post res : ${res.data.msg}`)
                    alert(`${res.data.msg}`)
                }
            })
    }
    render() {
        const { onChange } = this.props
        return (
            <div>
            <RegisterTemplate text={'SIGNIN'} />
            <Divider dense />
            <SigninForm
                onChange={ onChange }
                signin={this.signin}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInput: state.signinInputField
})

const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch(setInput(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninContainer)
