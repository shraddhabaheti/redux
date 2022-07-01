import { REGISTRATION } from "../constant/constant"

const initalState={
    registerData:{

    }
}
export const registerReducer=(state=initalState, action)=>{
    switch(action.type){
        case REGISTRATION:
            return{
                ...state,
                registerData:action.payload
            }
            
    }
return state

}