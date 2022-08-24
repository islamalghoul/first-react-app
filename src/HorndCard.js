import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

class HorndCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfVotes: 0

        }


    }

   
    clickHandler = () => {
        this.setState(
            {
                numberOfVotes : this.state.numberOfVotes + 1
            }
        )
        console.log(this.props.title)
    }
    render()
    {

        return(
            <Col>
        <Card onClick={()=>{this.props.handel(this.props.id)}}  >
    <Card.Img  variant="top" src={this.props.img} onClick={this.clickHandler}/>
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        <p>{this.props.keyword}</p>
                        <p>id:{this.props.id} </p>
                        <p>{this.props.description}</p>
                        <p>{this.props.horns}</p>
                        <p>vote for your favorite beast {this.state.numberOfVotes}</p>
                    </Card.Text >
                </Card.Body>
            </Card>
            </Col>
        )
    }
}
 export default HorndCard;