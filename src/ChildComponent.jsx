import React from "react";

class ChildComponent extends React.Component{
    render(){

        return (
            <>
            <h3>This My name {this.props.name}</h3>
            
            <button 
            onClick={()=>this.props.setName("Mark")}>
                    Change name
            </button>
            </>
        )
        
    }
}

export default ChildComponent