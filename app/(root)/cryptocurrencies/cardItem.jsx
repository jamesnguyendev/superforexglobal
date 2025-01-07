"use client";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import {
  Container,
  Stack,
  Typography,
  Card,
  Divider,
  Modal,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";
import Link from "next/link";

import Button from "../../components/buttonCustomize";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CommissionIcon from "../../../public/svg-cryptocurrencies/commission.svg";
import DiscountsIcon from "../../../public/svg-cryptocurrencies/discounts.svg";
import FixedIcon from "../../../public/svg-cryptocurrencies/fixed.svg";
import AccountForm from "../../components/accountForm";

export default function CardItem({ ques, ans }) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Card
      className="my-2 text-default bg-white cursor-pointer shadow-md w-100"
      onClick={() => setShow(!show)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Stack direction="row" className="justify-between p-5">
        <p className="font-bold">{ques}</p>

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