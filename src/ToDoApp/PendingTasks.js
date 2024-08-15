import React from "react";
import _isEqual from "lodash/isEqual";

class PendingTasks extends React.Component{
    constructor(props){
        super(props)
    }

    shouldComponentUpdate(nextProps){
        
        if(_isEqual(nextProps.props1,this.props.props1)){
            return false
        }
        else{
            return true
        }
    }
render(){

   console.log('Pending Tasks');
    return(
    <>

    {/*Displays the Pending Tasks*/}

    <h1>Pending Tasks</h1>
    {
        this.props.props1.map((item)=>(
            <div key={item.id}>
                <h3>{item.work} at {item.time}</h3>
                <button onClick={()=>this.props.props2(item.id)}>Done</button>
                <button onClick={()=>this.props.props4(item.id)}>Remove Permanently</button>
            </div>
        ))
    }
    </>
    )
}
}

export default PendingTasks