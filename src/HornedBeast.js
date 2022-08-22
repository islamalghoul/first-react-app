
import React,{Component} from "react";

class HornedBeast extends Component         {
    render(){
        return(
            <div>
                <h2>animals</h2>
                <img src= {this.props.imgUrl} alt={this.props.titel} title={this.props.titel}></img>
                <p>{this.props.description}</p>
            </div>
        );
    
    
            
    
            
    }
    
    }
    export default HornedBeast;