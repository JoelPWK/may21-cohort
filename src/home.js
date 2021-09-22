import React from "react";
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
            <p>HOme Page or something amirite</p>
        </div>
        )
    }
}

export default Home;