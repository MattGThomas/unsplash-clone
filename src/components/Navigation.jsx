import React, { Component } from "react";
import { MDBNavbar, MDBBtn, MDBInput, MDBNavItem, MDBNavbarNav } from "mdbreact";
import SaveModal from "./Modals/SaveModal";


class Navigation extends Component {
    
    render() {
        return (
            <MDBNavbar color='white'>
                <div className='d-flex'>
                    <div className='p-2'>
                        <MDBNavbarNav>
                            <MDBNavItem>
                                My Unsplash App
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </div>
                    <div className='p-2'>
                    <MDBInput label='search by name' icon='search'/>
                    </div>
                    {/* <MDBBtn>Add Photo</MDBBtn> */}
                    <div className='ml-auto'>
                        <SaveModal />
                    </div>
                </div>
            </MDBNavbar>
        );
    }
}

export default Navigation;