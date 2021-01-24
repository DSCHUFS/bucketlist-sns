import React from 'react'
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

const RegisterButton = ({ text, ...rest }) => {
    let onClick = (text === "signup")? rest.signup : rest.signin
    return (
        <div>
            <Button rounded onClick={ onClick }> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
        </div>
        
    )
}

export default RegisterButton
