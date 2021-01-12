import signup from './signup'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    signup: signup
})

export default rootReducers