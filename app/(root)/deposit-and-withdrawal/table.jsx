"use client";
import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Button from "../../components/buttonCustomize";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

import { useTranslations } from "next-intl";

const depositBankWire = [
  {
    img: "https://superforex.com/img/temp-payment-systems/bank-wire-transfer.svg",
    text1: "All",
    text2: "No commission",
    text3: "2 - 4 business days",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/bank-wire-transfer-sa.svg",
    text1: "ZAR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/bank-wire-transfer-asia.svg",
    text1: "IDR, MYR, THB, VND",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/banktransfer-brl-mxn.svg",
    text1: "BRL, MXN",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositCreditDebit = [
  {
    img: "https://superforex.com/img/temp-payment-systems/visa.svg",
    text1: "All",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mastercard.svg",
    text1: "All",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/union-pay.svg",
    text1: "CNY",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositElectronic = [
  {
    img: "https://superforex.com/img/temp-payment-systems/skrill.svg",
    text1: "USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/sticpay.svg",
    text1: "USD",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/neteller.svg",
    text1: "USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/triv.svg",
    text1: "IDR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/fasa-pay.svg",
    text1: "USD, IDR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/perfect-money.svg",
    text1: "USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/online-naira.svg",
    text1: "NGN",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/bitwallet.svg",
    text1: "JPY, USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/astropay.svg",
    text1: "USD",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mpesa.svg",
    text1: "KES",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mpesa-airtel.svg",
    text1: "TZS",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mtn.svg",
    text1: "UGX, GHS, RWF",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/zamtel-vodacome.svg",
    text1: "ZMW",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositCryptocurrencies = [
  {
    img: "https://superforex.com/img/temp-payment-systems/coins.svg",
    text1: "BTC, LTC, DOGE, PPC, DASH, RDD, ZEC, BLK, USDT",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositLocal = [
  {
    img: "/Image/flags/malaysia.webp",
    country: "Malaysia",
    text1: "MYR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "/Image/flags/indonesia.webp",
    country: "Indonesia",
    text1: "IDR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "/Image/flags/nigerian.webp",
    country: "Nigeria",
    text1: "NGN",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "/Image/flags/kenya.webp",
    country: "Kenya",
    text1: "KES",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "/Image/flags/zimbabwe.webp",
    country: "Zimbabwe",
    text1: "ZWD",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "/Image/flags/namibia.webp",
    country: "Namibia",
    text1: "NAD",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "/Image/flags/iran.webp",
    country: "Iran",
    text1: "IRR",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositSuperforex = [
  {
    img: "https://superforex.com/img/temp-payment-systems/super-forex-money.svg",
    text1: "USD, MYR, IDR",
    text2: "No commission, Discount +7%",
    text3: "Instant",
  },
];

const withdrawlBankWire = [
  {
    img: "https://superforex.com/img/temp-payment-systems/bank-wire-transfer.svg",
    text1: "All",
    text2: "3% + 35 USD",
    text3: "2 - 4 business days",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/bank-wire-transfer-sa.svg",
    text1: "ZAR",
    text2: "From 1.4% to 3.8%",
    text3: "2 - 4 business days",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/bank-wire-transfer-asia.svg",
    text1: "IDR, MYR, THB, VND",
    text2: "3.00%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/banktransfer-brl-mxn.svg",
    text1: "BRL, MXN",
    text2: "5%",
    text3: "2 - 4 business days",
  },
];

const withdrawlCreditDebit = [
  {
    img: "https://superforex.com/img/temp-payment-systems/visa.svg",
    text1: "All",
    text2: "3% + 10 USD",
    text3: "2 - 4 business days",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mastercard.svg",
    text1: "All",
    text2: "3% + 10 USD",
    text3: "2 - 4 business days",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/union-pay.svg",
    text1: "CNY",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
];

const withdrawlElectronic = [
  {
    img: "https://superforex.com/img/temp-payment-systems/skrill.svg",
    text1: "USD, EUR",
    text2: "20 < USD min fees is 2 USD or 2 EUR or 2 GBP, 20 > USD fees is 5%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/sticpay.svg",
    text1: "USD",
    text2: "5.5%",
    text3: "2 - 4 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/neteller.svg",
    text1: "USD, EUR",
    text2:
      "if amount less than 40 USD min fees is 2 USD or 2 EUR or 2 GBP, if amount more than 40 USD fees is 5%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/triv.svg",
    text1: "IDR",
    text2: "0.5% if amount < 100 USD, 5% if amount > 100 USD",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/fasa-pay.svg",
    text1: "USD, IDR",
    text2: "0.5%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/perfect-money.svg",
    text1: "USD, EUR",
    text2: "2 USD if amount < 50 USD, 5% if amount > 50 USD",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/online-naira.svg",
    text1: "NGN",
    text2: "2%",
    text3: "2 - 4 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/bitwallet.svg",
    text1: "JPY, USD, EUR",
    text2: "100 JPY + 1%",
    text3: "2 - 4 business hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/astropay.svg",
    text1: "USD",
    text2: "2 USD + 5%",
    text3: "2 - 4 business days",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mpesa.svg",
    text1: "KES",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mpesa-airtel.svg",
    text1: "TZS",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/mtn.svg",
    text1: "UGX, GHS, RWF",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
  {
    img: "https://superforex.com/img/temp-payment-systems/zamtel-vodacome.svg",
    text1: "ZMW",
    text2: "0%",
    text3: "1 - 4 working hours",
  },
];

const withdrawlCryptocurrencies = [
  {
    img: "https://superforex.com/img/temp-payment-systems/coins.svg",
    text1: "BTC, LTC, DOGE, PPC, DASH, RDD, ZEC, BLK, USDT",
    text2: "3 USD + 5%",
    text3: "1 - 3 business hours",
  },
];

const withdrawlLocal = [
  {
    img: "/Image/flags/malaysia.webp",
    country: "Malaysia",
    text1: "MYR",
    text2: "Local bank wire fee",
    text3: "1 - 3 business hours",
  },
  {
    img: "/Image/flags/indonesia.webp",
    country: "Indonesia",
    text1: "IDR",
    text2: "Local bank wire fee",
    text3: "1 - 3 business hours",
  },
  {
    img: "/Image/flags/nigerian.webp",
    country: "Nigeria",
    text1: "NGN",
    text2: "Local bank wire fee",
    text3: "1 - 3 business hours",
  },
  {
    img: "/Image/flags/kenya.webp",
    country: "Kenya",
    text1: "KES",
    text2: "Local bank wire fee",
    text3: "1 - 3 business hours",
  },
  {
    img: "/Image/flags/zimbabwe.webp",
    country: "Zimbabwe",
    text1: "ZWD",
    text2: "Local bank wire fee",
    text3: "1 - 3 business hours",
  },
  {
    img: "/Image/flags/namibia.webp",
    country: "Namibia",
    text1: "NAD",
    text2: "Local bank wire fee",
    text3: "1 - 3 business hours",
  },
  {
    img: "/Image/flags/iran.webp",
    country: "Iran",
    text1: "IRR",
    text2: "Local bank wire fee",
    text3: "1 - 3 business hours",
  },
];

const withdrawlSuperforex = [
  {
    img: "https://superforex.com/img/temp-payment-systems/super-forex-money.svg",
    text1: "USD, MYR, IDR",
    text2: "No commission",
    text3: "1 - 3 business days",
  },
];

export default function StyledTable({ rows, country }) {
  const t = useTranslations("DepositAndWithdrawal");
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650, color: "#35465B" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: "25%"}}>
              <p className="text-default font-bold">
                {t("paymentSystem")}
              </p>
            </TableCell>
            <TableCell sx={{width: "25%"}}>
              <p className="text-default font-bold">
                {t("transferCurrencies")}
              </p>
            </TableCell>
            <TableCell sx={{width: "25%"}}>
              <p className="text-default font-bold">
                {t("commissionsAndFees")}
              </p>
            </TableCell>
            <TableCell sx={{width: "25%"}}>
              <p className="text-default font-bold">
                {t("processingTime")}
              </p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                {country ? (
                  <Image src={row.img} height={24} width={24} alt={row.img} />
                ) : (
                  <Image src={row.img} height={48} width={100} alt={row.img} />
                )}
              </TableCell> */}
              {country ? (
                <TableCell className="text-default" component="th" scope="row">
                  <Stack direction={"row"} spacing={2}>
                    <img src={row.img} height={24} width={24} alt={row.img} />
                    <Typography>{row.country}</Typography>
                  </Stack>
                </TableCell>
              ) : (
                <TableCell className="text-default">
                  <img src={row.img} height={48} width={100} alt={row.img} />
                </TableCell>
              )}
              <TableCell className="text-default">{row.text1}</TableCell>
              <TableCell className="text-default">{row.text2}</TableCell>
              <TableCell className="text-default">{row.text3}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}