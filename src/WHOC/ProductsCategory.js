import {Component} from 'react';
import "./index.css";
import hocComponent from '../WHOC/hocComponent';

class ProductsCategory extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const{result,userInput,userSubmit}=this.props;
        return(
        <div className='container'>
        <h1 className='heading'>Products Category</h1>
        <form className='formClass'>
             <input type='search' placeholder='Enter any brand name' onChange={(e)=>userInput(e)}/>
             <button onClick={(e)=>userSubmit(e)}>Search</button>
        </form>
        <div className='result'>
            {
                  result.map((item)=>(
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

export default hocComponent(ProductsCategory)