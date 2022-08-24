import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast"
import 'bootstrap/dist/css/bootstrap.min.css';
import  Form from "./form";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
         showCard:false,
         dataInfo :{},
        dataOfHornd:{},
        dataTobeRender : data
    }
}
handelForm=(hornd)=>{
  let selectd=data.filter(i=>i.horns == hornd)
  let toBeUsed = (hornd == 0) ? data : selectd
  this.setState({
    dataOfHornd : selectd,
    dataTobeRender : toBeUsed
  })


}
sFunction=(id)=>{
  const checkCard=data.find(beast=>beast._id===id)
 
  this.setState({
    dataInfo:checkCard,
showCard:true

  })

}
closeFunction=()=>{
  this.setState({

    showCard:false
      })
}
  render() {
    return (

      <div>
        <Header />
        <Form  handelForm={this.handelForm}/>
        <Main data={this.state.dataTobeRender} handel={this.sFunction}
        />       
        <SelectedBeast handelShow={this.state.showCard}
        handelClosing={this.closeFunction} dataInfo={this.state.dataInfo}
       />
        <Footer />
      </div>


    )
  }

}

export default App;