import React from "react";
import DashBoard from "../ChildComponents/DashBoard";
import SignIn from "../ChildComponents/SignIn";

class LoginPageWithChildComponents extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLogged:false,
           user:{
            username:"Lokesh Gattappagari",
            email:"loki@123",
            contactno: 947578473,
            role:"Engineer"
           }
        }
    }
    toggleUser=()=>{
       this.setState({isLogged:!(this.state.isLogged)})
    }
    render(){
        return(
            <>
                {
                    this.state.isLogged?
                    <>
                    <DashBoard userdata={this.state.user} toggleFunc={this.toggleUser}></DashBoard>
                    </>:<>
                    <SignIn toggleFunc={this.toggleUser}></SignIn>
                    </>
                }
            </>
        )
    }
}    
export default LoginPageWithChildComponents;