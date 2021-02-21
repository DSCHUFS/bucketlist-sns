import { signupInputField, validInputCheck } from "./signup";
import { signinInputField } from "./signin";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  signupInputField,
  validInputCheck,
  signinInputField,

});

export default rootReducer;
