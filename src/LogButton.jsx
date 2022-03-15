import React from 'react'

class LogButton extends React.Component{
    handleClick(event){
        console.log("console render1")
        console.log(event)
    }

    render(){
        return <button
                onClick={this.handleClick}
                >
                Log Button
                </button>
    }
}
export default LogButton