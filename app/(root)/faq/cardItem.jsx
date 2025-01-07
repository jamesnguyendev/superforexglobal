"use client";
import React, { useState } from "react";
import { Container, Stack, Typography, Card, Divider } from "@mui/material";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function CardItem({ ques, ans }) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Card
      className="my-2 text-default cursor-pointer shadow-md"
      onClick={() => setShow(!show)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Stack direction="row" className="justify-between p-5">
        <Typography className="font-bold">{ques}</Typography>

        {!hover && !show && <ArrowCircleDownIcon className="text-default" />}
        {hover && !show && <ArrowCircleDownIcon className="text-primary" />}
        {!hover && show && <ArrowCircleUpIcon className="text-default" />}
        {hover && show && <ArrowCircleUpIcon className="text-primary" />}
      </Stack>

      {show && (
        <>
          <Divider />
          <Stack className="p-5">
            <Typography>{ans}</Typography>
          </Stack>
        </>
      )}
    </Card>
  );
}