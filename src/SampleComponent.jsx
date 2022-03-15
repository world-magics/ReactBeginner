import React from "react";


class SampleComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        }

    }
    state={
        number:0
    }
//     componentDidMount(){
//         this.fetchData().then(response=>{
//             this.setState({
//                 data:response.data
//             })
//         })

//         fetchData=()=>{
// // fetch data this stat
//         }
//     }

    incrementState=()=>{
        const {number}=this.state;
        this.setState({
            number:number+1
        })
    }
    decrementState=()=>{
        const {number}=this.state;
        this.setState({
            number:number-1
        })
    }
    componentDidMount(){
        const {number}=this.state;
        console.log(`Component DidMount ${number}`)
    }
    componentDidUpdate(){
        const {number}=this.state
        console.log(`Component DidUpdate ${number}`)
    }
    render(){

        const {name,role}=this.state

        return(
            <>
            <h1>React Reserve App {this.state.number}</h1>
            <button onClick={this.decrementState}>Decrement</button>
            <button onClick={this.incrementState}>Increment</button>
            <div>This is Projects is {this.state.number} and I'm  a {role}</div>
           
            </>
        )
    }
}
// ReactDOM.render(
//     <sampleComponent/>,
//     document.getElementById('root')
// )

export default SampleComponent