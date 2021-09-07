import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBInput, MDBModalHeader } from 'mdbreact'

class Delete extends Component {
    state = {
        delete_modal: false
    }
    
    delete_click = () => {
        this.setState({
            delete_modal: !this.state.modal
        })
    }
    render() {
        return (
            <MDBContainer>
                <MDBIcon far icon="trash-alt" />
                <MDBModal>
                    <MDBModalHeader>
                        Are you sure?
                    </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput label='Password' style={{width: '80%'}} />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="primary" onClick={this.click} size='sm'>Cancel</MDBBtn>
                        <MDBBtn color="red" >Submit</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        )
    }
}

export default Delete