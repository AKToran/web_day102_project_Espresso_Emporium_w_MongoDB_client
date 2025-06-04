import axios from "axios";
import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    // console.log(newCoffee);
    
    //send to db
    // fetch('http://localhost:3000/coffees',{
    //   method: "POST",
    //   headers:{
    //     'content-type' : 'application/json'
    //   },
    //   body: JSON.stringify(newCoffee)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //   console.log('data after posting to db: ', data);
    //   if(data.insertedId){
    //     alert("coffee added to db.")
    //   }
    // })

    axios.post('http://localhost:3000/coffees',{
      ...newCoffee
    })
    .then(res=> {
      console.log(res);
      if(res.data.insertedId){
        alert('coffee added')
      }
    })
    .catch(err=>{
      console.log(err);
    })

  }


  return (
    <div className="p-24 bg-base-200 rounded-xl">
      <div className="text-center px-12 pb-4 space-y-4">
        <h1 className="text-4xl">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>

      <div>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full bg-base-100"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Chef</label>
              <input
                type="text"
                name="chef"
                className="input w-full bg-base-100"
                placeholder="Enter Coffee Chef"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full bg-base-100"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full bg-base-100"
                placeholder="Enter Coffee Taste"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full bg-base-100"
                placeholder="Enter Coffee Category"
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full bg-base-100"
                placeholder="Enter Coffee Details"
              />
            </fieldset>
            <fieldset className="fieldset p-4 md:col-span-2">
              <label className="label font-bold">Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full bg-base-100"
                placeholder="Enter Photo URL"
              />
            </fieldset>
          </div>
          <div className="me-8">
            <input className="w-full rounded-sm p-2 m-4 text-center bg-amber-800" type="submit" value="Add Coffee" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
