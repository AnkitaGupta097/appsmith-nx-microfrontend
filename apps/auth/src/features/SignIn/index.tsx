import React from 'react';
import { useSearchParams } from 'react-router-dom';

const createLoginUrl = () => {
  const successRedirectUrl = '/';
  const params = new URLSearchParams();
  params.append('redirectUrl', successRedirectUrl);
  const url = new URL('http://localhost:8080/api/v1/login');
  url.search = params.toString();
  return url.toString();
};

const LoginPage = () => {
  const url = createLoginUrl();
  const [params] = useSearchParams();
  const error = params.get('error') === 'true';
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign in to your account</h1>
        <form className="login-form" action={url} method="POST">
          <div className="login-field">
            <label>Email</label>
            <input autoFocus name="username" placeholder="Email" type="email" />
          </div>
          <div className="login-field">
            <label>Password</label>
            <input name="password" placeholder="Password" type="password" />
          </div>
          {error ? (
            <span className="error">
              Please check the entered credentials and try again.
            </span>
          ) : undefined}
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
