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

export default function StyledGrid3({ name, text }) {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Stack
        className="text-center flex flex-col items-center text-default"
        style={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p className="font-bold pb-3 text-4xl">
          {name}
        </p>

        <Typography>{text}</Typography>
      </Stack>
    </Grid>
  );
}