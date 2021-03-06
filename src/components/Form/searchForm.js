import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {SUBMIT_SEARCH, CLOSE_SEARCH} from '../../redux/search/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchForm extends React.Component {

  closeSearch = () => {
    const {dispatch} = this.props;
    dispatch({
      type: CLOSE_SEARCH
    })
  }

  onSubmit = formProps => {
    const {dispatch} = this.props;
    dispatch({
      type: SUBMIT_SEARCH,
      payload: formProps
    })
  }

  render(){
    const {handleSubmit} = this.props;
    return (
      <Form onSubmit={handleSubmit(this.onSubmit)} className='search-form'>
        <Form.Group controlId="keyword">
          <Field id='keyword'
                name='keyword'
                component='input'
                type='text'
                placeholder='Type to search...'
                className='form-control'
                autoComplete='off'
              />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={false} >
          Search Giphy
        </Button>
        <Button className='cancel-search' variant="secondary" disabled={false} onClick={this.closeSearch}>
          Cancel
        </Button>
      </Form>
    );
  }
}

const validate = formProps => {
  const errors = {}

  if (!formProps.keyword || (formProps.keyword && formProps.keyword.length < 4)) {
    errors.email = "Enter a keyword longer than 3 characters";
  }

  return errors;
}

export default compose(connect(null, null), reduxForm({form:'searchForm', validate}))(SearchForm);
