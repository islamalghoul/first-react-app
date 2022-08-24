import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast"
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
         showCard:false,
         dataInfo :{}

    }
   
      
    

}
sFunction=(id)=>{
  const checkCard=data.find(beast=>beast._id===id)
 
  this.setState({
    dataInfo:checkCard,
showCard:true

  })

console.log(this.state.dataInfo)
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
        <Main Data={data} handel={this.sFunction}/>       
        <Footer />
        
        <SelectedBeast handelShow={this.state.showCard}
        handelClosing={this.closeFunction} dataInfo={this.state.dataInfo}/>
      </div>


    )
  }

}

export default App;