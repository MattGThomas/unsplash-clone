import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter, MDBInput, MDBIcon } from 'mdbreact'

class SaveModal extends Component {
    state = {
        modal: false
    }
    click = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    render() {
        return (
            
            <MDBContainer>
                <MDBBtn onClick={this.click}>Add Photo</MDBBtn>
                <MDBModal isOpen={this.state.modal} >
                    <MDBInput label='Label' style={{width: '80%'}} />
                    <MDBInput label='Photo URL' style={{width: '80%'}} />
                    <MDBModalFooter>
                        <MDBBtn color="red" onClick={this.click} size='sm'>Cancel</MDBBtn>
                        <MDBBtn color="dark-green" size='lg' >Submit</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        )
    }
}

export default SaveModal