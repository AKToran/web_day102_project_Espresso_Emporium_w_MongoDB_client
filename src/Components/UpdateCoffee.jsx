import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
  const {name, chef, details, taste, photo, supplier, category} = useLoaderData();

  const handleUpdateCoffee = e =>{
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const updatedCoffee = Object.fromEntries(data);
    console.log(updatedCoffee); 

  }

  return (
    <div className="p-24 bg-base-200 rounded-xl">
      <div className="text-center px-12 pb-4 space-y-4">
        <h1 className="text-4xl">Update Coffee</h1>
      </div>

      <div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full bg-base-100"
                defaultValue={name}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Chef</label>
              <input
                type="text"
                name="chef"
                className="input w-full bg-base-100"
                defaultValue={chef}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Supplier</label>
              <input
                type="text"
                name="supplier"
                className="input w-full bg-base-100"
                defaultValue={supplier}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Taste</label>
              <input
                type="text"
                name="taste"
                className="input w-full bg-base-100"
                defaultValue={taste}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Category</label>
              <input
                type="text"
                name="category"
                className="input w-full bg-base-100"
                defaultValue={category}
              />
            </fieldset>
            <fieldset className="fieldset p-4">
              <label className="label font-bold">Details</label>
              <input
                type="text"
                name="details"
                className="input w-full bg-base-100"
                defaultValue={details}
              />
            </fieldset>
            <fieldset className="fieldset p-4 md:col-span-2">
              <label className="label font-bold">Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full bg-base-100"
                defaultValue={photo}
                placeholder='photo'
              />
            </fieldset>
          </div>
          <div className="me-8">
            <input className="w-full rounded-sm p-2 m-4 text-center bg-amber-800" type="submit" value="Update" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;