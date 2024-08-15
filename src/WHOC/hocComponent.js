import React from 'react';

const hocComponent=(InputComponent)=>{
    return class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                result:[],
                productsList:[],
                search:""
            }
        }
    
    static getDerivedStateFromProps(props,state){
        return {productsList:props.data}
    }

    userInput=(e)=>{
       e.preventDefault();
       this.setState({search: e.target.value})
    }

    userSubmit=(e)=>{
       e.preventDefault();
       const resultArray = this.state.productsList.filter((item)=>item.pName===this.state.search)
       this.setState({result:resultArray});
    }
    
    render(){
        return(
            <>
            <InputComponent result={this.state.result} userInput={this.userInput} userSubmit={this.userSubmit}></InputComponent>
            </>
        )
    }
}

}

export default hocComponent