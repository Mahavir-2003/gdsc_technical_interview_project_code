import { json } from "react-router-dom";

const users = JSON.parse(localStorage.getItem("users")) || [];

// Add a new user to the array
const addUser = (user) => {
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  var a = JSON.stringify(users);
  console.log(a);
};

// Get all users
const getAllUsers = () => {
  return users;
};

export { addUser, getAllUsers }