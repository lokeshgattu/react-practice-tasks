import React from "react";
import _isEqual from "lodash/isEqual";

class CompletedTasks extends React.Component{
    constructor(props){
        super(props)
    }
    shouldComponentUpdate(nextProps,nextState){
        
        {console.log(this.props.props1)}

        if(_isEqual(nextProps.props1,this.props.props1)){
            return false
        }
        else{
            return true
        }
    }

render(){
   
   console.log('completed Tasks');
    return(
    <>

    {/*Displays the Completed Tasks*/}

    <h1>Completed Tasks</h1>
    {
        this.props.props1.map((item)=>(
            <div key={item.id}>
                <h3>{item.work} at {item.time}</h3>
                <button onClick={()=>this.props.props2(item.id)}>UnDo</button>
                <button onClick={()=>this.props.props3(item.id)}>Delete</button>
                <button onClick={()=>this.props.props4(item.id)}>Remove Permanently</button>
            </div>
        ))
    }
    </>
    )
}
}

export default CompletedTasks