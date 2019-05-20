import React from 'react'
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import RegisterForm from '../Form/registerForm';

const RegisterContents = (props) => {
  return (
    <>
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Welcome
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>Welcome</h4>
        <RegisterForm changeModal={props.changeModal}/>
      </Modal.Body>
      <Modal.Footer>
        {/* Already have an account? <a href='#' onClick={props.changeModal}>{' '}Login</a> */}
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </>
  )
}

RegisterContents.propTypes = {
  changeModal: PropTypes.func
}

export default RegisterContents
