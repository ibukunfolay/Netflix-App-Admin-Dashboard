import cookie from 'js-cookie';
import axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const res = await axios.post('/auth/login', { email, password });
    res.data.isAdmin && dispatch({ type: USER_SIGNIN_SUCCESS, payload: res });
    cookie.set('user', JSON.stringify(res.data));
    // localStorage.setItem('user', JSON.stringify(res));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

export { signin };
