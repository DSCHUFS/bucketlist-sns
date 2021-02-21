import { signupInputField, validInputCheck } from "./signup";
import { signinInputField } from "./signin";
import { User } from "./user";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  signupInputField,
  validInputCheck,
  signinInputField,
  User,
});

export default rootReducer;
