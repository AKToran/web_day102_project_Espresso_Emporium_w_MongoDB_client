import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";

const Users2 = () => {

  const {data: users, isPending, isError, error } = useQuery({
    queryKey:['users'],
    queryFn: async() =>{
      const res = await fetch('http://localhost:3000/users/');
      return res.json();
    }
  })

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              // const remainingUsers = users.filter((user) => user._id !== id);
              // setUsers(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  if(isError){
    return <p>Error Component. {error.message} </p>
  }

  if(isPending){
    return <p>LOADING .....</p>
  }

  return (
    <div>
      {/* <h2 className="text-3xl">all users: {initialUsers.length}</h2> */}
      <div>
        {users.map((user) => (
          <div className="m-4" key={user._id}>
            {" "}
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address}</p>
            <button className="btn">V</button>
            <button className="btn">E</button>
            <button onClick={() => handleDelete(user._id)} className="btn">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users2;
