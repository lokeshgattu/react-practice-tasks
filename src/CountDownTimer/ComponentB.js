// import React from 'react';

// class ComponentB extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: props.startNumber
//     };
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (nextProps.startNumber !== prevState.startNumber) {
//       return {
//         count: nextProps.startNumber,
//         startNumber: nextProps.startNumber
//       };
//     }
//     return null;
//   }

//   componentDidMount() {
//     this.startTimer();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.startNumber !== this.props.startNumber) {
//       clearInterval(this.timerID);
//       this.startTimer();
//     }
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   startTimer = () => {
//     this.timerID = setInterval(() => {
//       this.setState((prevState) => {
//         if (prevState.count > 0) {
//           return { count: prevState.count - 1 };
//         } else {
//           clearInterval(this.timerID);
//           return null;
//         }
//       });
//     }, 1000);
//   };

//   render() {
//     return (
//       <div>
//         <h2>{this.state.count}</h2>
//       </div>
//     );
//   }
// }

// export default ComponentB;

import React from 'react';
import ComponentA from './ComponentA';
function ComponentB() {
  return (
    <>
    <ComponentA value="5"></ComponentA>
    </>
  )
}

export default ComponentB;