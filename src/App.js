import React from 'react';
import {connect} from 'react-redux';
import {GET_TRENDING} from './redux/trending/actions';
import RegisterForm from './registerForm';

class App extends React.Component {
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch({type:GET_TRENDING});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Homepage
          </p>
        </header>
        <RegisterForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trending: state.trending
  }
}

export default connect(mapStateToProps, null)(App);
