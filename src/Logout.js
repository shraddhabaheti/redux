import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

 export function Logout(){
     const navigate=useNavigate()
     useEffect(()=>{
         if(!localStorage.getItem('token')){
             //navigate('/login')
         }
        
     },[])
    return(
        <div>
         <p className="label3">Welcome To Home page function Component!</p>
            <button className="btn" onClick={()=>{
                localStorage.removeItem('token')
                navigate('/login')
                }}>Logout</button>
        
        </div>
    )
}