import React from "react";
import hocStyling from "./hocStyling";

class PlainComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {fname,tech}=this.props
        return(
            <h1>Hello, {fname},{tech} I'm an Input Plain Component</h1>
        )
    }
}

export default hocStyling(PlainComponent);