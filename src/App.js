import React from 'react';

//to be moved
import RegisterForm from './registerForm';
import LoginForm from './loginForm';

class App extends React.Component {
  componentDidMount(){
    console.log('fetch data');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Homepage
          </p>
        </header>
        {/* <RegisterForm/> */}
        <LoginForm/>
      </div>
    );
  }
}

export default App;
