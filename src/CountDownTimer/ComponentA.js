// import React from 'react';
// import ComponentB from './ComponentB';

// class ComponentA extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startNumber: 100 // Change this to 200 or any other starting number if needed
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Countdown Timer</h1>
//         <ComponentB startNumber={this.state.startNumber}></ComponentB>
//       </div>
//     );
//   }
// }

// export default ComponentA;

import React from "react";

class ComponentA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            newvalue: null
        }
    }
    static getDerivedStateFromProps(props, state) {
        //console.log(props.value)
        return { count: Number(props.value) }
    }
    
    componentDidMount() {
        let counter = this.state.count
        
        setInterval(() => {
            counter = counter - 1
            console.log(this.state.newvalue)
            this.setState({ newvalue: counter })
            //console.log(typeof(this.state.count))
        }, 3000)
    }
    func(arg){
        if(arg>0){
            return arg
        }else{
            return 0
        }
    }
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <h1>{this.func(this.state.newvalue)}</h1>
                </div>
                
            </div>
        )
    }
}
export default ComponentA;
