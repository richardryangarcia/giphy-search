import React from 'react'
import Modal from 'react-bootstrap/Modal';
import {SET_MODAL_TYPE} from '../../redux/application/actions';
import PropTypes from 'prop-types';

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
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        Already have an account? <a href='#' onClick={props.changeModal}>{' '}Login</a>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </>
  )
}

RegisterContents.propTypes = {
  changeModal: PropTypes.func
}

export default RegisterContents
