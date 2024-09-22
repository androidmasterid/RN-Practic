import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {AppReducer} from './reducers/AppReducer';
import {CommonReducer} from './reducers/CommonReducer';
import loader from './reducers/LoaderReducer';
const reducer = combineReducers({AppReducer, CommonReducer, loader});

export const store = configureStore({
  reducer,
  middleware: [thunk],
});
