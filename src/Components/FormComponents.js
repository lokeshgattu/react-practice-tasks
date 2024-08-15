import React from "react";

class FormComponents extends React.Component{
    constructor(props){
        super(props)
        this.state={
        uname:"",
        pwd:""
        }
    }

    handleUname=(e)=>{
        this.setState({uname: e.target.value})
    }

    handlePwd=(e)=>{
        this.setState({pwd: e.target.value})
    }

    handleLogin=()=>{
        console.log(this.state.uname,this.state.pwd)
    }

render(){
   
   console.log('Form Components');
    return(
    <>
    <h1>Login Form</h1>
    Username: <input type='text' onChange={(e)=>this.handleUname(e)}></input>
    Password: <input type='text' onChange={(e)=>this.handlePwd(e)}></input>
    <button onClick={()=>this.handleLogin()}>Login</button>
    </>
    )
}
}

export default FormComponents