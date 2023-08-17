import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {
  
  const { firstName, lastName, age, email, profilePicture, resume } = values;

  const handleResumeDownload = () => {
    // Simulate downloading the resume by creating a Blob and triggering a download
    const blob = new Blob([resume], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.pdf";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <div className="flex items-center mb-4">
            <img
              src={URL.createObjectURL(profilePicture)}
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-xl font-bold">
                {firstName} {lastName}
              </h3>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>
          <p>
            <strong>Age:</strong> {age}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleResumeDownload}
            >
              Download Resume
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Final;
