import React from "react";

class ChildComponentOne extends React.Component{

    componentWillUnmount(){
        console.log("Component One will be removed")
    }

    render(){
        return(
            <>
                <h4 style={{color:'red',textAlign:'center'}}>Component one</h4>
            </>
        )
    }
}

export default ChildComponentOne