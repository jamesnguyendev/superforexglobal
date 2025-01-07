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
import Link from "next/link";

import Button from "../../components/buttonCustomize";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

export default function StyledTable() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      color: "#35465B",
      border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
      color: "#35465B",
      width: "50%",
      // border: 0,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      border: 0,
    },
    // hide last border
    "&:last-child td, &:last-child th ": {
      border: 0,
    },
  }));

  function createData(name, text) {
    return { name, text };
  }

  const rows = [
    createData("Account currency", "USD, EUR"),
    createData("Minimum deposit", "500 USD"),
    createData("Maximum deposit", "50,000 USD"),
    createData("Compatible with bonuses", "No"),
    createData("Lot size", "0.01 lot"),
    createData("Maximum leverage", "1:500"),
    createData("Swaps", "Yes"),
    createData("Spreads", "Fixed"),
    createData("Compatible with Forex Copy", "No"),
  ];

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" className="font-bold">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.text}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
