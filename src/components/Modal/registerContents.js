import React from 'react'
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import RegisterForm from '../Form/registerForm';

const RegisterContents = (props) => {
  return (
    <>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Welcome</h4>
        <RegisterForm changeModal={props.changeModal}/>
      </Modal.Body>
      <Modal.Footer >
      </Modal.Footer>
    </>
  )
}

RegisterContents.propTypes = {
  changeModal: PropTypes.func
}

export default RegisterContents
