export const CHANGE_INPUT = 'signup/CHANGE_INPUT'

export const setInput = (input) => {
    const id = input.id
    const value = input.value
    return {
        type: CHANGE_INPUT,
        payload: { id, value }
    }
}