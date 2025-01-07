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
import AccountForm from "../../components/accountForm";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import GoldIcon from "../../../public/svg-gold-trading/gold.svg";
import AnalyticsIcon from "../../../public/svg-gold-trading/analytics.svg";
import NofeeIcon from "../../../public/svg-gold-trading/nofee.svg";
import AccountIcon from "../../../public/svg-gold-trading/account.svg";
import AuthenticationIcon from "../../../public/svg-gold-trading/authentication.svg";
import ChartIcon from "../../../public/svg-gold-trading/chart.svg";
import CertificateIcon from "../../../public/svg-gold-trading/certificate.svg";
import CashIcon from "../../../public/svg-gold-trading/cash.svg";
import SpeedIcon from "../../../public/svg-gold-trading/speed.svg";
import Mt4Icon from "../../../public/svg-gold-trading/mt4.svg";

export default function StyledGoldCard({ size, icon, step, name, text }) {
  return (
    <Grid
      item
      size={size}
      className="text-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
    >
      <div
        className="flex flex-col items-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgb(214, 159, 69)",
          color: "white",
        }}
      >
        <div className="rounded-full my-5 p-5 shadow-2xl">
          <Image src={icon} width={68} height={68} alt={icon} />
        </div>
        <Typography className="pb-5">{step}</Typography>
      </div>
      <div className="text-center p-5 bg-white text-default flex-grow">
        <Typography variant="h6" className="font-semi-bold mb-5">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </div>
    </Grid>
  );
}