import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StepOne from "./components/loginforms/StepOne";
import StepTwo from "./components/loginforms/StepTwo";
import Final from "./components/loginforms/Final";

const MultiStepSignIn = ({transition}) => {
  const [step, setStep] = useState(1);

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

export default MultiStepSignIn;
