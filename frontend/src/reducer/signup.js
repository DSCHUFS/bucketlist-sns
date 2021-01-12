// action
export const CHANGE_INPUT = 'signup/CHANGE_INPUT'

export const setInput = (input) => {
    const id = input.id
    const value = input.value
    return {
        type: CHANGE_INPUT,
        payload: { id, value }
    }
}

// reducer
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

export const inputField = (state = initInputField, action = {}) => {
    switch(action.type) {
        case CHANGE_INPUT :
            return { ...state, [action.payload.id]: action.payload.value }
        default :
            return state
    }
}