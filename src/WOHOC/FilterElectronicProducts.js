import {Component} from 'react';
import "./index.css";

class FilterElectronicProducts extends Component{
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
        console.log(this.state.productsList);
        return(
        <div className='container'>
        <h1 className='heading'>Electronics Category</h1>
        <form className='formClass'>
             <input type='search' placeholder='Enter any brand name' onChange={(e)=>{this.userInput(e)}}/>
             <button onClick={(e)=>{this.userSubmit(e)}}>Search</button>
        </form>
        <div className='result'>
            {
                this.state.result.map((item)=>(
                    <div key={item.id}>
                    <h1>Brand Name : {item.pName}</h1>
                    <h2>Product Price: {item.price}</h2>
                    <h2>Manufacturer: {item.manufacturer}</h2>
                    <h2>Expected Delivery by {item.expectedDelivery}</h2>
                    </div>
                ))
            }
        </div>
        </div>
        )
    }
}

export default FilterElectronicProducts