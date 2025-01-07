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
  tableCellClasses,
  Modal,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "../../components/buttonCustomize";
import AccountForm from "../../components/accountForm";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function StyledGridImg3({ name, text, img }) {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      className="rounded-lg border-solid border-2 border-sky-light_grey hover:shadow-2xl"
      style={{ justifyContent: "space-between" }}
    >
      <Stack
        className="text-default"
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img src={img} alt={img} className="m-10" />

        <Typography variant="h5" className="font-bold mb-3 mx-3">
          {name}
        </Typography>

        <Typography className="mb-3 mx-3">{text}</Typography>
      </Stack>
    </Grid>
  );
}