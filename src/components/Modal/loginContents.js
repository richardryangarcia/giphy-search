import React from 'react'
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import LoginForm from '../Form/loginForm';

const LoginContents = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Welcome Back
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        <h4>Welcome Back</h4>
        <LoginForm />
        <a href='#' onClick={props.changeModal}>Register</a>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </div>
  )
}

LoginContents.propTypes = {
  changeModal: PropTypes.func
}

export default LoginContents
