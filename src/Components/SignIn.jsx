import React from 'react';

const SignIn = () => {
  return (
    <div className="card bg-base-100">
      <div className="card-body items-center">
        <h1 className="text-3xl font-bold">Sign In now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SignIn</button>
        </fieldset>
      </div>
    </div>
  );
};

export default SignIn;