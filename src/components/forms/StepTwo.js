import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import validator from "validator";

const StepTwo = ({ nextStep, prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);


  const submitFormData = (e) => {
    e.preventDefault();
    console.log(e)
    if (
      (values.phoneNumber.length < 10) ||
      validator.isEmpty(values.username) ||
      validator.isEmpty(values.password) ||
      values.password.length < 8
    ) {
      setError(true);
    } else {
      handleFormData(e.target.phoneNumber)
      nextStep();
    }
  };

  return (
    <div>
      <form
        onSubmit={submitFormData}
        className="flex flex-col gap-y-4 justify-center items-center"
      >
        <h1 className="w-1/2 text-start text-3xl font-bold">Hello {values.name} ...</h1>
        <TextField
          className="w-1/2"
          error={error && values.phoneNumber.length < 10}
          name="phoneNumber"
          id="phoneNumber"
          on
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
          name="username"
          error={error && validator.isEmpty(values.username)}
          helperText={
            error && validator.isEmpty(values.username) ? "This is a required field" : ""
          }
          label="User Name"
          defaultValue={values.username}
          type="text"
          variant="outlined"
          onChange={handleFormData("username")}
        />
        <TextField
          className="w-1/2"
          name="password"
          id="password"
          error={error && (values.password.length < 8)}
          helperText={
            error && (values.password.length < 8) ? "This is a required field or 8 character needed" : ""
          }
          label="Password"
          defaultValue={values.password}
          type="password"
          variant="outlined"
          onChange={handleFormData("password")}
        />
        <div className="w-1/2 flex justify-between">
          <Button variant="outlined" color="secondary" className="w-1/3" type="button" onClick={prevStep}>
            Previous
          </Button>
          <Button variant="outlined" className="w-1/3" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
