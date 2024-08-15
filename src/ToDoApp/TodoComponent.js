import React from "react";
import CompletedTasks from "./CompletedTasks";
import PendingTasks from "./PendingTasks";
import ArchievedTasks from "./ArchievedTasks";

class ToDoComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            count:0,
            work:"",
            time:""
        }
    }

    handleWork=(e)=>{
        this.setState({work: e.target.value})
    }

    handleTime=(e)=>{
        this.setState({time: e.target.value})
    }
   
// Update the state when receiving new props

// static getDerivedStateFromProps(props,state){
//     return {todos:props.data}
// }  //commented the DSP method it because it might bring the old values from the parent again

getCompletedItems=()=>{
    const completedItems = this.state.todos.filter((item)=>item.status===true&&item.active===true);
    return completedItems;
}

getPendingItems=()=>{
    const pendingItems = this.state.todos.filter((item)=>item.status===false);
    return pendingItems;
}

changeCompletionStatus=(todoId)=>{
    const temp = this.state.todos;
    const obj = temp.find((item)=>item.id===todoId)
    obj.status=!obj.status;
    console.log('after update',temp)
    this.setState({todos: temp})
}

// getDeletedItems=()=>{
//     const deletedItems = this.state.todos.filter((item)=>item.active===true);
//     return deletedItems;
// }

changeActiveStatus=(todoId)=>{
    const temp = this.state.todos;
    const obj = temp.find((item)=>item.id===todoId)
    obj.active=!obj.active;
    console.log('after update',temp)
    this.setState({todos: temp})
}

getArchievedItems=()=>{
    const archievedItems = this.state.todos.filter((item)=>item.active===false);
    return archievedItems;
}

changeRestoreditems=(todoId)=>{
    const temp = this.state.todos;
    const obj = temp.find((item)=>item.id===todoId)
    obj.active=!obj.active;
    console.log('after update',temp)
    this.setState({todos: temp})
}

addToDo=(len)=>{
    // let len = this.state.todos.length;
    let counter = len+1; //if length is 0, then counter becomes 1 and id is 1 eventually and follows upon addition of objects.
    console.log("Counter:",counter);
    const newItem={ 
       id:counter,
       work:this.state.work,
       time:this.state.time,
       status:false,
       active:true
    }
    //this.state.todos.push(newItem)-->wrong
    const temp = [...this.state.todos,newItem];
    this.setState({todos:temp})
}

//Deleting the Data(Object) from an Array Permanently
completeDelete=(todoId)=>{
const temp = this.state.todos;
const index = temp.findIndex((item)=>item.id===todoId)
const splicedArray = temp.splice(index,1);
console.log("splicedArray:",splicedArray);
console.log("temp:",temp);
this.setState({todos: temp})
}

render(){

    {console.log('Parent Component')}
    
    //Displays all the todo lists
    return(
    <>
    <h1>ToDo List</h1>
    Work: <input type='text' onChange={(e)=>this.handleWork(e)}></input>
    Time: <input type='text' onChange={(e)=>this.handleTime(e)}></input>
    <button onClick={()=>this.addToDo(this.state.todos.length)}>Add-ToDo</button>

    <CompletedTasks props1={this.getCompletedItems()} props2={this.changeCompletionStatus} props3={this.changeActiveStatus} props4={this.completeDelete}></CompletedTasks>

    <PendingTasks props1={this.getPendingItems()} props2={this.changeCompletionStatus} props3={this.changeActiveStatus} props4={this.completeDelete}></PendingTasks>

    <ArchievedTasks props1={this.getArchievedItems()} props2={this.changeRestoreditems}></ArchievedTasks>
    {/* <button onClick={()=>{this.changeCompletionStatus(1)}}>Test</button> */}
    </>
    )
}
}

export default ToDoComponent