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

import StyledTable from "./table";

import { useTranslations } from "next-intl";

const depositBankWire = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bank-wire-transfer.svg?updatedAt=1735643190883",
    text1: "All",
    text2: "No commission",
    text3: "2 - 4 business days",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bank-wire-transfer-sa.svg?updatedAt=1735643190731",
    text1: "ZAR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bank-wire-transfer-asia.svg?updatedAt=1735643191013",
    text1: "IDR, MYR, THB, VND",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/banktransfer-brl-mxn.svg?updatedAt=1735643190924",
    text1: "BRL, MXN",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositCreditDebit = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/visa.svg?updatedAt=1735643191085",
    text1: "All",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/mastercard.svg?updatedAt=1735643193984",
    text1: "All",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/union-pay.svg?updatedAt=1735643196972",
    text1: "CNY",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositElectronic = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/skrill.svg?updatedAt=1735643194326",
    text1: "USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/sticpay.svg?updatedAt=1735643195021",
    text1: "USD",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/neteller.svg?updatedAt=1735643194177",
    text1: "USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/triv.svg?updatedAt=1735643196813",
    text1: "IDR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/fasa-pay.svg?updatedAt=1735643190767",
    text1: "USD, IDR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/perfect-money.svg?updatedAt=1735643194220",
    text1: "USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/0014244_enimo.png?updatedAt=1738742314155",
    text1: "USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/online-naira.svg?updatedAt=1735643194625",
    text1: "NGN",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bitwallet.svg?updatedAt=1735643190914",
    text1: "JPY, USD, EUR",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/astropay.svg?updatedAt=1735643191110",
    text1: "USD",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/mpesa.svg?updatedAt=1735643193829",
    text1: "KES",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/mpesa-airtel.svg?updatedAt=1735643194326",
    text1: "TZS",
    text2: "No commission",
    text3: "Instant",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/zamtel-vodacome.svg?updatedAt=1735643190771",
    text1: "ZMW",
    text2: "No commission",
    text3: "Instant",
  },
];

const depositCryptocurrencies = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/coins.svg?updatedAt=1735643190813",
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
];

const depositSuperforex = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/super-forex-money.svg?updatedAt=1735643194093",
    text1: "USD, MYR, IDR",
    text2: "No commission, Discount +7%",
    text3: "Instant",
  },
];

const withdrawlBankWire = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bank-wire-transfer.svg?updatedAt=1735643190883",
    text1: "All",
    text2: "3% + 35 USD",
    text3: "2 - 4 business days",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bank-wire-transfer-sa.svg?updatedAt=1735643190731",
    text1: "ZAR",
    text2: "From 1.4% to 3.8%",
    text3: "2 - 4 business days",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bank-wire-transfer-asia.svg?updatedAt=1735643191013",
    text1: "IDR, MYR, THB, VND",
    text2: "3.00%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/banktransfer-brl-mxn.svg?updatedAt=1735643190924",
    text1: "BRL, MXN",
    text2: "5%",
    text3: "2 - 4 business days",
  },
];

const withdrawlCreditDebit = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/visa.svg?updatedAt=1735643191085",
    text1: "All",
    text2: "3% + 10 USD",
    text3: "2 - 4 business days",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/mastercard.svg?updatedAt=1735643193984",
    text1: "All",
    text2: "3% + 10 USD",
    text3: "2 - 4 business days",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/union-pay.svg?updatedAt=1735643196972",
    text1: "CNY",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
];

const withdrawlElectronic = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/skrill.svg?updatedAt=1735643194326",
    text1: "USD, EUR",
    text2: "20 < USD min fees is 2 USD or 2 EUR or 2 GBP, 20 > USD fees is 5%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/sticpay.svg?updatedAt=1735643195021",
    text1: "USD",
    text2: "5.5%",
    text3: "2 - 4 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/neteller.svg?updatedAt=1735643194177",
    text1: "USD, EUR",
    text2:
      "if amount less than 40 USD min fees is 2 USD or 2 EUR or 2 GBP, if amount more than 40 USD fees is 5%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/triv.svg?updatedAt=1735643196813",
    text1: "IDR",
    text2: "0.5% if amount < 100 USD, 5% if amount > 100 USD",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/fasa-pay.svg?updatedAt=1735643190767",
    text1: "USD, IDR",
    text2: "0.5%",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/perfect-money.svg?updatedAt=1735643194220",
    text1: "USD, EUR",
    text2: "2 USD if amount < 50 USD, 5% if amount > 50 USD",
    text3: "1 - 3 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/online-naira.svg?updatedAt=1735643194625",
    text1: "NGN",
    text2: "2%",
    text3: "2 - 4 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/bitwallet.svg?updatedAt=1735643190914",
    text1: "JPY, USD, EUR",
    text2: "100 JPY + 1%",
    text3: "2 - 4 business hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/astropay.svg?updatedAt=1735643191110",
    text1: "USD",
    text2: "2 USD + 5%",
    text3: "2 - 4 business days",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/mpesa.svg?updatedAt=1735643193829",
    text1: "KES",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/mpesa-airtel.svg?updatedAt=1735643194326",
    text1: "TZS",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/mtn.svg?updatedAt=1735643193890",
    text1: "UGX, GHS, RWF",
    text2: "3%",
    text3: "1 - 4 working hours",
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/zamtel-vodacome.svg?updatedAt=1735643190771",
    text1: "ZMW",
    text2: "0%",
    text3: "1 - 4 working hours",
  },
];

const withdrawlCryptocurrencies = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/coins.svg?updatedAt=1735643190813",
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
];

const withdrawlSuperforex = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/deposit/super-forex-money.svg?updatedAt=1735643194093",
    text1: "USD, MYR, IDR",
    text2: "No commission",
    text3: "1 - 3 business days",
  },
];

export default function DepositAndWithdrawal() {
  const t = useTranslations("DepositAndWithdrawal");
  const [tab, setTab] = useState("deposit");

  return (
    <div className="text-default">
      <Stack
        className="relative py-12"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/3idyffxxb/New%20Folder/default.svg?updatedAt=1735634159546')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h4" color="white" className="px-2">
            {t("depositsAndWithdrawals")}
          </Typography>
        </Container>
      </Stack>

      <Container maxWidth="lg" className="my-10">
        <Typography>{t("depositsAndWithdrawalsDescription1")}</Typography>
        <br />
        <Typography>{t("depositsAndWithdrawalsDescription2")}</Typography>
        <br />
        <Typography>
          {t("informationOnTransactionFees")}
          <br />
          {t("noAdditionalFees")}
        </Typography>
        <br />
        <Typography>{t("accessAccountHere")}</Typography>

        <Stack direction="row" spacing={5} className="my-10">
          <Button name={t("makeADeposit")} background />
          <Button name={t("openAccount")} />
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          className=""
        >
          <p
            onClick={() => setTab("deposit")}
            className={`p-1 px-4 font-semi-bold rounded-full cursor-pointer hover:text-grey ${
              tab == "deposit"
                ? "bg-default text-white hover:text-white"
                : "bg-white"
            }`}
          >
            {t("deposit")}
          </p>
          <p
            onClick={() => setTab("withdrawl")}
            className={`p-1 px-4 font-semi-bold rounded-full cursor-pointer hover:text-grey ${
              tab == "withdrawl"
                ? "bg-default text-white hover:text-white"
                : "bg-white"
            }`}
          >
            {t("withdrawal")}
          </p>
        </Stack>
        <div className="border-2 rounded-xl my-5">
          <p className="font-semi-bold text-center mt-5 mb-3 text-2xl">
            {t("bankWireTransfers")}
          </p>
          <StyledTable
            rows={tab == "deposit" ? depositBankWire : withdrawlBankWire}
          />
          <p className="font-semi-bold text-center mt-5 mb-3 text-2xl">
            {t("creditDebitCards")}
          </p>
          <StyledTable
            rows={tab == "deposit" ? depositCreditDebit : withdrawlCreditDebit}
          />
          <p className="font-semi-bold text-center mt-5 mb-3 text-2xl">
            {t("electronicPayments")}
          </p>
          <StyledTable
            rows={tab == "deposit" ? depositElectronic : withdrawlElectronic}
          />
          <p className="font-semi-bold text-center mt-5 mb-3 text-2xl">
            {t("cryptocurrencies")}
          </p>
          <StyledTable
            rows={
              tab == "deposit"
                ? depositCryptocurrencies
                : withdrawlCryptocurrencies
            }
          />
          <p className="font-semi-bold text-center mt-5 mb-3 text-2xl">
            {t("localPayments")}
          </p>
          <StyledTable
            rows={tab == "deposit" ? depositLocal : withdrawlLocal}
            country
          />
        </div>

        <Link
          href={
            "https://res.superfx.online/upload/documents/how-to-deposit-and-withdraw-money.pdf"
          }
          target="_blank"
        >
          <Stack
            direction={"row"}
            spacing={1}
            className="hover:text-light_grey cursor-pointer"
          >
            <TextSnippetIcon />
            <Typography>{t("howToDepositAndWithdrawMoney")}</Typography>
          </Stack>
        </Link>
      </Container>
    </div>
  );
}
