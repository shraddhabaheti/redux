import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import './App.css';
import { loginMiddleware } from "./redux/middleware/loginMIddleware";

export function Login(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [state,setState]=useState({
        userName:'',
        password:''
    })
    
    const handleChanges=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setState({
            ...state,
            [name]:value
        })

    }
    const submits=(e)=>{
        e.preventDefault()
        dispatch(loginMiddleware(state))
        navigate('/logout')
          
    }
    return(
        <div>
            <div>
                <form>
                    <h1 className="h1">Login Form</h1>
                    <label className="label1">userName</label>
                    <input type="text" className="input1" placeholder="userName" name="userName" onChange={handleChanges}></input>
                    <label className="label1">password</label>
                    <input type="password" className="input1" placeholder="password" name="password" onChange={handleChanges}></input>
                    <button onClick={submits} className="btn">Login</button>
                </form>
            </div>
        </div>
    )
}