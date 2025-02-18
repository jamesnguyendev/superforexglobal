"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Button from "../components/buttonCustomize";

const DepositSlider = ({
  title,
  sliderName,
  bottomName,
  buttonName,
  time,
  sliderNameSecond,
  valueSecond,
}) => {
  const [value, setValue] = useState(500);

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

  function valueLabelFormat(value, times) {
    let result = 0;
    if (times === 2) {
      result = value * 2;
      return result.toLocaleString();
    }
    if (times === 1.1) {
      result = value * 1.1;
      return result.toLocaleString();
    }
    if (times === 4) {
      result = value * 4;
      return result.toLocaleString();
    }
    if (times === 31) {
      result = value * 31;
      return result.toLocaleString();
    }
    if (value >= 1000) {
      return value.toLocaleString();
    }
    return value.toString();
  }

  return (
    <div className={"rounded-lg border px-5 py-20 lg:px-28"}>
      <h2 className={"text-center text-5xl font-semibold text-default"}>
        {title}
      </h2>
      <div className="border-b pb-12 pt-16">
        <Box>
          <Typography
            id="non-linear-slider"
            gutterBottom
            className={
              "mb-2 flex items-center justify-between text-xl font-semibold text-default"
            }
          >
            {sliderName}
            <span className={"flex flex-row justify-center items-center"}>
              ${valueLabelFormat(value)}
            </span>
          </Typography>
          {sliderNameSecond && valueSecond ? (
            <Typography
              id="non-linear-slider"
              gutterBottom
              className={
                "mb-2 flex items-center justify-between text-xl font-semibold text-default"
              }
            >
              {sliderNameSecond}
              <span className={"flex flex-row justify-center items-center"}>
                {value >= 100 ? valueSecond : "10%"}
              </span>
            </Typography>
          ) : null}
          <Slider
            value={value}
            min={500}
            step={10}
            max={50000}
            className={"text-primary"}
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
            onChange={handleChange}
            sx={(t) => ({
              "& .MuiSlider-track": {
                border: "none",
              },
              "& .MuiSlider-thumb": {
                backgroundColor: "#3ECF8E",
                "&:hover, &.Mui-focusVisible, &.Mui-active": {
                  boxShadow: "none",
                },
              },
            })}
            valueLabelDisplay="off"
            aria-labelledby="non-linear-slider"
          />
        </Box>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 pt-7 text-2xl font-semibold text-default sm:flex-row">
        <div>{bottomName}</div>
        <div className="text-primary flex flex-row justify-center items-center">
          ${valueLabelFormat(value, time)}
        </div>
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
