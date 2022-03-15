import React from "react"
import UserComponent from './UserComponent'
import ProfileComponent from './ProfileComponent'
import FeedComponent from './FeedComponent'
import ParentComponent from "./ParentComponent"
class MainComponent extends React.Component{
    render(){
       return  <>
      <UserComponent/>
      <ProfileComponent/>
      <FeedComponent/>
      <ParentComponent/>
        </>
    }
}
export default MainComponent

