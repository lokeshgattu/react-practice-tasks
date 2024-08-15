import React from 'react';

class CounterProgram extends React.Component{

    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }
    
    AddOne=()=>{
        console.log('Add Function');
        this.setState({count : this.state.count+1})
    }

    SubtractOne=()=>{
        console.log('Subtract Function');
        this.setState({count : this.state.count-1})
    }

    render(){
        console.log('counter is rendering');
        return(
            <>
             <h1>Counter Program</h1>
             <h2>Count Value : {this.state.count}</h2>
             <button onClick={this.AddOne}>Add</button>
             <button onClick={this.SubtractOne}>Subtract</button>
            </>
        )
    }
}

export default CounterProgram;