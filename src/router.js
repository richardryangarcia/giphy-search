import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

//import app pages
import SearchResults from './pages/searchResults';
import Favorites from './pages/favorites';
import Trending from './pages/trending';
import NotFound from './pages/NotFound';

//always on page components
import MenuTop from './components/MenuTop';
import ModalContainer from './components/Modal';
import SearchOverlay from './components/SearchOverlay';
import ToastMessage from 'components/Toast';
import Spinner from 'components/Spinner';


//define routes
const routes = [
  {
    path: '/trending',
    component: Trending,
    exact: true
  },
  {
    path: '/search-results',
    component: SearchResults,
    exact: true
  },
  {
    path: '/favorites',
    component: Favorites,
    exact: true
  },
];

class Router extends React.Component {
  render(){
    const {history} = this.props;
    return (
      <ConnectedRouter history={history}>
        <MenuTop />
        <SearchOverlay />
        <ModalContainer />
        <Spinner />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/trending" />}/>
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
