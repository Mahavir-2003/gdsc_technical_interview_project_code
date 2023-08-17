import React, { useEffect } from "react";
import UserProfile from "../../UserProfile"
import {addUser, getAllUsers } from "../../userData";

const Final = ({ values }) => {
  
  useEffect(()=>{
    addUser(values);
  },[])

  const allUsers = getAllUsers();
  console.log(allUsers);
  

  return (
    <UserProfile data={values}/>
  );
};

export default Final;
