import './Login.css';

function Login() {
  return (
    <div>
      <div className="main-container">
        <div className="heading">
          <h2>Login to</h2>
          <h1><span style={{ color: 'aqua' }}>Cloud</span>Home</h1>
        </div>
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form" id="loginForm">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="message" id="message"></div>
          <div className="forgot-register">
            <a href="#">Forgot Password</a>
            <a href="#">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
