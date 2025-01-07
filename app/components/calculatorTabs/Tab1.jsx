import { dataForex } from "../../data";
import { Slider, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { useState } from "react";

const Tab1 = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(1.5);
  const [value, setValue] = useState(1);
  const t = useTranslations("Tab1");

  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  let result = 0;

  function valueLabelFormat(value, times) {
    if (times) {
      result = value * times;
      return result.toLocaleString();
    }
    return value.toLocaleString();
  }

  let valueIB = 0;

  function calculateIB() {
    if (result > 100) {
      valueIB = result * 0.1;
    }
    if (result > 500) {
      valueIB = result * 0.15;
    }
    return valueIB.toLocaleString();
  }

  function calculateSum() {
    let sum = 0;
    sum = valueIB + result;
    return sum.toLocaleString();
  }
  
  return (
    <div>
      <div className="flex justify-start items-center gap-4  my-7 text-default">
        <select
          onChange={handleSelectChange}
          className="outline-none border-1 text-[16px] font-semibold border rounded-md py-2 pe-8 ps-3"
        >
          {dataForex.map((item) => (
            <option value={item.value} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <span className="md:text-[18px] font-semibold">
          ${selectedValue} {t("perlot")}
        </span>
      </div>
      <div className={"rounded-lg"}>
        <div className="border-b">
          <Typography
            id="non-linear-slider"
            gutterBottom
            className={
              "flex items-center justify-between font-semibold text-default"
            }
          >
            {t("tradedlots")}
            <span
              className={
                "flex flex-row justify-center items-center font-semibold text-[20px] text-primary"
              }
            >
              {valueLabelFormat(value)}
            </span>
          </Typography>
          <Slider
            value={value}
            min={1}
            step={1}
            max={1000}
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
          <Typography
            id="non-linear-slider"
            gutterBottom
            className={
              "flex items-center text-[18px] justify-between font-semibold text-default mt-3"
            }
          >
            {t("commission")}
            <span
              className={
                "flex flex-row justify-center items-center font-semibold text-[20px] text-primary"
              }
            >
              ${valueLabelFormat(value, selectedValue)}
            </span>
          </Typography>
          <Typography
            id="non-linear-slider"
            gutterBottom
            className={
              "flex items-center justify-between text-[18px] font-semibold text-default my-3"
            }
          >
            {t("ibreward")}
            <span
              className={
                "flex flex-row justify-center items-center font-semibold text-[20px] text-primary"
              }
            >
              ${calculateIB()}
            </span>
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 pt-3 text-2xl font-semibold text-default sm:flex-row">
          <div>{t("total")}</div>
          <div className="text-primary flex flex-row justify-center items-center">
            ${calculateSum()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
