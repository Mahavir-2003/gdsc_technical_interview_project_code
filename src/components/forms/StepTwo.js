import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import validator from "validator";

const StepTwo = ({ nextStep, prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.phoneNumber) ||
      validator.isEmpty(values.userName) ||
      validator.isEmpty(values.password)
    ) {
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
        <h1 className="w-1/2 text-start text-3xl font-bold">Step Two</h1>
        <TextField
          className="w-1/2"
          error={error && validator.isEmpty(values.phoneNumber)}
          helperText={
            error && validator.isEmpty(values.phoneNumber)
              ? "This is a required field"
              : ""
          }
          label="Phone Number"
          defaultValue={values.phoneNumber}
          type="number"
          variant="outlined"
          onChange={handleFormData("phoneNumber")}
        />
        <TextField
          className="w-1/2"
          error={error && validator.isEmpty(values.userName)}
          helperText={
            error && validator.isEmpty(values.userName) ? "This is a required field" : ""
          }
          label="User Name"
          defaultValue={values.userName}
          type="text"
          variant="outlined"
          onChange={handleFormData("userName")}
        />
        <TextField
          className="w-1/2"
          error={error && validator.isEmpty(values.password)}
          helperText={
            error && validator.isEmpty(values.password) ? "This is a required field" : ""
          }
          label="Password"
          defaultValue={values.password}
          type="password"
          variant="outlined"
          onChange={handleFormData("password")}
        />
        <div className="w-1/2 flex justify-between">
          <Button variant="outlined" onClick={prevStep}>
            Previous
          </Button>
          <Button variant="outlined" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
