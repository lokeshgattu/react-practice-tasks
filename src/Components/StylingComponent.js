import {Component} from 'react';

class StylingComponent extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        
        return(
        <div>
            <h1 style={{color:"red"}}>Demo</h1> {/* One curly is because it is a css and other one is because for 'style' attribute can be given like that */}
        </div>
        )
    }
}

export default StylingComponent