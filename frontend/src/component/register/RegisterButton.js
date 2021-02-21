import React from "react";
import { Button } from "ui-neumorphism";

const RegisterButton = ({ onRegister, text, ...rest }) => {
  const isInputTrue = (curInput) => curInput === true
  if((text === 'signup' && Object.values(rest.validation).every(isInputTrue)) || text === 'signin') {
    return (
      <div>
        <Button rounded onClick={onRegister}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button disabled rounded>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Button>
      </div>
    );
  }
  
};

export default RegisterButton;
