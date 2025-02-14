"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "./buttonCustomize";
import { Step, StepButton, Stepper } from "@mui/material";
import Image from "next/image";

const DepositSlider = ({
  title,
  sliderName,
  bottomName,
  buttonName,
  time,
  filter,
}) => {
  const steps = [
    "500 USD",
    "1,000 USD",
    "2,000 USD",
    "5,000 USD",
    "10,000 USD",
    "15,000 USD",
    "25,000 USD",
    "50,000 USD",
    "350,000 USD",
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [gift, setGift] = React.useState(null);

  const handleStep = (step) => () => {
    setActiveStep(step);

    setGift(filter[step]);
  };
  return (
    <div className={"rounded-lg border px-5 py-20"}>
      <h2 className={"text-center text-5xl font-semibold text-default mb-16"}>
        {title}
      </h2>
      <div className="hidden md:block">
        <Box sx={{ width: "100%" }}>
          <Stepper
            alternativeLabel
            nonLinear
            activeStep={activeStep}
            sx={{
              ".MuiStepLabel-label.Mui-active": { color: "#3ECF8E" },
              ".MuiStepIcon-root.Mui-active": { color: "#3ECF8E" },
              ".css-1g86afo-MuiStepIcon-text ": { fill: "transparent" },
            }}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton onClick={handleStep(index)} disableRipple>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Box>
      </div>
      <div className="md:hidden text-default max-sm:px-3">
        <ol className="relative border-s border-gray-200 ">
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(0)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              500 USD
            </h3>
          </li>
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(1)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              1,000 USD
            </h3>
          </li>
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(2)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              2,000 USD
            </h3>
          </li>
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(3)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              5,000 USD
            </h3>
          </li>
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(4)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              10,000 USD
            </h3>
          </li>
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(5)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              15,000 USD
            </h3>
          </li>
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(6)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              25,000 USD
            </h3>
          </li>
          <li className="mb-10 ms-6 cursor-pointer" onClick={handleStep(7)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              50,000 USD
            </h3>
          </li>
          <li className="md:mb-5 ms-6 cursor-pointer" onClick={handleStep(8)}>
            <span className="absolute flex items-center justify-center w-6 h-6 bg-primary rounded-full -start-3 ring-8 ring-white "></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold ">
              350,000 USD
            </h3>
          </li>
        </ol>
      </div>
      <div className="border-b pb-12 pt-3"></div>
      <div className="flex flex-col items-center justify-center gap-4 pt-7 text-2xl font-semibold text-default sm:flex-row">
        {bottomName}
      </div>
      <div className="text-primary flex flex-row  text-2xl my-4 font-semibold justify-center items-center">
        {gift?.name}
      </div>
      <div className=" flex justify-center ">
        {gift ? (
          <Image
            alt=""
            src={gift?.img}
            width={gift?.widthimg}
            height={10}
            className=""
          />
        ) : null}
      </div>
      <div className="mt-12 flex justify-center">
        <a href="#register">
          <Button name={buttonName} background={true} />
        </a>
      </div>
    </div>
  );
};
export default DepositSlider;
