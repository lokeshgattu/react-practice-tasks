import React from 'react';

// class PureComponent extends React.Component{ //For Normal Components
class PureComponent extends React.PureComponent{ //For Pure Components 
    //Pure Components can be used inplace of ShouldComponentUpdate() Method for Implementation.
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    changeCount=()=>{
        this.setState({count:this.state.count})
    }
    
    render(){
        return(
            <>
            {console.log('render')}
            <h1>{this.state.count}</h1>
            <button onClick={this.changeCount}>Change</button>
            </>
        )
    }

}

export default PureComponent
