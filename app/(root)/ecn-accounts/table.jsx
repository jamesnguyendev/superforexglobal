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
      "USD, EUR, GBP, CNY, ZAR, NGN, INR, BRL, JPY, CLP, TZS, KES, GHS, UGX, ZMW, RWF, CZK, SEK, DKK, NOK, HUF, KZT, KRW, COP, TWD",
    ),
    createData("Minimum deposit", "50 USD"),
    createData("Maximum deposit", "Unlimited"),
    createData("Recommended deposit", "500 USD"),
    createData(
      "Compatible with bonuses",
      "Trade And Earn, 30% Bonus, Free Swap",
    ),
    createData("Lot size", "0.01 lot"),
    createData("Maximum leverage", "1:500"),
    createData("Swaps", "Yes"),
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
                <div className="font-bold">{row.name}</div>
              </StyledTableCell>
              <StyledTableCell>{row.text}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// export default function StyledTable() {
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       color: "#35465B",
//       width: "calc(100% / 7)",
//       border: 0,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       color: "#35465B",
//       border: 0,
//     },
//   }));

//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(even)": {
//       backgroundColor: "#f6f9fc",
//       border: 0,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th ": {
//       border: 0,
//     },
//   }));

//   function createData(
//     name,
//     ECNStandard,
//     ECNStandardMini,
//     ECNSwapFree,
//     ECNSwapFreeMini,
//     ECNCrypto
//   ) {
//     return {
//       name,
//       ECNStandard,
//       ECNStandardMini,
//       ECNSwapFree,
//       ECNSwapFreeMini,
//       ECNCrypto,
//     };
//   }

//   const rows = [
//     createData(
//       "Account currency",
//       "USD, EUR, GBP, CNY, ZAR, NGN, INR, BRL, JPY, CLP, TZS, KES, GHS, UGX, ZMW, RWF, CZK, SEK, DKK, NOK, HUF, KZT, KRW, COP, TWD",
//       "USD, EUR, GBP, CNY, MYR, ZAR, NGN, BRL, TZS, KES, GHS, UGX, ZMW, NZD, KRW, COP, TWD",
//       "USD, EUR, GBP, CNY, MYR, IDR, EGP, TRY, CLP, CZK, SEK, DKK, NOK, HUF, KRW, COP, TWD",
//       "USD, EUR, GBP, CNY, MYR, IDR, NGN, TZS, GHS, UGX, ZMW, KZT, KRW, COP, TWD",
//       "TTR, DGE, LTC, BCH"
//     ),
//     createData(
//       "Minimum deposit",
//       "100 USD",
//       "5 USD",
//       "100 USD",
//       "5 USD",
//       "50 USD"
//     ),
//     createData(
//       "Maximum deposit",
//       "Unlimited",
//       "Unlimited",
//       "Unlimited",
//       "Unlimited",
//       "Unlimited"
//     ),
//     createData(
//       "Recommended deposit",
//       "500 USD",
//       "50 USD",
//       "500 USD",
//       "50 USD",
//       "1000 USD"
//     ),
//     createData(
//       "Compatible with bonuses",
//       "Welcome, Energy, Hot",
//       "All bonuses",
//       "Welcome, Energy, Hot",
//       "Welcome, Energy, Hot",
//       "Welcome, Energy, Hot"
//     ),
//     createData(
//       "Lot size",
//       "100,000 USD",
//       "10,000 USD",
//       "100,000 USD",
//       "10,000 cents",
//       "10 BTC / LTC / ZEC / DASH / NEO / EOS / BCH / XMR"
//     ),
//     createData(
//       "Maximum leverage",
//       "1:1000",
//       "1:1000",
//       "1:1000",
//       "1:1000",
//       "1:10"
//     ),
//     createData("Swaps", "Yes", "Yes", "No", "No", "No"),
//     createData(
//       "Spreads",
//       "Floating",
//       "Floating",
//       "Floating",
//       "Floating",
//       "Floating"
//     ),
//     createData("Compatible with Forex Copy", "No", "No", "No", "No", "No"),
//   ];

//   return (
//     <TableContainer>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell></StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">ECN Standard</p>
//               <Link
//                 href={"/ecn-standard-account"}
//                 className="flex justify-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">ECN Standard-Mini</p>
//               <Link
//                 href={"/ecn-standard-mini-account"}
//                 className="flex justify-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">ECN Swap-Free</p>
//               <Link
//                 href={"/ecn-islamic-account"}
//                 className="flex justify-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">ECN Swap-Free Mini</p>
//               <Link
//                 href={"/ecn-islamic-mini-account"}
//                 className="flex justify-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//             <StyledTableCell align="center">
//               <p className="font-bold mb-3">ECN Crypto</p>
//               <Link
//                 href={"/ecn-crypto-account"}
//                 className="flex justify-center"
//               >
//                 <Button name={"More info"} />
//               </Link>
//             </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <StyledTableRow key={index}>
//               <StyledTableCell component="th" scope="row" className="font-bold">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 {row.ECNStandard}
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 {row.ECNStandardMini}
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 {row.ECNSwapFree}
//               </StyledTableCell>
//               <StyledTableCell align="center">
//                 {row.ECNSwapFreeMini}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.ECNCrypto}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
