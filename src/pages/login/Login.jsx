import React, { useState } from 'react';
import './login.css';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../redux/actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, user, error } = userSignin;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="login">
      {error && <div>{error}</div>}
      <input
        type="email"
        placeholder="Email"
        className="input"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="btn" onClick={submit} disabled={loading}>
        Submit
      </button>
    </div>
  );
};

export default Login;
