
import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
class HornedBeast extends Component         {

        constructor(){
super()
this.state={
numberOfVotes :"❤️"
      
}
 

}
 clickHandler = () =>{
    this.setState({
        numberOfVotes:this.state.numberOfVotes+"❤️"
    })

}

    render(){
        return(<div className="contaner">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.imgUrl} alt={this.props.titel} title={this.props.titel} onClick={this.clickHandler} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        <p>{this.props.keyword}</p>
        <p>id:{ this.props.id} </p>
        <p>{this.props.description}</p>
        <p>{this.props.horns}</p>
        <p>vote for your favorite beast {this.state.numberOfVotes}</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card></div>
            // <div>
            //     <h2>{this.props.title}</h2>
            //     <img src= {this.props.imgUrl} alt={this.props.titel} title={this.props.titel} onClick={this.clickHandler}></img>
            //     <p>{this.props.keyword}</p>
            //     <p>id: { this.props.id} </p>
            //     <p>{this.props.description}</p>
            //     <p>{this.props.horns}</p>
            //     

               
                
              
            // </div>
        );
    
    
            
    
            
    }
}
    
    
    export default HornedBeast;