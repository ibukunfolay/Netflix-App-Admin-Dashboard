import {
  MOVIES_LIST_REQUEST,
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  MOVIES_DELETE_REQUEST,
  MOVIES_DELETE_SUCCESS,
  MOVIES_DELETE_FAIL,
  MOVIES_CREATE_REQUEST,
  MOVIES_CREATE_SUCCESS,
  MOVIES_CREATE_FAIL,
} from '../constants/productConstants';

function movieListReducers(state = { movies: [] }, action) {
  switch (action.type) {
    case MOVIES_LIST_REQUEST:
      return { loading: true, movies: [] };

    case MOVIES_LIST_SUCCESS:
      return { loading: false, movies: action.payload };

    case MOVIES_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function productDetailsReducers(state = { product: {} }, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function movieCreateReducers(state = { movie: {} }, action) {
  switch (action.type) {
    case MOVIES_CREATE_REQUEST:
      return { loading: true };

    case MOVIES_CREATE_SUCCESS:
      return { loading: false, success: true, movie: action.payload };

    case MOVIES_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function movieDeleteReducers(state = { movies: [] }, action) {
  switch (action.type) {
    case MOVIES_DELETE_REQUEST:
      return { loading: true };

    case MOVIES_DELETE_SUCCESS:
      return {
        loading: false,
        movies: state.movies.filter((x) => x._id !== action.payload),
      };

    case MOVIES_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export {
  movieListReducers,
  productDetailsReducers,
  movieCreateReducers,
  movieDeleteReducers,
};
