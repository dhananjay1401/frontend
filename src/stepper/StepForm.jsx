import Reac, { useState } from "react";

import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import { Button } from "@mui/material";
function StepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Step 1</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 2</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 3</StepLabel>
        </Step>
        <Step>
          <StepLabel>Step 4</StepLabel>
        </Step>
      </Stepper>
      {activeStep === 4 ? (
        <Typography variant="h3" align="Center">Thanks for Registering</Typography>
      ) : (
        <>
          <Button
            variant="contained"
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button variant="contained" onClick={handleNext}>
            {activeStep === 3 ? "Finish" : "Next"}
          </Button>{" "}
        </>
      )}
    </>
  );
}

export default StepForm;
