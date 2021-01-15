import React, { Component } from 'react'
import { TextField } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

class SignupInputForm extends Component {
    onChange = async(e) => {
        const { checkValid, onChange } = this.props
        await onChange(e)
        await checkValid(e.id)
    }
    render() {
        const { content, width, type, id, validation } = this.props
        let text = null
        let text_content = ''
        if(!validation) {
            switch (id) {
                case 'email' :
                    text_content = '올바른 형식이 아닙니다'
                    break
                case 'pwCheck' :
                    text_content = '비밀번호와 일치하지 않습니다'
                    break
                case 'death' :
                    text_content = '올바른 입력이 아닙니다'
                    break
                default :
                    text_content = '입력해 주세요'
            }
            text = <span className='text'>{text_content}</span>
        }
        
        return (
            <div className='inputform'>
                <div>
                    <h4> { content } </h4>
                    <TextField
                        id={id}
                        width={width}
                        type={type}
                        // style={{display: 'inline-block'}}
                        rounded
                        onChange={this.onChange.bind(this)}>
                    </TextField>
                </div>
                { text }
            </div>
        )
    }
}

export default SignupInputForm