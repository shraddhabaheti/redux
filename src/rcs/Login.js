import { Component } from "react";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:''
        }
    }
    handleChange=(e)=>{
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
   
 
    render(){
        return(
            <div>
                <form>
                    <label>userName</label>
                    <input type="text" name="userName" onChange={this.handleChange}/>
                     <label>password</label>
                     <input type="password" name="password" onChange={this.handleChange}/>
                     <button type="submit" onClick={this.submit}>submit</button>
                </form> 
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(this.props)
    return{

    }

}
// const mapDispatchToProps=()=>{

// }
export default connect(mapStateToProps,null)(Login);
