import React from "react";
class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props) 
        this.state={
            count:0,
            msg:""
        }
    }
      static getDerivedStateFromProps(props,state){
       console.log("before",props,state)
       // state.msg=props.msg
        return {msg:props.msg}
    }

    componentDidMount(){
        console.log("inside componentdidmount")
        setTimeout(()=>{
            this.setState({count:this.state.count+1})
        },3000)
    }

    shouldComponentUpdate(newProps,newState){
        console.log('inside a shouldComponentUpdate');
        if(this.state.count === newState.count)
        {
            return false;
        }
        else 
        {
            return true;
        }
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        return prevState;
    }

    componentDidUpdate(props,state){
        console.log('did update',state);
    }

    render(){
        {console.log("render")}
        return(
            <>
            <h1>{this.state.count}</h1>
            <h2>{this.state.msg}</h2>
            </>
        )
    }
}
export default LifeCycleMethods
