import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
export class form extends Component {
    constructor(){
super()
this.state={
   
}

    
}
    handelClick=(e)=>{
        console.log(e.target.value)
        this.props.handelForm(e.target.value)

    }
    render() {
        return (
            <Form.Group className="mb-3">
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select   id="option" onChange={this.handelClick}>
                <option value={0} selected>--------</option>
                <option value={1}>1hornd</option>
                <option value={2}>2 hornd</option>
                <option value={3}> 3 hornd</option>
              <option value={100}>100 hornd</option>
            </Form.Select>
          </Form.Group>
        )
    }
}

export default form