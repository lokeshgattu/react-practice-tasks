import React from "react";
class CloseDetails extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <>
        <h1>Click the below button to Display the Details</h1>
        <button onClick={this.props.toggleFunc}>Display Details</button>
        </>
        )
    }
}   
export default CloseDetails;