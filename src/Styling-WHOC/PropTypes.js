import React from "react";
import PropTypes from 'prop-types'
import hocStyling from "./hocStyling";

class PlainComponent extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const [fname,tech]=this.props;
        return(
            <>
            <h1>Hello, I'm {this.props.fname}</h1>
            <h2>My tech is {this.props.tech}</h2>
            </>
            
        )
    }
}

PlainComponent.PropTypes={
    fname:PropTypes.string,
    tech:PropTypes.array
}

/**
 * PropTypes.string
 * PropTypes.array
 * PropTypes.number
 * PropTypes.bool
 * PropTypes.func
 */

// export default hocStyling(PlainComponent);

