import { render } from "@testing-library/react";
import { Component } from "react";

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""

        }
    }
    handleChange =(e)=>{
        let name=e.target.name
        let value=e.target.value
        this.setState({
            ...this.state,
            [name]:value
        })
    }
    submit=(e)=>{
        e.preventDefault()

    }
    render() {
        return (
            <div>
            <form>
                <h1 className='h1'>Registration Form</h1>
                <label className='label1'>userName</label>
                <input type="text" name="userName" placeholder='userName' className='input1' onChange={this.handleChange} /><br />
              
                <label className='label1'>email</label>
                <input type="email" name="email" placeholder='email' className='input1' onChange={this.handleChange} /><br />
            
                <label className='label1' >Password</label>
                <input type="password" name="password" placeholder='password' className='input1' onChange={this.handleChange} />

                <br />
                
                <label className='label1'>confirmPassword</label>
                <input type="password" name="confirmPassword" placeholder='confirmPassword' className='input1' onChange={this.handleChange} />
                <br />
               
                <button onClick={this.submit} className="btn">Submit</button>
            </form>
        </div>
   
        )
    }


}
export default Registration




