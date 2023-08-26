
import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
  from 'mdb-react-ui-kit';

function App() {
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <div className="d-flex flex-row align-items-center mb-4">
              <h1 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</h1>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput label='Your Email' id='form2' type='email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput label='Password' id='form3' type='password' />
              </div>

              <div className='mb-4'>
              <p>
               <Link to="/Signup/">Don't have an account? click here</Link>
              </p>
              </div>

              <MDBBtn className='mb-4' size='lg'>Sign In</MDBBtn>

            </MDBCol>

            <MDBCol md='7' lg='5' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://propakistani.pk/wp-content/uploads/2022/06/COMSATS.jpg' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default App;