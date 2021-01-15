import {CHAGNE_CONTENT } from './constants'

const initalState = {
    nbucket : ''
}


export const changeContent = (state=initalState, action = {})=>{
    switch(action.type){
        case CHAGNE_CONTENT:
            return Object.assign({}, state, { nbucket : action.payload })
        default:
            return state;
    }
}
