import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user/reducers';
import trendingReducer from './trending/reducers';
import applicationReducer from './application/reducers';

export default history =>
  combineReducers({
    application: applicationReducer,
    form: formReducer,
    router: connectRouter(history),
    trending: trendingReducer,
    user: userReducer
  })
