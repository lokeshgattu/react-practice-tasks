import React from 'react';

class LoginPage extends React.Component{

    constructor(props){
        super(props)
        this.state={
            isLogged: false,
            name: 'lokesh'
        }
    }
    
    toggleUser=()=>{
        this.setState({isLogged: !(this.state.isLogged)})
    }

    render(){
        console.log('Rendered');
        return(
          <>
            {
              this.state.isLogged?
            <>
             <h1>Welcome back {this.state.name}</h1>
             <button onClick={this.toggleUser}>LogOut</button>
             </>:<>
             <h1>Please Sign In {this.state.name}</h1>
             <button onClick={this.toggleUser}>LogIn</button>
             </>
            }
         </>
        )
    }
}

export default LoginPage;