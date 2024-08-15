import React from 'react';
import axios from 'axios';

class ImageSearchAPI extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:"",
            results:[]
        }
    }

    handleChange=(e)=>{
        e.preventDefault();
        this.setState({search:e.target.value})
    }

    handleSearch=(e)=>{
        e.preventDefault();
        axios.get(`https://api.unsplash.com/search/photos?query=${this.state.search}&client_id=63ZXEp-R8xofm_qfCgGYQJrFr4Z24Jo_gx-rTfO5ZtA`).then((res)=>this.setState({results:res.data.results})).catch((error)=>console.log(error))
    }

    render(){
        return(
            <>
            <h1>Search Anything! Anytime!</h1>
            <form>
            <input type='text' placeholder='enter image name' onChange={(e)=>{this.handleChange(e)}}></input>
            <button onClick={(e)=>this.handleSearch(e)}>Search</button>
            </form>
            {
                this.state.results.map((item)=>(
                    <img src={item.urls.small} key={item.id}></img>
                ))
            }
            </>
        )
    }
}

export default ImageSearchAPI