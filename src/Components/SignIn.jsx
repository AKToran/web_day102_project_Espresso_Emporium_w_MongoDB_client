import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';
import axios from 'axios';

const SignIn = () => {
  const { signInUser } = use(AuthContext);

  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
    .then(res => {
      console.log(res.user);

      // update last signin time on db
      const signInInfo = {
        email,
        lastSignInTime : res.user?.metadata?.lastSignInTime
      }

      axios.patch('http://localhost:3000/users', signInInfo)
      .then(res=>{
        console.log(res.data);
      })
      .catch(err=>{
        console.log(err);
      })

      // fetch('http://localhost:3000/users',{
      //   method:"PATCH",
      //   headers:{
      //     'content-type'  : 'application/json'
      //   },
      //   body: JSON.stringify(signInInfo)
      // })
      // .then(res => res.json())
      // .then(data =>{
      //   console.log("after patch",data);
      // })
    })
    .catch(err =>{
      console.log(err);
    })

  }

  return (
    <div className="card bg-base-100">
      <div className="card-body items-center">
        <h1 className="text-3xl font-bold">Sign In now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SignIn</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;