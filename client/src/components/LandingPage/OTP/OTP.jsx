import React, { useEffect } from 'react';
import './otp.css';

function OTP() {
  useEffect(() => {
    const otpVerifyForm = document.getElementById('otpVerifyForm');
    const messageDiv = document.getElementById('message');
    const countdownElement = document.getElementById('countdown');
    const resendBtn = document.getElementById('resendBtn');

    let countdown = 30;
    let countdownInterval;

    // Initial countdown display
    countdownElement.textContent = countdown;

    // Start the countdown
    function startCountdown() {
      countdownInterval = setInterval(function () {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
          clearInterval(countdownInterval);
          countdownElement.textContent = '0';
          resendBtn.removeAttribute('disabled');
        }
      }, 1000);
    }

    // Initial countdown start
    startCountdown();

    otpVerifyForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Add your OTP verification logic here
      showMessage('OTP verified successfully!');
    });

    resendBtn.addEventListener('click', function () {
      // Simulate OTP generation and sending (for demonstration purposes)
      // In a real scenario, you would send a new OTP to the user's email
      // and update the countdown accordingly

      // Reset countdown and disable Resend button
      countdown = 30;
      countdownElement.textContent = countdown;
      resendBtn.setAttribute('disabled', true);

      // Start the countdown again
      startCountdown();

      // Add your OTP resend logic here
      showMessage('New OTP sent! Check your email.');
    });

    function showMessage(message) {
      messageDiv.textContent = message;
      setTimeout(function () {
        messageDiv.textContent = '';
      }, 3000);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div>
      <div className="main-container">
        <span className="header">Email Verification</span>
        <div className="otp-verify-container">
          <h2>Verify Your Email</h2>
          <p>An OTP has been sent to your email address. Please enter the OTP below:</p>
          <form className="otp-verify-form" id="otpVerifyForm">
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input type="text" id="otp" name="otp" maxLength="6" required />
            </div>
            <div className="form-group">
              <button type="submit">Verify</button>
            </div>
          </form>
          <div className="resend-container">
            <p style={{ fontFamily: 'sans-serif' }}>Didn't receive the OTP? <span id="countdown">30</span> seconds</p>
            <button id="resendBtn" disabled>Resend OTP</button>
          </div>
          <div className="message" id="message"></div>
        </div>
      </div>
    </div>
  );
}

export default OTP;
