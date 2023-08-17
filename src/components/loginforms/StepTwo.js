import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import validator from "validator";

const StepTwo = ({ nextStep, prevStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (!validator.isLength(values.password, { min: 8 })) {
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
          Enter Your Password
        </h1>
        <TextField
          className="w-1/2"
          error={error && !validator.isLength(values.password, { min: 8 })}
          helperText={
            error && !validator.isLength(values.password, { min: 8 })
              ? "Password must be at least 8 characters"
              : ""
          }
          label="Password"
          type="password"
          variant="outlined"
          onChange={handleFormData("password")}
        />
        <Button className="w-1/2" variant="contained" color="primary" type="submit">
          Next
        </Button>
        <Button className="w-1/2" variant="outlined" color="secondary" onClick={prevStep}>
          Back
        </Button>
      </form>
    </div>
  );
};

export default StepTwo;
