import React from 'react'
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import LoginForm from '../Form/loginForm';

const LoginContents = (props) => {
  return (
    <div>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Welcome Back</h4>
        <LoginForm changeModal={props.changeModal} />
      </Modal.Body>
      <Modal.Footer >
      </Modal.Footer>
    </div>
  )
}

LoginContents.propTypes = {
  changeModal: PropTypes.func
}

export default LoginContents
