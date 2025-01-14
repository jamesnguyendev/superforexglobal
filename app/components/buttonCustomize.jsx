"use client";

import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ButtonCustomize = ({ name, background, type }) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type={type}
      className={
        background
          ? "bg-primary text-white rounded-full hover:bg-default px-5 py-1"
          : "text-primary rounded-full hover:text-default hover:bg-white py-1"
      }
      style={{
        textTransform: "none",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {name}
      <span
        style={{
          display: "inline-block",
          transition: "opacity 0.3s, transform 0.3s",
          opacity: 1,
          transform: hover ? "translateX(0)" : "translateX(-2px)",
        }}
      >
        {hover ? (
          <ArrowForwardIcon fontSize="small" />
        ) : (
          <ChevronRightIcon fontSize="small" />
        )}
      </span>
    </button>
  );
};

export default ButtonCustomize;
