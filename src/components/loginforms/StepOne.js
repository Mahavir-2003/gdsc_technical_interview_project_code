import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (!validator.isEmail(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <form
        onSubmit={submitFormData}
        className="flex flex-col gap-y-4 justify-center items-center"
      >
        <h1 className="w-1/2 text-start text-3xl font-bold">
          Log In to Your Account
        </h1>
        <TextField
          className="w-1/2"
          error={error && !validator.isEmail(values.email)}
          helperText={
            error && !validator.isEmail(values.email) ? "Invalid email address" : ""
          }
          label="Email"
          defaultValue={values.email}
          type="email"
          variant="outlined"
          onChange={handleFormData("email")}
        />
        <Button className="w-1/2" variant="contained" type="submit">
          Next
        </Button>
        <h1 className=" text-xl">or</h1>
        <Button href="/" className="w-1/2" variant="outlined" color="success">
          Sign Up
        </Button>
      </form> 
    </div>
  );
};

export default StepOne;
