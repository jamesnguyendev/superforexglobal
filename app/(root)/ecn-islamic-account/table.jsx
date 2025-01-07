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
import AccountForm from "../../components/accountForm";

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
    createData(
      "Account currency",
      "USD, EUR, GBP, CNY, MYR, IDR, EGP, TRY, CLP, CZK, SEK, DKK, NOK, HUF, KRW, COP, TWD",
    ),
    createData("Minimum deposit", "100 USD"),
    createData("Maximum deposit", "Unlimited"),
    createData("Recommended deposit", "500 USD"),
    createData("Compatible with bonuses", "Welcome, Energy, Hot"),
    createData("Lot size", "100,000 USD"),
    createData("Maximum leverage", "1:1000"),
    createData("Swaps", "No"),
    createData("Spreads", "Floating"),
    createData("Compatible with Forex Copy", "No"),
  ];

  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <div className="font-bold">
                  {row.name}
                </div>
              </StyledTableCell>
              <StyledTableCell>{row.text}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}