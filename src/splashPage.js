import React from "react";
import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
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
                <div class="containerSplash">
                        <div class="container inner">
                            <div class="inner cover">
                                <h1 class="cover-heading">Stop Stop GO</h1>
                                <p class="p1">Through the input of users like you,
                                this service is always improving and
                                without any unnecessary hassle.</p>
                                <p class="p2">Click below to enter.</p>
                                <div className="text-center">
                                    <Button id="loginButton" type="submit" className="text-center mb-3" onClick={this.handleChange.bind(this)}>Continue</Button>
                            </div>
                        </div>
                    </div>
                </div>    
    )}}
  export default SplashPage;