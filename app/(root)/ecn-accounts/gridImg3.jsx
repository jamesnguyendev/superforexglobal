"use client";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Stack,
  Typography,
  Card,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  tableCellClasses,
  Modal,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

import Banner from "../../components/banner";
import Button from "../../components/buttonCustomize";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import AccountForm from "../../components/accountForm";

export default function StyledGridImg3({ name, text, img }) {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      className="rounded-lg border-solid border-2 border-sky-light_grey hover:shadow-2xl"
    >
      <div
        className="text-default"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: 1,
        }}
      >
        <img src={img} alt={img} className="my-5" />
        <p className="font-bold mb-5 mx-3 text-xl flex-grow">{name}</p>
        <p className="mb-5 mx-5 flex-grow">{text}</p>
      </div>
    </Grid>
  );
}