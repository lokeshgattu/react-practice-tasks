// import React from "react";

// class UpdateName extends React.Component{
//     constructor(props){
//         super(props)
//         this.fname="peter"
//     }
//     changeName=()=>{
//         this.fname="john"
//         console.log("inside func",this.fname)
//     }
//     render(){
        
//         return(
//             <>
//             <h1>Demo</h1>
//             <h2>Hello {this.fname}</h2>
//             <button onClick={this.changeName}>change</button>
//             </>
//         )
//     }
// }

// export default UpdateName

import React from 'react';

class UpdateName extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name:"lokesh",
            place: "bglr"
        }
    }

    changeDetails=()=>{
        console.log('Name is changed');
        this.setState({name:'gattu', place:'mpl'})
    }

    render(){
        console.log('rendered');
        return(
          <>
          <h1>Changing the name</h1>
          <h2>Actual name : Welcome {this.state.name}</h2>
          <h2>Actual Place: My place is {this.state.place} </h2>
          <button onClick={this.changeDetails}>Change</button>
          </>
        )
    }
}

export default UpdateName;

