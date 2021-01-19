import { signupInputField, validInputCheck } from './signup'
import { signinInputField } from './signin'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    signupInputField,
    validInputCheck,
    signinInputField
})

export default rootReducers