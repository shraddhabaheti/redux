import axios from "axios"
import { registerActionCreator } from "../actioncreator/actionCreator"

export  const registerMiddleware=(data)=>{
    return async(dispatch) => {
        try {
            let res=await axios.post("http://192.168.1.11:8000/api/user/register",data)
            console.log(data)
            await dispatch(registerActionCreator(res))
            
        } catch (error) {
            console.log(error)
            
        }
    }
}
