import React from "react";
class SignIn extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <h1>Please Login to Display Details</h1>
        <button onClick={this.props.toggleFunc}>Login</button>
        </>
        )
    }
}   
export default SignIn;