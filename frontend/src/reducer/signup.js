// action
const CHANGE_INPUT = 'signup/CHANGE_INPUT'
const CHECK_VALIDATION = 'signup/CHECK_VALIDATION'

export const setInput = (input) => {
    const id = input.id
    let value = input.value
    if(id === 'profile_image') {
        value = input.event.target.files[0]
        console.log('value : ', value)
        return {
            type: CHANGE_INPUT,
            payload: { id, value }
        }
    } 
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
    profile_image: 'none',
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
    profile_image: false,
    profile_detail: false,
    tag: false
}

export const signupInputField = (state = initInputField, action = {}) => {
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
            return {...state}
    }
}