import React from 'react';
import { useFormik } from 'formik';

function Signup() {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const onSubmit = (values) => {
    console.log('submit clicked');
  };
  const validate = (values) => {
    console.log('validation');
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type='text'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder='Full Name'
        />
        <input
          type='email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder='Email Address'
        />
        <input
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder='Password'
        />
        <input
          type='password'
          name='confirmPassword'
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder='Confirm Password'
        />
        <button type='submit' disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
