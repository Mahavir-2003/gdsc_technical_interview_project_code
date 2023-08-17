import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StepOne from "./components/forms/StepOne";
import StepTwo from "./components/forms/StepTwo";
import Final from "./components/forms/Final";

const MultiStepSignup = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    userName: "",
    password: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        );
      case 3:
        return <Final values={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="custom-margin">
            {renderStep()}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MultiStepSignup;
gdsc_technical_interview_project_code