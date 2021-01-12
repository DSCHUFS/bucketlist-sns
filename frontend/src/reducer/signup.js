import { CHANGE_INPUT } from '../action/signup'

const initInputField = {
    email: '',
    pw: '',
    pwCheck: '',
    name: '',
    birth: '',
    death: '',
    profile_image: '',
    profile_text: '',
    tags: ''
}

const inputField = (state = initInputField, action = {}) => {
    switch(action.type) {
        case CHANGE_INPUT :
            return { ...state, [action.payload.id]: action.payload.value }
        default :
            return state
    }
}

export default inputField