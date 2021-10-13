import React from "react";
import "./style.scss";

class SplashPage extends React.Component {
    constructor(props){
        super(props)

    this.state = {
        isHidden: true
    }
}
//   closeButton(){
//       return <button onClick={this.toggleHidden.bind(this)}>Hide/Show</button>
//   }

    handleChange = (event) => {
        this.props.closeSplash(false); //Define custom broadcast event closeSplash
    }

    render(){
        return(            
        <div className={"main-text"}>
            <h2>Welcome to StopStopGo!</h2>
            <p>Through the input of users like you, 
                this service is always improving and 
                helping people reach their destination 
                without any unnecessary hassle.</p>
            <p>Please click below to register and 
                enjoy our full services.</p>
            <button onClick={() => {return false} }>Register</button><br/>
            <p>If you already a member, you may log in below:</p>
            <button onClick={() => {return false} }>Log In</button>
            <button onClick={this.handleChange.bind(this)}>Hide/Show</button>
        </div>
        )
    }
}
  
  export default SplashPage;
