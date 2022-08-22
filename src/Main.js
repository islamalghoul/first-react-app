import React,{Component} from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
class Main extends Component {
    render(){
        return(
<div> {data.map((i)=>{
   
   return <div><HornedBeast id={i._id} imgUrl={i.image_url}title={i.title} description={i.description} keyword={i.keyword} horns={i.horns} /></div>
})}
            
            
           
          
            </div>   
        )
    }
    
    }
    export default Main;