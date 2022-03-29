import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Personneinfo from "./Personneinfo";
import Accountinfo from "./Accountinfo";
import FicheMedical from "./FicheMedical";

const AddPatient = () => {
  const steps = [
    "Informations personnelles ",
    "Informations du compte",
    "fiche medicale",
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Box >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optionel</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: -0.5, mb: 1 }}>
            {

              activeStep+1 === 1 &&(

                <Personneinfo/>
              )}

              {
              activeStep+1 === 2 &&(

                <FicheMedical/>
              )

            }
             {
              activeStep+1 === 3 &&(

                <Accountinfo/>
              )

            }
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}

              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>

      {/*<Box
        component="form"
        sx={{
          "& > :not(style)": { m: 0.5, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Nom" variant="standard" />
        <TextField id="standard-basic" label="Prenom" variant="standard" />
        <TextField id="standard-basic" label="CIN" variant="standard" />
        <TextField id="standard-basic" label="Civilite" variant="standard" />
        <TextField id="standard-basic" label="Date de naissance " variant="standard" />
        <TextField id="standard-basic" label="Situation familiale" variant="standard" />
        <TextField id="standard-basic" label="Adresse" variant="standard" />
        <TextField id="standard-basic" label="telephone" variant="standard" />


      </Box>*/}
    </div>
  );
};

export default AddPatient;
