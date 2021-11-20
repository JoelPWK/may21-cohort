import React from "react";
import Dashboard from "./dashboard.js";

class Home extends React.Component {
    constructor(props){
        super(props)
    this.state = {
        isHidden: false
    }
}

    render(){
        return(
        <div> 
            <Dashboard />
        </div>
        )
    }
}

export default Home;
