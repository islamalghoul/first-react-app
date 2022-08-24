import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {
    render() {
        return ( 
            <Modal show={this.props.handelShow} onHide={()=>{ this.props.handelClosing()}} >
                <Modal.Header  >
                    
                    <Modal.Title>{this.props.dataInfo.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{width:"400px"} } src={this.props.dataInfo.image_url} alt="img"></img>
                    <p>{this.props.dataInfo.description}</p>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>{ this.props.handelClosing()}} >
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            
        )
    }

}
export default SelectedBeast;