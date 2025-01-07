import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const GoldenCard = ({ icon, step, name, text, backGround, bgColor }) => {
  return (
    <div className="text-white rounded-xl shadow-2xl overflow-hidden flex flex-col">
      <div
        className="flex flex-col items-center"
        style={{
          backgroundImage: `url('${backGround}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: bgColor,
          color: "white",
        }}
      >
        <div className="rounded-full my-5 p-5 shadow-2xl">
          <img src={icon} width={68} height={68} alt={icon} />
        </div>
        <Typography className="pb-5">{step}</Typography>
      </div>
      <div className="text-center p-5 bg-white text-default flex-grow">
        <p className="font-normal mb-5 text-xl">{name}</p>
        <Typography>{text}</Typography>
      </div>
    </div>
  );
};

export default GoldenCard;
