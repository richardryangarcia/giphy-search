import React from 'react'
import Modal from 'react-bootstrap/Modal';

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
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <a href='#' onClick={props.changeModal}>Register</a>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </div>
  )
}

export default LoginContents
