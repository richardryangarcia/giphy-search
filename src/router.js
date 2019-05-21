import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

//import app pages
import App from './App';
import SearchResults from './SearchResults';
import NotFound from './NotFound';

//define routes
const routes = [
  {
    path: '/home',
    component: App,
    exact: true
  },
  {
    path: '/search-results',
    component: SearchResults,
    exact: true
  },
];

class Router extends React.Component {
  render(){
    const {history} = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />}/>
          {
            routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={route.exact}
              />
            ))
          }
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default Router;
