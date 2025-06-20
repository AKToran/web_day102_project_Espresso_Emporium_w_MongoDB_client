import React, { use } from "react";
import AuthContext from '../Context/AuthContext';

const SignUp = () => {

  const {createUser} = use(AuthContext) 

  const handleSignUp = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...rest} = Object.fromEntries(formData.entries());
    // console.log(newUser);

    //create user in firebase:
    createUser(email, password)
    .then(res =>{
      // console.log(res.user);
      const newUser = {
      email,
      ...rest,
      creationTime : res.user?.metadata?.creationTime,
      lastSignInTime : res.user?.metadata?.lastSignInTime
    }

      // save profile info in the mongo database
      fetch('http://localhost:3000/users',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(newUser)
      })
      .then(res=> res.json())
      .then(data=>{
        if(data.insertedId){
          alert('data saved to MongoDB');
        }
      })
    })
    .catch(err =>{
      console.log(err);
    })

  }

  return (
    <div className="card bg-base-100">
      <div className="card-body items-center">
        <h1 className="text-3xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSignUp} className="fieldset">

          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Your Name" />

          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />

          <label className="label">Address</label>
          <input type="text" name="address" className="input" placeholder="Address" />

          <label className="label">Phone</label>
          <input type="number" name="phone" className="input" placeholder="Phone" />

          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />

          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
