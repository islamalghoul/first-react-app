import React, { Component } from "react";

import HorndCard from "./HorndCard";
import Row from 'react-bootstrap/Row';
class Main extends Component {

  constructor(){
    super()
    this.state={
        
    }
  }



    render() {    

        return (
          
             
<Row xs={1} md={3} className="g-4">

{this.props.data.map((i) => {
  
    return (<HorndCard title={i.title} keyword={i.keyword} id={i._id} description={i.description} horns={i.horns} img={i.image_url} handel={this.props.handel} handelForm={this.props.handelForm}/>
      )
             
       
})}
 </Row>
              


        );
    }

}
export default Main;





