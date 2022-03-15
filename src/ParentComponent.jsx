import React,{useState} from "react";
import ChildComponent from './ChildComponent'
import ChildComponentOne from "./ChildComponentOne";
import ChildComponentTwo from "./ChildComponentTwo";
import LogButton from "./LogButton";
import SampleComponent from "./SampleComponent";
import stil from './style.module.css'


// const Title=styled.h1`
// display: inline-block;
// border-radius: 3px;
// padding: 0.5rem 0;
// margin: 0.5rem 1rem;
// width: 11rem;
// background: transparent;
// color: white;
// border: 2px solid white;
// `
class ParentComponent extends React.Component{
    state={
        name:"Maxzuna"
    }
    setName(name){
        this.setState({name:name})
    }
    handleChange(e){
        this.setState({name:e.target.value})
    }
    handleSubmit(event){
        console.log(this.state.name)
        event.preventDefault();
        
    }
    switchState=()=>{
            const {number}=this.state
            this.setState({
                number:number===0?1:0
            })
    }
    render(){


        
        // if(this.state.name===""){
        //     this.setState({name:'Asila'})
        // }
        const {number}=this.state
        let component=number?<ChildComponentOne/>:<ChildComponentTwo/>
        return (
            <div className={stil.wrap}>
                <h1>Searching System of Manager Team Leader</h1>
            {component}
            <button onClick={this.switchState}>Switch</button>
            <SampleComponent/>
            <ChildComponent 
   
                   name={this.state.name}
                   setName={this.setName.bind(this)}
                   />

                   <LogButton/>
            <input 
            type="text"
            name={this.state.name}
            // onChange={(event)=>this.setState({name:event.target.value})}
            onChange={this.handleChange.bind(this)} //this is useState
            value={this.state.name}
            />

            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input 
                    type="text"
                    value={this.state.value}
                    onChange={event=>this.setState({name:event.target.value})}
                    />
                    <input type="text" value="Submit" />
                </label>
            </form>
            
            </div>
        )



        // Multiple props this is
        // <ChildComponent 
        // name='Aziz'
        // age={35}
        // isMale={true}
        // hobbies={['read books','drink coffee ']}
        // occupation="Software Engineer"
        // />

    }
}

export default ParentComponent