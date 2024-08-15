import React from 'react';

const hocStyling = (InputComponent)=>{
    return class NewComponent extends React.Component{
        constructor(props){
            super(props)
        }

        render(){
            const globalStyle={color:"green",fontStyle:"italic",backgroundColor:"black"}
            return(
              <div style={globalStyle}>
                <InputComponent {...this.props}></InputComponent>
              </div>
            )
        }
    }
}

export default hocStyling