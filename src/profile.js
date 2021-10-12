import React from "react";
class Profile extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        isHidden: false
    }
  }
    
  render(){
    return(            
    <div> 
        <p>Profile Page</p>
    </div>
    )
}
}

export default Profile;