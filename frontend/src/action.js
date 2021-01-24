import { CHAGNE_CONTENT } from './constants.js'

export const setContent = (text) => {
    console.log(text);
    return{
        type : 'CHAGNE_CONTENT' ,
        payload : text
    }

}
