import React from 'react';
import './Login.css';
import { useFormik } from 'formik';
import axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const navigate = useNavigate();
  const initialValues = {
    username: '',
    password: '',
  };
  const onSubmit = (values) => {
    axios
      .post('/api/login', values)
      .then((res) => {
        localStorage.setItem('userId', res.data.id);
        localStorage.setItem('userName', res.data.name);
        alert(`Welcome ${res.data.name}`);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate('/');
  };

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username Required';
    }
    if (!values.password) {
      errors.password = 'Password Required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be longer than 8 Characters';
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className='Login'>
      <Nav />
      <h2 className='title'>Login Page</h2>
      <form className='form' onSubmit={formik.handleSubmit}>
        <input
          type='text'
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder='Username'
        />
        <input
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder='Password'
        />
        <button type='submit' disabled={!formik.isValid}>
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
