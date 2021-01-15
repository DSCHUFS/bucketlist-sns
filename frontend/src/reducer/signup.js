// action
export const CHANGE_INPUT = 'signup/CHANGE_INPUT'
export const CHECK_EMAIL = 'signup/VALID_EMAIL'
export const CHECK_PASSWORD_CHECK = 'signup/VALID_PASSWORD_CHECK'
export const CHECK_NAME = 'signup/VALID_NAME'
export const CHECK_DEATH = 'signup/VALID_DEATH'
export const CHECK_PROFILE_IMAGE = 'signup/VALID_PROFILE_IMAGE'
export const CHECK_PROFILE_TEXT = 'signup/VALID_PROFILE_TEXT'
export const CHECK_BIRTH = 'signup/VALID_BIRTH'
export const CHECK_PASSWORD = 'signup/VALID_PASSWORD'
export const CHECK_TAGS = 'signup/VALID_TAGS'
export const CHECK_VALIDATION = 'signup/CHECK_VALIDATION'

export const setInput = (input) => {
    const id = input.id
    const value = input.value
    return {
        type: CHANGE_INPUT,
        payload: { id, value }
    }
}

export const checkValid = (result) => {
    return {
        type: CHECK_VALIDATION,
        payload: result
    }
}

// reducer
const initInputField = {
    email: '',
    password: '',
    pwCheck: '',
    name: '',
    birth: '',
    death: '',
    profile_image: '',
    profile_detail: '',
    tag: ''
}

const validInput = {
    email: false,
    password: false,
    pwCheck: false,
    name: false,
    birth: false,
    death: false,
    profile_image: true,
    profile_detail: false,
    tag: false
}

export const inputField = (state = initInputField, action = {}) => {
    switch(action.type) {
        case CHANGE_INPUT :
            return { ...state, [action.payload.id]: action.payload.value }
        default :
            return state
    }
}

export const validInputCheck = (state = validInput, action = {}) => {
    switch(action.type) {
        case CHECK_VALIDATION :
            return {...state, [action.payload.id]: action.payload.check}
        default :
            return state
    }
}