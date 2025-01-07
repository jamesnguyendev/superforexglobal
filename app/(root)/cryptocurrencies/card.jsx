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

export default function StyledCard({ img, name, text }) {
  return (
    <Grid
      item
      size={{ md: 6, sm: 12 }}
      className="p-10 rounded-xl border-solid border-2 hover:shadow-2xl flex flex-col justify-between"
    >
      <Stack>
        <img src={img} alt={img} />
        <Stack direction="row" className="items-center my-5">
          <CheckCircleIcon fontSize="large" />
          <p className="font-bold ml-5 text-3xl">
            {name}
          </p>
        </Stack>

        <Typography>{text}</Typography>
      </Stack>
    </Grid>
  );
}