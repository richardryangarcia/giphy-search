import React from 'react';
import {Field, reduxForm, getFormSyncErrors} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {REGISTER} from '../../redux/user/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


class RegisterForm extends React.Component {

  onSubmit = formProps => {
    const {dispatch} = this.props;
    dispatch({
      type: REGISTER,
      payload: formProps
    })
  }

  render(){
    const {form, handleSubmit, changeModal, user} = this.props;
    const registerSubmitErrors = user && user.registerSubmitErrors;
    const alert = registerSubmitErrors ? <Alert key='danger' variant='danger'> {registerSubmitErrors} </Alert> : <div/>
    return (
      <div>
      {alert}
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Form.Group controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Field id='firstName'
            name='firstName'
            component='input'
            type='text'
            placeholder='First name'
            className='form-control'
          />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Field id='lastName'
            name='lastName'
            component='input'
            type='text'
            placeholder='Last name'
            className='form-control'
          />
        </Form.Group>
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
        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Field id='confirmPassword'
                name='confirmPassword'
                component='input'
                type='password'
                placeholder='Confirm password'
                className='form-control'
              />
        </Form.Group>
        <p>Already have an account?{' '}<a href="#" onClick={changeModal}>Log in</a></p>
        <Button variant="primary" type="submit" disabled={false} style={{float: 'right'}}>
          Sign Up
        </Button>
      </Form>
      </div>
    );
  }
}

const validate = formProps => {
  const errors = {}

  if (!formProps.firstName) {
    errors.firstName = "Enter first name";
  }

  if (!formProps.lastName) {
    errors.lastName = "Enter last name";
  }

  if (!formProps.email) {
    errors.email = "Enter valid email address";
  }

  if (!formProps.password) {
    errors.password = "Enter a password";
  }

  if (formProps.password && formProps.password !== formProps.confirmPassword) {
    errors.confirmPassword = "Password confirmation must match";
  }

  return errors;
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
}


export default compose(connect(mapStateToProps, null), reduxForm({form:'registerForm', validate}))(RegisterForm);
