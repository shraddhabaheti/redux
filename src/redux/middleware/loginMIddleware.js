import axios from "axios"
import { loginActionCreator } from "../actioncreator/actionCreator"
export const loginMiddleware=(data)=>{
    return async(dispatch)=>{
        try {
            let res= await axios.post('http://192.168.1.11:8000/api/user/login',data)
             console.log(res)
            await dispatch(loginActionCreator(res))
            JSON.stringify(localStorage.setItem("token",res.data.data.token))
        
           // alert(res.data.message)
            
            
        } catch (error) {
            console.log(error)
            
        }

    }

}