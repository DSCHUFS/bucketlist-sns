import React from 'react'
import { Button } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

const RegisterButton = ({ text, ...rest }) => {
    return (
        <div>
            <Button rounded onClick={ rest }> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Button>
        </div>
        
    )
}

export default RegisterButton
