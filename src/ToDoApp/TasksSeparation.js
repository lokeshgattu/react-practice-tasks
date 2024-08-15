import React from "react";

class TasksSeparation extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: []
        }
    }

// Update the state when receiving new props
static getDerivedStateFromProps(props,state){
    return {todos:props.data}
}

render(){

    {console.log(this.state.todos)}

    const completedTasks = this.state.todos.filter(item=>item.status)
    const pendingTasks = this.state.todos.filter(item=>!item.status)

    return(
    <>

    {/*Displays the Completed Tasks*/}

    <h1>Completed Tasks</h1>
    {
        completedTasks.map((item)=>(
            <div key={item.id}>
                <h3>{item.work} at {item.time}</h3>
            </div>
        ))
    }

    {/* Displays the Pending Tasks*/}
    
    <h1>Pending Tasks</h1>
    {
        pendingTasks.map((item)=>(
            <div key={item.id}>
                <h3>{item.work} at {item.time}</h3>
            </div>
        )) 
    }
    </>
    )
}
}

export default TasksSeparation