import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';

function Login(props) {
  const initialValues = {
    username: '',
    password: '',
  };
  const onSubmit = (values) => {
    axios
      .post('/api/login', values)
      .then((res) => {
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
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
    <div>
      <Nav />
      <h2>Login Page</h2>
      <form onSubmit={formik.handleSubmit}>
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
