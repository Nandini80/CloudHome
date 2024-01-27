import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import regImg from '../../../assets/register-page.jpg';
import './Register.css';
import { SignupReq } from '../../../services/requests';
import Button from '@mui/material/Button';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    termsCondition: false,
  });

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const doRegister = async () => {
    try {
      const req = await SignupReq(formData);
      alert(JSON.stringify(req));
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <h1 className='head'>Create an account</h1>
        <p className='sub-head'>Join the Neighborhood</p>

        <form className='form'>
          <ul className='radio-switch'>
            <li className='radio-switch__item'>
              <input
                className='radio-switch__input ri5-sr-only'
                type='radio'
                name='accountType'
                id='radio-1'
                value='Customer'
                checked={formData.accountType === 'Customer'}
                onChange={changeHandler}
              />
              <label className='radio-switch__label' htmlFor='radio-1'>
                Customer
              </label>
            </li>

            <li className='radio-switch__item'>
              <input
                className='radio-switch__input ri5-sr-only'
                type='radio'
                name='accountType'
                id='radio-2'
                value='Owner'
                checked={formData.accountType === 'Owner'}
                onChange={changeHandler}
              />
              <label className='radio-switch__label' htmlFor='radio-2'>
                Owner
              </label>
              <div aria-hidden='true' className='radio-switch__marker'></div>
            </li>
          </ul>

          <input
            className='input'
            placeholder='First Name'
            id='firstName'
            name='firstName'
            value={formData.firstName}
            onChange={changeHandler}
          />
          <input
            className='input'
            placeholder='Last Name'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={changeHandler}
          />
          <input
            className='input'
            placeholder='Email'
            name='email'
            value={formData.email}
            onChange={changeHandler}
          />
          <input
            className='input'
            placeholder='Password'
            name='password'
            type='password'
            value={formData.password}
            onChange={changeHandler}
          />
          <input
            className='input'
            placeholder='Confirm Password'
            name='confirmPassword'
            type='password'
            value={formData.confirmPassword}
            onChange={changeHandler}
          />

          <p className='conditions'>
            By creating an account, you agree Neighbor may contact you using the
            above number and email, including through automated technology,
            SMS, and recorded messages. Consent is not a condition of purchase.
            View Privacy Policy.
          </p>

          <label htmlFor='terms' className='termLabel'>
          <input
            className='termsCheckbox'
            id='terms'
            type='checkbox'
            name='termsCondition'
            checked={formData.termsCondition}
            onChange={changeHandler}
            style={{marginRight:"1rem"}}
          />
            I agree to the Terms of Service and Privacy Policy
          </label>
          

          <div className='btn-container'>
          <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={doRegister}
              >
                Create Account
              </Button>

            <Link to='/login'>
              <p className='login-url'>Log into an existing account</p>
            </Link>
          </div>
        </form>
      </div>

      <img src={regImg} alt='Register' className='register-img' />
    </div>
  );
};

export default Register;
