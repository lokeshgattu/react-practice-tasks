import React from "react";
class DisplayDetails extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username,id,email,contactno,role} = this.props.userdata;
        return(
        <>
        <h1>Name : {username}</h1>
        <h1>email: {email}</h1>
        <h1>Contact No: {contactno}</h1>
        <h1>ID Number : {id}</h1>
        <h1>Role: {role}</h1>
        </>
        )
    }
}   
export default DisplayDetails;