import React from 'react';
import './Signup.css';
import { useFormik } from 'formik';
import axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';

function Signup() {
  const initialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = (values) => {
    axios
      .post('/api/signup', values)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data));
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
    if (!values.name) {
      errors.name = 'Name Required';
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Please Confirm Password';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Password must Match';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div className='Signup'>
      <Nav />
      <h2 className='title'>Signup</h2>
      <form className='form' onSubmit={formik.handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder='Full Name'
        />
        <input
          type='text'
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder='Username'
        />
        <input
          type='email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder='Email Address'
        />
        <input
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder='Password'
        />
        <input
          type='password'
          name='confirmPassword'
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          placeholder='Confirm Password'
        />
        <button type='submit' disabled={!formik.isValid}>
          Submit
        </button>
      </form>
      <div>
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        {formik.errors.username ? <div>{formik.errors.username}</div> : null}
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
        {formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
