import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import regImg from '../../../assets/register-page.jpg'
import './Register.css';
import { SignupReq } from '../../../services/requests';

const Register = () => {

    const [formData , setFormData] = useState({firstName: "" , lastName: "" , email: ""  , password: "" , confirmPassword: "" , accountType: "" , termsCondition: 0 });

    function changeHandler(event){
      const { name , value} = event.target;
      setFormData({...formData,[name]: value})
    }
 
    const doRegister= async()=>{
      const req = await SignupReq(formData);
      alert(JSON.stringify(req));
    }

    // function submitHandler(event){
        
    // }

  return (
    <div className='container'>
        <div className='form-container'>
            <h1 className='head'>Create an account</h1>
            <p className='sub-head'>Join the Neighborhood</p>

            <form className='form'>
                <ul class="radio-switch ">
                <li class="radio-switch__item">
                    <input class="radio-switch__input ri5-sr-only" type="radio" name="radio-switch-name" id="radio-1" value="" checked />
                    <label class="radio-switch__label" for="radio-1">Customer</label>
                </li>

                <li class="radio-switch__item">
                    <input class="radio-switch__input ri5-sr-only" type="radio" name="radio-switch-name" id="radio-2" value=""/>
                    <label class="radio-switch__label" for="radio-2">Owner</label>
                    <div aria-hidden="true" class="radio-switch__marker"></div>
                </li>
                </ul>



                <input className='input' placeholder='First Name' id='firstName' name='firstName' value={formData.firstName} onChange={changeHandler}></input>
                <input className='input' placeholder='Last Name' id='lastName' name='lastName' value={formData.lastName} onChange={changeHandler}></input>
                <input className='input' placeholder='Email' name='email' value={formData.email} onChange={changeHandler}></input>
                <input className='input' placeholder='Password' name='password' value={formData.password} onChange={changeHandler}></input>
                <input className='input' placeholder='Confirm Password' name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler}></input>

                <p className='conditions'>By creating an account, you agree Neighbor may contact you using the above number and email, including through automated technology, SMS, and recorded messages. Consent is not a condition of purchase. View Privacy Policy.</p>

                <label htmlFor='terms' className='termLabel'>I agree to the Terms of Service and Privacy Policy</label>
                <input className='termsCheckbox' id='terms' type='checkbox' name='terms condition' value={formData.termsCondition}></input>

                <div className='btn-container'>
                    <input type='button' value="Create Account" className='btn' onClick={doRegister}></input>
                    <Link to={"/login"}>
                        <p className='login-url'>Log into an existing account</p>
                    </Link>
                </div>
                
            </form>
        </div>

        <img src={regImg} className='register-img'/>
    </div>
  )
}

export default Register;