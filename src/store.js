import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
  movieListReducers,
  // productDetailsReducers,
  movieCreateReducers,
  movieDeleteReducers,
} from './redux/reducers/productReducers';
import thunk from 'redux-thunk';
import cookie from 'js-cookie';
// import { cartReducer } from './redux/reducers/cartReducers';
import { userSigninReducer } from './redux/reducers/userReducer';

const userData = cookie.get('user') || null;
const user = JSON.parse(userData);

const initialState = {
  userSignin: { user },
};
const reducer = combineReducers({
  userSignin: userSigninReducer,
  movieList: movieListReducers,
  delete: movieDeleteReducers,
  create: movieCreateReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
