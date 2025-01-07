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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../../components/buttonCustomize";
import AccountForm from "../../components/accountForm";

import LeverageIcon from "../../../public/svg-stock-trading/leverage.svg";
import CashIcon from "../../../public/svg-stock-trading/cash.svg";
import FocusIcon from "../../../public/svg-stock-trading/focus.svg";
import ChartIcon from "../../../public/svg-indices-trading/chart.svg";
import Chart1Icon from "../../../public/svg-indices-trading/chart1.svg";
import SunIcon from "../../../public/svg-indices-trading/sun.svg";
import ManipulateIcon from "../../../public/svg-indices-trading/manipulate.svg";
import CompassIcon from "../../../public/svg-indices-trading/compass.svg";
import Global from "../../../public/global.svg";

const StyledDot = styled.div`
  position: relative;
  padding-top: 64px;

  &::before {
    content: "";
    position: absolute;
    top: 24px;
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(66, 14, 148);
  }
`;

const StyledSliderCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    left: 0;
    top: 0;
    transform: skew(-12deg);
    transform-origin: 0 0;
    pointer-events: none;
    display: block;
    border-top-right-radius: 10px;
    z-index: 1;
  }
`;

export default function SliderCard({ icon, name, text }) {
  return (
    <Card className="rounded-xl text-default">
      <Grid container>
        <Grid
          item
          size={{ md: 4, xs: 12 }}
          className="bg-[#0ee4be] flex items-center justify-center py-5"
        >
          <Image src={icon} height={100} width={100} alt={icon} />
        </Grid>

        <Grid
          item
          size={{ md: 8, xs: 12 }}
          className="flex items-center justify-center"
        >
          <StyledSliderCard className="p-10">
            <Typography
              variant="h5"
              className="text-default "
              style={{ zIndex: 2 }}
            >
              {name}
            </Typography>
            <br />
            <Typography className="text-default" style={{ zIndex: 2 }}>
              {text}
            </Typography>
          </StyledSliderCard>
        </Grid>
      </Grid>
    </Card>
  );
}