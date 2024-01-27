import React, { useState } from "react";
import { Link } from "react-router-dom";
import regImg from "../../../assets/register-page.jpg";
import "./Register.css";
import { OTPReq, SignupReq } from "../../../services/requests";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    otp:"",
    termsCondition: false,
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const doRegister = async (event) => {
    try {
      // alert(JSON.stringify(formData));
      event.preventDefault();
      const req = await SignupReq(formData);
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };


  const Sendotp = async () => {
    try {
      const emailObj = {email: formData.email};
      const req = await OTPReq(emailObj);
      alert("OTP sent");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (

    <div className="container">
      <div className="form-container">
        <h1 className="head">Create an account</h1>
        <p className="sub-head">Join the Neighborhood</p>

        <form className="form">

        

          <input
            className="input"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandler}
          />
          <input
            className="input"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandler}
          />

          <div className="otp-container">
            <input
              className="input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />

            <button onClick={Sendotp} className="otp-btn" >Send OTP</button>
          </div>

          <input
            className="input"
            placeholder="otp"
            name="otp"
            value={formData.otp}
            onChange={changeHandler}
          />
          <input
            className="input"
            placeholder="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={changeHandler}
          />
          <input
            className="input"
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={changeHandler}
          />

          {/* <label>Account Type : </label>
          <select name="accountType" onChange={changeHandler} required>
            <option value="" disabled selected>
              {" "}
              Select{" "}
            </option>
            <option value="Owner">Owner</option>
            <option value="Customer">Customer</option>
          </select> */}

          <p className="conditions">
            By creating an account, you agree Neighbor may contact you using the
            above number and email, including through automated technology, SMS,
            and recorded messages. Consent is not a condition of purchase. View
            Privacy Policy.
          </p>

          <label htmlFor="terms" className="termLabel">
            <input
              className="termsCheckbox"
              id="terms"
              type="checkbox"
              name="termsCondition"
              checked={formData.termsCondition}
              onChange={changeHandler}
              style={{ marginRight: "1rem" }}
            />
            I agree to the Terms of Service and Privacy Policy
          </label>

          <div className="btn-container">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={doRegister}
            >
              Create Account
            </Button>

            <Link to="/login">
              <p className="login-url">Log into an existing account</p>
            </Link>
          </div>
        </form>

        <img src={regImg} alt="Register" className="register-img" />
      </div>

    </div>
  );
};

export default Register;
