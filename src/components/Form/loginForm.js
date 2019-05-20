import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/user/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LoginForm extends React.Component {

  onSubmit = formProps => {
    const {dispatch, closeModal} = this.props;
    dispatch({
      type: LOGIN,
      payload: formProps
    })
  }

  render(){
    const {form, handleSubmit, changeModal} = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Field id='email'
                name='email'
                component='input'
                type='text'
                placeholder='Enter email'
                className='form-control'
              />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Field id='password'
                name='password'
                component='input'
                type='password'
                placeholder='Enter password'
                className='form-control'
              />
        </Form.Group>
        <p>Dont have an account?{' '}<a href="#" onClick={changeModal}>Register</a></p>
        <Button variant="primary" type="submit" disabled={false} style={{float: 'right'}}>
          Log in
        </Button>
      </Form>
    );
  }
}

const validate = formProps => {
  const errors = {}

  if (!formProps.email) {
    errors.email = "Enter valid email address";
  }

  if (!formProps.password) {
    errors.password = "Enter a password";
  }

  return errors;
}

export default compose(connect(null, null), reduxForm({form:'loginForm', validate}))(LoginForm);
