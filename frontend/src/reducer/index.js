import { inputField, validInputCheck } from './signup'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    signup: inputField,
    validation: validInputCheck
})

export default rootReducers