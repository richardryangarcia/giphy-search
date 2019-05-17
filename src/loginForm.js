import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {LOGIN} from './redux/user/actions';

class LoginForm extends React.Component {

  onSubmit = formProps => {
    const {dispatch} = this.props;
    dispatch({
      type: LOGIN,
      payload: formProps
    })
  }

  render() {
    const {form, handleSubmit} = this.props;
    return (
      <div >
          <p>Welcome Back</p>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <Field id='email'
                name='email'
                component='input'
                type='text'
                placeholder='EMAIL'
                className=''
              />
            </div>
            <div>
              <Field id='password'
                name='password'
                component='input'
                type='password'
                placeholder='PASSWORD'
                className=''
              />
            </div>
            <button type='submit' disabled={false}>Log in</button>
          </form>
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

export default compose(connect(null, null), reduxForm({form:'loginForm', validate}))(LoginForm);
