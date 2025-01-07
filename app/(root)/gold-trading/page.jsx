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
import AccountForm from "../../components/accountForm";

import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import GoldIcon from "../../../public/svg-gold-trading/gold.svg";
import AnalyticsIcon from "../../../public/svg-gold-trading/analytics.svg";
import NofeeIcon from "../../../public/svg-gold-trading/nofee.svg";
import AccountIcon from "../../../public/svg-gold-trading/account.svg";
import AuthenticationIcon from "../../../public/svg-gold-trading/authentication.svg";
import ChartIcon from "../../../public/svg-gold-trading/chart.svg";
import CertificateIcon from "../../../public/svg-gold-trading/certificate.svg";
import CashIcon from "../../../public/svg-gold-trading/cash.svg";
import SpeedIcon from "../../../public/svg-gold-trading/speed.svg";
import Mt4Icon from "../../../public/svg-gold-trading/mt4.svg";

import Banner from "./banner";
import StyledGoldCard from "./goldCard";
import StyledWhiteCard from "./whiteCard";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  color: white;
  background-image: url("https://superforex.com/img/gold-trading/hero.jpg");
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -100px;
    height: 100px;
    background: white;
    z-index: 1;
    transform: skewY(-6deg);
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -100px;
    height: 100px;
    background: white;
    z-index: 1;
    transform: skewY(6deg);
  }
`;

const StyledGoldStack = styled.div`
  position: relative;
  color: white;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/bg.jpg?updatedAt=1735640049745");
  background-position: center center;
  background-size: cover;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -100px;
    height: 200px;
    background: white;
    z-index: 1;
    transform: skewY(-6deg);
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -100px;
    height: 200px;
    background: white;
    z-index: 1;
    transform: skewY(-6deg);
  }
`;

const StyledGold1Stack = styled.div`
  position: relative;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/bg.jpg?updatedAt=1735640049745");
  background-position: center center;
  background-size: cover;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -100px;
    height: 200px;
    background: white;
    z-index: 1;
    transform: skewY(-6deg);
  }
`;

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

export default function GoldTrading() {
  const t = useTranslations("GoldTrading");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Banner
        imgDesktop={"/Image/hero-gold.jpg"}
        imgMobile={"/Image/hero-gold-mobile.jpg"}
        titleBanner={t("tradeGoldAndOtherSpotMetals")}
        subTitleBanner={t("easyWayToObtainHighProfit")}
        buttonName={t("register")}
      />

      <div className="md:block hidden">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="my-28 text-default flex flex-col"
        style={{ zIndex: 2 }}
      >
        <p className="font-bold text-center text-4xl">
          {t("aboutGoldTrading")}
        </p>
        <br />
        <Typography>
          {t("aboutGoldTradingDescription1")}
        </Typography>
        <br />
        <Typography>
          {t("aboutGoldTradingDescription2")}
        </Typography>
      </Container>

      <Container
        maxWidth="lg"
        className="my-28 text-default relative"
        style={{ zIndex: 2 }}
      >
        <p className="font-bold text-center text-4xl">
          {t("whyBeginTradingWithGold")}
        </p>
        <Grid container spacing={5} className="my-10">
          <StyledWhiteCard
            size={{ md: 4, sm: 12 }}
            icon={GoldIcon}
            name={t("metalsProfitableToSell")}
            text={t("metalsProfitableToSellDescription")}
          />
          <StyledWhiteCard
            size={{ md: 4, sm: 12 }}
            icon={AnalyticsIcon}
            name={t("goldNoPriceFluctuations")}
            text={t("goldNoPriceFluctuationsDescription")}
          />
          <StyledWhiteCard
            size={{ md: 4, sm: 12 }}
            icon={NofeeIcon}
            name={t("tradingWithoutFees")}
            text={t("tradingWithoutFeesDescription")}
          />
        </Grid>
      </Container>

      <StyledGoldStack>
        <Container
          maxWidth="lg"
          className="text-white py-40 my-28 relative"
          style={{ zIndex: 2 }}
        >
          <p className="font-bold text-center text-4xl">
            {t("howToStart")}
          </p>

          <Grid container spacing={5} className="my-10">
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={AccountIcon}
              step={t("step1")}
              name={t("openRealTradingAccount")}
              text={t("openRealTradingAccountDescription")}
            />
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={AuthenticationIcon}
              step={t("step2")}
              name={t("verifyYourAccount")}
              text={t("verifyYourAccountDescription")}
            />
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={ChartIcon}
              step={t("step3")}
              name={t("startTrading")}
              text={t("startTradingDescription")}
            />
          </Grid>
        </Container>
      </StyledGoldStack>

      <Container
        maxWidth="lg"
        className="my-28 text-default relative"
        style={{ zIndex: 2 }}
      >
        <p className="font-semi-bold text-center text-4xl">
          {t("whyTradersChooseSuperForex")}
        </p>

        <Grid container spacing={5} className="my-10">
          <StyledWhiteCard
            size={{ lg: 3, md: 6, sm: 12 }}
            icon={CertificateIcon}
            name={t("licensedBroker")}
            text={t("licensedBrokerDescription")}
          />
          <StyledWhiteCard
            size={{ lg: 3, md: 6, sm: 12 }}
            icon={CashIcon}
            name={t("initialPayment")}
            text={t("initialPaymentDescription")}
          />
          <StyledWhiteCard
            size={{ lg: 3, md: 6, sm: 12 }}
            icon={SpeedIcon}
            name={t("highSpeedOrderExecution")}
            text={t("highSpeedOrderExecutionDescription")}
          />
          <StyledWhiteCard
            size={{ lg: 3, md: 6, sm: 12 }}
            icon={Mt4Icon}
            name={t("mt4TradingPlatform")}
            text={t("mt4TradingPlatformDescription")}
          />
        </Grid>
      </Container>

      <StyledGold1Stack>
        <Container
          maxWidth="lg"
          className="pb-28 pt-40 relative"
          style={{ zIndex: 2 }}
        >
          <AccountForm
            data={["Standard"]}
            showText={false}
            option={true}
            background
          />
        </Container>
      </StyledGold1Stack>
    </>
  );
}
