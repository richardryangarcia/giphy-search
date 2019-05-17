import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {REGISTER} from './redux/user/actions';

class RegisterForm extends React.Component {

  onSubmit = formProps => {
    const {dispatch} = this.props;
    dispatch({
      type: REGISTER,
      payload: formProps
    })
  }

  render() {
    const {form, handleSubmit} = this.props;
    return (
      <div>
          <p>Welcome</p>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <Field id='firstName'
                name='firstName'
                component='input'
                type='text'
                placeholder='FIRST NAME'
                className=''
              />
            </div>
            <div>
              <Field id='lastName'
                name='lastName'
                component='input'
                type='text'
                placeholder='LAST NAME'
                className=''
              />
            </div>
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
            <div>
              <Field id='confirmPassword'
                name='confirmPassword'
                component='input'
                type='password'
                placeholder='CONFIRM PASSWORD'
                className=''
              />
            </div>
            <button type='submit' disabled={false}>Register</button>
          </form>
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

export default compose(connect(null, null), reduxForm({form:'registerForm', validate}))(RegisterForm);
