import React from "react";
import _isEqual from "lodash/isEqual";

class ArchievedTasks extends React.Component{
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

   console.log('Archieved Tasks');
    return(
    <>

    {/*Displays the Completed Tasks*/}

    <h1>Archieved Tasks</h1>
    {
        this.props.props1.map((item)=>(
            <div key={item.id}>
                <h3>{item.work} at {item.time}</h3>
                <button onClick={()=>this.props.props2(item.id)}>Restore</button>
            </div>
        ))
    }
    </>
    )
}
}

export default ArchievedTasks