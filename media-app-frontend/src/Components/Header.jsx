import React from 'react';

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';


function Header() {
  return (
    <div><MDBNavbar light bgColor='primary' >
    <MDBContainer fluid>
      <MDBNavbarBrand href='/' className='text-primary fw-bolder fs-4 p-1  text-light mb-3'>
      <i class="fa-solid fa-cloud-arrow-up fa-beat-fade m-2 text-light h-5"></i>
       Media Player
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header