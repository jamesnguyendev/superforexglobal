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

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CommissionIcon from "../../../public/svg-cryptocurrencies/commission.svg";
import DiscountsIcon from "../../../public/svg-cryptocurrencies/discounts.svg";
import FixedIcon from "../../../public/svg-cryptocurrencies/fixed.svg";
import AccountForm from "../../components/accountForm";

import Banner from "./banner";
import StyledGrid3 from "./grid3";
import StyledCard from "./card";
import StyledIconCard from "./iconCard";
import CardItem from "./cardItem";

import { useTranslations } from "next-intl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function Cryptocurrency() {
  const t = useTranslations("Crytocurrencies");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Banner
        imgDesktop={"/Image/hero-cryto-desktop.png"}
        imgMobile={"/Image/hero-crypto-mobile.webp"}
        titleBanner={t("cryptocurrencyTradingOnMT4")}
        buttonName={t("openAccount")}
        textBannerColor
      />

      <Container
        maxWidth="lg"
        className="my-28 text-default flex flex-col items-center"
      >
        <p className="max-w-4xl font-bold text-center text-5xl">
          {t("whyTradingCryptocurrenciesWithSuperForexProfitable")}
        </p>

        <Grid container spacing={5} className="mt-10">
          <StyledCard
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/trading-for-all.jpg?updatedAt=1735631471652"
            }
            name={t("tradingForAll")}
            text={t("tradingForAllDescription")}
          />
          <StyledCard
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/security-and-safety.jpg?updatedAt=1735636934927"
            }
            name={t("securityAndSafety")}
            text={t("securityAndSafetyDescription")}
          />
          <StyledCard
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-trading-instruments.jpg?updatedAt=1735631477392"
            }
            name={t("metaTrader4Platform")}
            text={t("metaTrader4PlatformDescription")}
          />
          <StyledCard
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/trusted-payment-methods.jpg?updatedAt=1735631471446"
            }
            name={t("trustedPaymentMethods")}
            text={t("trustedPaymentMethodsDescription")}
          />
        </Grid>
      </Container>

      <div className="bg-[#f6f9fc] pt-28">
        <Container maxWidth="lg" className="text-default">
          <Grid container spacing={10} className="justify-center items-center">
            <Grid item size={{ sm: 12, md: 6 }}>
              <p className="font-bold text-5xl">
                {t("selectUSDTOrDOGE")}
              </p>
              <br />
              <Typography>
                {t("selectUSDTOrDOGEDescription")}
              </Typography>
              <br />
              <Button name={t("openAccount")} background />
            </Grid>
            <Grid
              item
              size={{ sm: 12, md: 6 }}
              className="items-center"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={
                  "https://ik.imagekit.io/3idyffxxb/New%20Folder/tether-doge.png?updatedAt=1735638898059"
                }
                alt={"img"}
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container className="my-28">
        <div className={"grid grid-cols-1 items-center gap-24 lg:grid-cols-2"}>
          <span className="flex justify-center">
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/bitcoin.png?updatedAt=1735638675704"
              loading="lazy"
              width="446"
              height="462"
              decoding="async"
              data-nimg="1"
              className=""
              alt="background round"
            />
          </span>
          <div className="flex flex-col items-start gap-y-6">
            <h2 className={"text-5xl font-semibold text-default"}>
              {t("whatIsBitcoin")}
            </h2>
            <p className={"m-0 font-normal text-default"}>
              <span className="font-bold">Bitcoin&nbsp;</span>
              {t("whatIsBitcoinDescription1")}
            </p>
            <p className={"m-0 font-normal text-default"}>
              {t("whatIsBitcoinDescription2")}
            </p>
            <p className={"m-0 font-normal text-default"}>
              {t("whatIsBitcoinDescription3")}
            </p>
            <p className={"m-0 font-normal text-lg text-default"}>
              {t("mainBitcoinFeatures")}
            </p>
            <div className="flex flex-col gap-y-2">
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 font-sohne text-sm font-semibold text-default">
                  {t("firstAndMostPopularCryptocurrency")}
                </div>
              </div>
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 text-sm font-semibold text-default">
                  {t("highVolatilityProfitableTrades")}
                </div>
              </div>
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 text-sm font-semibold text-default">
                  {t("suitableInstrumentForDayTrading")}
                </div>
              </div>
              <div className="inline-flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  className="mt-[2px] shrink-0 text-primary"
                >
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <div className="ms-2 text-sm font-semibold text-default">
                  {t("canBeTradedViaMT4")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#f6f9fc] py-28">
        <Container
          maxWidth="lg"
          className="text-default flex flex-col items-center"
        >
          <p className="max-w-4xl font-bold text-center text-5xl">
            {t("forexBrokerSupportsCryptocurrencyTrading")}
          </p>
          <Grid container spacing={5} className="mt-10">
            <StyledIconCard
              icon={CommissionIcon}
              name={t("noCommission")}
              text={t("noCommissionDescription")}
            />
            <StyledIconCard
              icon={DiscountsIcon}
              name={t("hugeSpreadDiscounts")}
              text={t("hugeSpreadDiscountsDescription")}
            />
            <StyledIconCard
              icon={FixedIcon}
              name={t("fixedSpread")}
              text={t("fixedSpreadDescription")}
            />
          </Grid>
        </Container>
      </div>

      <Container maxWidth="lg" className="my-28">
        <AccountForm
          data={["Crypto", "ECN Crypto"]}
          showText={true}
          option={true}
          title={t("openLiveAccountToStartTradingCrypto")}
        />
      </Container>

      <div className="bg-[#f6f9fc] py-28">
        <Container maxWidth="lg" className="text-default">
          <p className="font-bold mb-10 text-center text-5xl">
            {t("frequentlyAskedQuestions")}
          </p>
          <CardItem
            ques={t("whatIsOnlineTradingAccount")}
            ans={t("whatIsOnlineTradingAccountDescription")}
          />
          <CardItem
            ques={t("howToOpenForexTradingAccount")}
            ans={t("howToOpenForexTradingAccountDescription")}
          />
          <CardItem
            ques={t("whatMarketsCanIAccessAfterOpeningAccount")}
            ans={t("whatMarketsCanIAccessAfterOpeningAccountDescription")}
          />
        </Container>
      </div>
    </>
  );
}
