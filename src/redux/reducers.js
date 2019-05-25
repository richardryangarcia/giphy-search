import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as formReducer} from 'redux-form';
import userReducer from './user/reducers';
import trendingReducer from './trending/reducers';
import applicationReducer from './application/reducers';
import searchReducer from './search/reducers';
import favoritesReducer from './favorites/reducers';
import tagsReducer from './tags/reducers';

export default history =>
  combineReducers({
    application: applicationReducer,
    favorites: favoritesReducer,
    form: formReducer,
    router: connectRouter(history),
    search: searchReducer,
    tags: tagsReducer,
    trending: trendingReducer,
    user: userReducer
  })
