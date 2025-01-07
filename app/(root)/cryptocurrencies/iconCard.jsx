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

export default function StyledIconCard({ icon, name, text }) {
  return (
    <Grid
      item
      size={{ lg: 4, md: 6, sm: 12 }}
      className="p-10 rounded-xl flex flex-col justify-between text-default bg-white"
    >
      <Stack>
        <Image src={icon} height={72} width={72} alt="img" />
        <p className="font-bold my-5">{name}</p>
        <Typography>{text}</Typography>
      </Stack>
    </Grid>
  );
}