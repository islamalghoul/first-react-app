import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfVotes: "❤️"

        }


    }

   
    clickHandler = () => {
        this.setState(
            {
                numberOfVotes : this.state.numberOfVotes + "❤️"
            }
        )
        
    }
    


    render() {    

        return (
           <div>
             
<Row xs={1} md={3} className="g-4">

{this.props.Data.map((i) => {
  
    return (<Col>
        <Card onClick={this.props.handel}  >
    <Card.Img variant="top" src={i.image_url} onClick={this.clickHandler}/>
        <Card.Body>
        <Card.Title>{i.title}</Card.Title>
                    <Card.Text>
                        <p>{i.keyword}</p>
                        <p>id:{i.id} </p>
                        <p>{i.description}</p>
                        <p>{i.horns}</p>
                        <p>vote for your favorite beast {this.state.numberOfVotes}</p>
                    </Card.Text >
                </Card.Body>
            </Card>
            </Col>
              )
             
       
})}
 </Row>
              
 </div>

        );
    }

}
export default Main;





