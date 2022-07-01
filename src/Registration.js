import React, { useState } from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { registerMiddleware } from './redux/middleware/registerMiddleware'
import { useNavigate } from 'react-router-dom';

export default function Registration() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [state, setState] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        setState({
            ...state,
            [name]: value
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch(registerMiddleware(state))
        navigate('/login')
    }
    console.log(state)
    return (
        <div>
            <form>
                <h1 className='h1'>Registration Form</h1>
                <label className='label1'>userName</label>
                <input type="text" name="userName" placeholder='userName' className='input1' onChange={handleChange} /><br />
              
                <label className='label1'>email</label>
                <input type="email" name="email" placeholder='email' className='input1' onChange={handleChange} /><br />
            
                <label className='label1' >Password</label>
                <input type="password" name="password" placeholder='password' className='input1' onChange={handleChange} />

                <br />
                
                <label className='label1'>confirmPassword</label>
                <input type="password" name="confirmPassword" placeholder='confirmPassword' className='input1' onChange={handleChange} />
                <br />
               
                <button onClick={submit} className="btn">Submit</button>
            </form>
        </div>
    )
}
