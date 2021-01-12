import { inputField } from './signup'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    signup: inputField
})

export default rootReducers