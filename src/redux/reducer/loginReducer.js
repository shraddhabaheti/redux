import { LOGIN } from "../constant/constant";
const initalState={
    loginData:{

    }
}
export const loginReducer=(state=initalState,action)=>{
    switch(action.type){
        case LOGIN:
           return{
               ...state,
               loginData:action.payload
           }
    }
    return state

}