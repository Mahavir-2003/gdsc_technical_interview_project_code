import { Button } from "@mui/material";
import React, { useState } from "react";

const StepThree = ({ nextStep, prevStep, handleFileInput, values }) => {
  const [profilePictureError, setProfilePictureError] = useState("");
  const [resumeError, setResumeError] = useState("");

  const validateFile = (file, allowedTypes) => {
    const fileType = file.type;
    return allowedTypes.includes(fileType);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file && !validateFile(file, ["image/jpeg", "image/png"])) {
      setProfilePictureError("Invalid file type. Please upload a JPEG or PNG image.");
    } else {
      setProfilePictureError("");
      handleFileInput("profilePicture")(e);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setResumeError("Invalid file type. Please upload a PDF file.");
    } else {
      setResumeError("");
      handleFileInput("resume")(e);
    }
  };

  const submitFormData = (e) => {
    e.preventDefault();

    if (!values.profilePicture || !values.resume) {
      // Display an error message or prevent form submission
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <form onSubmit={submitFormData} className="flex flex-col gap-y-4 justify-center items-center">
        <h1 className="w-1/2 text-start text-3xl font-bold">Upload Profile Picture and Resume</h1>
        <input
          className="w-1/2"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleProfilePictureChange}
        />
        {profilePictureError && <p className="text-red-500">{profilePictureError}</p>}
        <input
          className="w-1/2"
          type="file"
          accept=".pdf"
          onChange={handleResumeChange}
        />
        {resumeError && <p className="text-red-500">{resumeError}</p>}
        <div className="w-1/2 flex justify-between">
        <Button variant="outlined" onClick={prevStep}>Previous</Button>
          <Button variant="outlined" type="submit">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
