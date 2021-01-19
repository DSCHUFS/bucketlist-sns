// action
const CHANGE_INPUT = 'signin/CHANGE_INPUT'

export const setInput = (input) => {
    const id = input.id
    const value = input.value
    return {
        type: CHANGE_INPUT,
        payload: {id, value}
    }
}

const initInputField = {
    email: '',
    password: ''
}

export const signinInputField = (state = initInputField, action = {}) => {
    switch(action.type) {
        case CHANGE_INPUT :
            return { ...state, [action.payload.id]: action.payload.value }
        default :
            return state
    }
}