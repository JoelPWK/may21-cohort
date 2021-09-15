import React from "react";

class SplashPage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Welcome to StopStopGo!</h1>
                <p>Through the input of users like you, 
                    this service is always improving and 
                    helping people reach their destination 
                    without any unnecessary hassle.</p><br/>
                <p>PLease click below to register and 
                    enjoy our full services.</p><br/>
                <button onClick={() => {return false} }>Register</button><br/>
                <p>If you arealready a member, you may log in below:</p><br/>
                <button onClick={() => {return false} }>Log In</button><br/>
            </div>
        )
    }
}
export default SplashPage;