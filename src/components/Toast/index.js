import React from 'react';
// import Toast from 'react-bootstrap/Toast';
import {connect} from 'react-redux';
// import {} from 'redux/application/actions';


class ToastMessage extends React.Component {


  render() {
    const { application } = this.props;
    const show = application.toastOpen;
    const message = application.toastOpen && application.toastMessage;
    return (<div/>
      // <Toast  show={show} delay={3000} autohide>
      //   <Toast.Header>
      //     <img
      //       src="holder.js/20x20?text=%20"
      //       className="rounded mr-2"
      //       alt=""
      //     />
      //     <strong className="mr-auto">Bootstrap</strong>
      //     <small>11 mins ago</small>
      //   </Toast.Header>
      //   <Toast.Body>
      //     Woohoo, you're reading this text in a Toast!
      //   </Toast.Body>
      // </Toast>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}

export default connect(mapStateToProps, null)(ToastMessage);
