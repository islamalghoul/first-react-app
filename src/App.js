import React, { Component } from "react";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import data from "./data.json";
import SelectedBeast from "./SelectedBeast"



class App extends Component {
  
  constructor() {
    super()
    this.state = {
         showCard:""

    }
    

}
onClickHandler=()=>{
  alert("hi")

}

  render() {
 
    return (

      <div>
        <Header />
        <Main Data={data} handel={this.onClickHandler}/>       
        <Footer />
      </div>


    )
  }

}

export default App;