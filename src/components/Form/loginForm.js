import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/user/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class LoginForm extends React.Component {
  onSubmit = formProps => {
    const {dispatch} = this.props;
    dispatch({
      type: LOGIN,
      payload: formProps
    })
  }

  render(){
    const {handleSubmit, changeModal, user} = this.props;
    const loginSubmitErrors = user && user.loginSubmitErrors;
    const alert = loginSubmitErrors ? <Alert key='danger' variant='danger'> {loginSubmitErrors} </Alert> : <div/>
    return (
      <div>
        {alert}
      <Form onSubmit={handleSubmit(this.onSubmit)} >
        <Form.Group controlId="email" >
          <Form.Label>Email address</Form.Label>
          <Field id='email'
                name='email'
                component='input'
                type='text'
                placeholder='Enter email'
                className='form-control'
              />
        </Form.Group>
        <Form.Group controlId="password" >
          <Form.Label>Password</Form.Label>
          <Field id='password'
                name='password'
                component='input'
                type='password'
                placeholder='Enter password'
                className='form-control'
              />
        </Form.Group>
        <p>Dont have an account?{' '}<button className='buttonless' onClick={changeModal}>Register</button></p>
        <Button className='login-button' variant="primary" type="submit" disabled={false} >
          Log in
        </Button>
      </Form>
    </div>
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

const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
}

export default compose(connect(mapStateToProps, null), reduxForm({form:'loginForm', validate}))(LoginForm);
