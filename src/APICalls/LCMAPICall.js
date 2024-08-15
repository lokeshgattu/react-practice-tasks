import React from 'react';
import axios from 'axios';

class LCMAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[]
        }
    }
    
    // In place of HandleClick, we are writing the LCM ComponentDidMount() method.

    componentDidMount(){
        // CASE-1
        // fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({results:res})).catch((error)=>console.log(error)) 
        
        // CASE-2
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>this.setState({results:res.data})).catch((error)=>console.log(error))
    }

    render(){
        return(
         <>
          {/* <button onClick={(e)=>{this.handleClick(e)}}>Call API</button> */}
         {
            this.state.results.map((item)=>(
                <div key={item.id}>
                <h1>{item.name}</h1>
                <h2>{item.username}</h2> 
                <h2>{item.email}</h2>
                <h2>{item.phone}</h2>               
                </div>

            ))
         }
         </>
        )
    }
}

export default LCMAPICall