import React from "react";
import CloseDetails from "../ChildComponents/CloseDetails";
import DisplayDetails from "../ChildComponents/DisplayDetails";

class ArrayOfObjectsInsideStateObject extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isDisplayed:false,
           user: [
            {
            username:"Lokesh Gattappagari",
            id:"8dhd7hdg7",
            email:"loki@123",
            contactno: 947578473,
            role:"Engineer"
            },
            {
            username:"Hitesh Kumbakonam",
            id:"364vr64vt64",
            email:"hithu@123",
            contactno: 6483683683,
            role:"Developer"
            }           
           ]                     
        }
    }
    toggleUser=()=>{
       this.setState({isDisplayed:!(this.state.isDisplayed)})
    }
    render(){
        return(
            <>
                {
                    this.state.isDisplayed?
                    <>
                    {this.state.user.map((eachitem)=>(
                       <DisplayDetails userdata={eachitem} toggleFunc={this.toggleUser}></DisplayDetails>
                    ))}
                    <button onClick={this.toggleUser}>Close</button>
                    </>:<>
                    <CloseDetails toggleFunc={this.toggleUser}></CloseDetails>
                    </>
                }
            </>
        )
    }
}    
export default ArrayOfObjectsInsideStateObject;