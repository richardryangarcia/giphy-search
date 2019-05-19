import React from 'react';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import {CLOSE_MODAL, SET_MODAL_TYPE} from '../../redux/application/actions';
import RegisterContents from './registerContents';
import LoginContents from './loginContents';

class ModalContainer extends React.Component  {
  closeModal = () => {
    const {dispatch} = this.props;
    dispatch({type:CLOSE_MODAL});
  }

  changeToRegisterContents = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch({
      type:SET_MODAL_TYPE,
      payload: {
        modalType: 'register'
      }
    })
  }

  changeToLoginContents = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    dispatch({
      type:SET_MODAL_TYPE,
      payload: {
        modalType: 'login'
      }
    })
  }

  modalContents = () => {
    const {modalType} = this.props.application;
    switch (modalType){
      case 'login':
        return <LoginContents changeModal={this.changeToRegisterContents}/>
      case 'register':
        return <RegisterContents changeModal={this.changeToLoginContents} />
      default:
        return null
    }
  }

  render () {
    const {modalOpen} = this.props.application;
    return (
      <Modal
        show={modalOpen}
        onHide={this.closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {this.modalContents()}
      </Modal>
    )}
  }

const mapStateToProps = (state) => {
  return {
    application: state.application
  }
}
export default connect(mapStateToProps,null)(ModalContainer);
