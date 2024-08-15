import React from "react";
class DashBoard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username,email,contactno,role} = this.props.userdata;
        return(
        <>
        <h1>Name : {username}</h1>
        <h1>email: {email}</h1>
        <h1>Contact No: {contactno}</h1>
        <h1>Role: {role}</h1>
        <button onClick={this.props.toggleFunc}>Logout</button>
        </>
        )
    }
}   
export default DashBoard;