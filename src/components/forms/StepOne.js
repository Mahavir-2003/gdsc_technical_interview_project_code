import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.name) || !validator.isEmail(values.email)) {
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
          Now Create your Account
        </h1>
        <TextField
          className="w-1/2"
          error={error && validator.isEmpty(values.name)}
          helperText={
            error && validator.isEmpty(values.name) ? "This is a required field" : ""
          }
          label="Name"
          defaultValue={values.name}
          type="text"
          variant="outlined"
          onChange={handleFormData("name")}
        />
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
        <Button className="w-1/2" variant="outlined" type="submit">
          Next
        </Button>
      </form>
    </div>
  );
};

export default StepOne;
