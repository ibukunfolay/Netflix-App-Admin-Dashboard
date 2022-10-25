import cookie from 'js-cookie';
import axios from 'axios';

const {
  MOVIES_LIST_SUCCESS,
  MOVIES_LIST_FAIL,
  MOVIES_LIST_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  MOVIES_CREATE_REQUEST,
  MOVIES_CREATE_SUCCESS,
  MOVIES_CREATE_FAIL,
  MOVIES_DELETE_REQUEST,
  MOVIES_DELETE_SUCCESS,
  MOVIES_DELETE_FAIL,
} = require('../constants/productConstants');

const listMovies = () => async (dispatch) => {
  const userdata = cookie.get('user');
  const user = JSON.parse(userdata);
  try {
    dispatch({ type: MOVIES_LIST_REQUEST });
    const { data } = await axios.get('/movies/all', {
      headers: { Authorization: 'Bearer ' + user.token },
    });
    dispatch({ type: MOVIES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIES_LIST_FAIL, payload: error.message });
  }
};

const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get('/api/products/' + productId);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
};

const deleteMovie = (movieId) => async (dispatch) => {
  const userdata = cookie.get('user');
  const user = JSON.parse(userdata);
  try {
    dispatch({ type: MOVIES_DELETE_REQUEST, payload: movieId });
    await axios.delete('/movies/delete/' + movieId, {
      headers: { Authorization: 'Bearer ' + user.token },
    });
    dispatch({ type: MOVIES_DELETE_SUCCESS, payload: movieId });
  } catch (error) {
    dispatch({ type: MOVIES_DELETE_FAIL, payload: error.message });
  }
};

const movieCreate = (movie) => async (dispatch) => {
  const userdata = cookie.get('user');
  const user = JSON.parse(userdata);
  try {
    dispatch({ type: MOVIES_CREATE_REQUEST, payload: movie });
    const { data } = await axios.post('/movies/create', movie, {
      headers: { Authorization: 'Bearer ' + user.token },
    });
    dispatch({ type: MOVIES_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIES_CREATE_FAIL, payload: error.message });
  }
};

export { listMovies, detailsProduct, movieCreate, deleteMovie };
