import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StepOne from "./components/forms/StepOne";
import StepTwo from "./components/forms/StepTwo";
import StepThree from "./components/forms/StepThree";
import Final from "./components/forms/Final";

const MultiStepSignup = () => {
  const [step, setStep] = useState(1);

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    profilePicture: null,
    resume: null,
  });

  // Function for going to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function for going to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handling form input data
  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // Handling file input data (profile picture and resume)
  const handleFileInput = (input) => (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      [input]: file,
    }));
  };

  // JavaScript switch case to render different steps
  
  switch (step) {
    case 1:
      return (
        
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  handleFileInput={handleFileInput}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepThree
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  handleFileInput={handleFileInput}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 4:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    default:
      return (
        <div className="App">
        </div>
      );
  }
};

export default MultiStepSignup;
