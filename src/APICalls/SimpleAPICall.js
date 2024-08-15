import React from 'react';

class SimpleAPICall extends React.Component{
    constructor(props){
        super(props)
        this.state={
            results:[]
        }
    }
    
    handleClick=(e)=>{
        e.preventDefault()
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((res)=>this.setState({results:res})).catch((error)=>console.log(error))
    }

    render(){
        return(
         <>
         <button onClick={(e)=>{this.handleClick(e)}}>Call API</button>
         {
            this.state.results.map((item)=>(
                <>
                <h1>{item.name}</h1>
                <h2>{item.username}</h2> 
                <h2>{item.email}</h2>
                <h2>{item.phone}</h2>               
                </>

            ))
         }
         </>
        )
    }
}

export default SimpleAPICall