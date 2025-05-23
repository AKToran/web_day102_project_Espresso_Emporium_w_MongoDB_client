import React, { use } from "react";
import AuthContext from '../Context/AuthContext';

const SignUp = () => {

  const {createUser} = use(AuthContext) 
  console.log(createUser);

  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    console.log(email, password);

  }

  return (
    <div className="card bg-base-100">
      <div className="card-body items-center">
        <h1 className="text-3xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
