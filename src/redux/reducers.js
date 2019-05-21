import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user/reducers';
import trendingReducer from './trending/reducers';
import applicationReducer from './application/reducers';
import searchReducer from './search/reducers';

export default history =>
  combineReducers({
    application: applicationReducer,
    form: formReducer,
    router: connectRouter(history),
    search: searchReducer,
    trending: trendingReducer,
    user: userReducer
  })
