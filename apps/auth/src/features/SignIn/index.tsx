import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { Credentials, LoginResponse, login } from '../../api/AuthApi';
import { redirect } from 'react-router-dom';

const LoginPage = () => {
  const { mutate, isError, error } = useMutation<
    LoginResponse,
    Error,
    Credentials
  >({
    mutationFn: (credentials) => login(credentials),
    onSuccess: async (data) => {
      if (data.success) {
        await redirect('/');
      }
    },
  });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    mutate({ username, password });
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign in to your account</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Email</label>
            <input autoFocus name="username" placeholder="Email" type="email" />
          </div>
          <div className="login-field">
            <label>Password</label>
            <input name="password" placeholder="Password" type="password" />
          </div>
          {isError ? <span className="error">{error.message}</span> : undefined}
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
