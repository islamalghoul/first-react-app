import React,{Component} from "react";
import HornedBeast from "./HornedBeast";
import  tiger1 from "./assets/tiger1.jpg";
import  tiger2  from "./assets/tiger2.jpg"
class Main extends Component {
    render(){
        return(
<div>
            
            <HornedBeast imgUrl={tiger1} titel="tiger 1" description="this is the first tiger"/>
            <HornedBeast imgUrl={tiger2} titel="tiger 2" description="this is the second tiger"/>
          
            </div>
        )
    }
    
    }
    export default Main;