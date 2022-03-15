import React from "react";

class ChildComponentTwo extends React.Component{
    componentWillUnmount(){
        console.log("Component Two will be removed ")
    }
    render(){
        return (
            <>
                <h4 style={{color:'blue',backgroundColor:'red'}}>Component Two</h4>
            </>
        )
    }
}

export default ChildComponentTwo