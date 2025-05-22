import React from "react";
import App from "../App";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();

  const handleDelete = (id) =>{
    fetch(`http://localhost:3000/coffees/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log("after delete",data);
    })
  }

  return (
    <div>
      <App />
      <div>
        {coffees.map((coffee) => (
          <div key={coffee._id}>
            {" "}
            <img src={coffee.photo} /> {coffee.name}{" "}
            <button onClick={()=> handleDelete(coffee._id)} className="btn text-red-600">X</button>{" "}
            <Link to={`/updateCoffee/${coffee._id}`}><button className="btn">Edit</button></Link>{" "}
            <button className="btn">Details</button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
