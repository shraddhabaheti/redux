import { REGISTRATION } from "../constant/constant"
export const registerActionCreator = (register) => {
    return {
        type: 'REGISTRATION',
        payload:register
    }
}
export const loginActionCreator=(login)=>{
    return{
        type:'LOGIN',
        payload:login
    }
}

