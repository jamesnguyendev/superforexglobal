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

export default function StyledWhiteCard({ size, icon, name, text }) {
  return (
    <Grid item size={size} className="text-default rounded-xl shadow-2xl">
      <div
        className="flex justify-center items-center rounded-xl"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/3idyffxxb/New%20Folder/gray.svg?updatedAt=1735639943012')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Image
          src={icon}
          width={88}
          height={88}
          alt={icon}
          className="rounded-full my-10"
        />
      </div>
      <Stack className="text-center p-5">
        <p className="font-semibold mb-5 text-2xl">
          {name}
        </p>
        <p>{text}</p>
      </Stack>
    </Grid>
  );
}
