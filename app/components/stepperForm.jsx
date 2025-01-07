"use client";

import { Container, Stack, Step, StepLabel, Stepper } from "@mui/material";
import React from "react";
import Button from "../components/buttonCustomize";
import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Image from "next/image";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 40,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#E0E3EB",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#E0E3EB",
      marginLeft: 50,
      marginRight: 50,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 1,
    border: 0,
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
  zIndex: 1,
  color: "#E0E3EB",
  width: 80,
  height: 80,
}));

function ColorlibStepIcon(props) {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={`${className} relative`}
    >
      <img src={icon} alt="step-icon" width={80} height={80} />
    </ColorlibStepIconRoot>
  );
}

const stepper = ({ data, title }) => {
  return (
    <section className="mt-[90px] mb-[120px]">
      <Container>
        <h2 className="text-default text-[42px] font-semibold text-center mb-[60px]">
          {title}
        </h2>
        <span className="hidden lg:block">
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              activeStep={3}
              alternativeLabel
              connector={<ColorlibConnector />}
            >
              {data?.map((item, index) => (
                <Step key={index}>
                  <StepLabel
                    className="mb-[18px]"
                    StepIconComponent={(props) => (
                      <ColorlibStepIcon {...props} icon={item.icon} />
                    )}
                  >
                    <span className="text-default text-[22px] font-semibold block text-left">
                      {item.title}
                    </span>
                  </StepLabel>
                  <span className="text-default mb-4 block">
                    {item.content}
                  </span>
                  {item.button && (
                    <Button name={"Open Account"} background={false} />
                  )}
                </Step>
              ))}
            </Stepper>
          </Stack>
        </span>
        <span className="block lg:hidden">
          <Stack
            sx={{
              width: "100%",
              "& .MuiStepLabel-vertical": {
                alignItems: "normal",
              },
            }}
            spacing={4}
          >
            <Stepper
              activeStep={3}
              orientation="vertical"
              connector={
                <StepConnector
                  sx={{
                    "& .MuiStepConnector-line": {
                      minHeight: "0rem",
                    },
                  }}
                />
              }
            >
              {data?.map((item, index) => (
                <Step key={index} expanded>
                  <StepLabel
                    StepIconComponent={(props) => (
                      <ColorlibStepIcon {...props} icon={item.icon} />
                    )}
                    className="gap-4"
                  >
                    <span className="text-default text-[20px] font-semibold block">
                      {item.title}
                    </span>
                    <span className="text-default my-4 block font-normal">
                      {item.content}
                    </span>
                    {item.button && (
                      <Button name={"Open Account"} background={false} />
                    )}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
        </span>
      </Container>
    </section>
  );
};

export default stepper;
