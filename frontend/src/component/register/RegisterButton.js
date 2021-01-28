import React from "react";
import { Button } from "ui-neumorphism";

const RegisterButton = ({ onRegister, text }) => {
  return (
    <div>
      <Button rounded onClick={onRegister}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button>
    </div>
  );
};

export default RegisterButton;
