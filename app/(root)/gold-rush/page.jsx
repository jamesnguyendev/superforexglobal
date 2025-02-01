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

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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

export default function GoldRush() {
  const t = useTranslations("GoldRush");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Banner
        imgDesktop={"https://superforex.com/img/gold-rush/hero.jpg"}
        imgMobile={"https://superforex.com/img/gold-rush/hero-mobile.jpg"}
        titleBanner={t("goldRush")}
        subTitleBanner={t("demoCompetition")}
        buttonName={t("joinContest")}
        link={"https://my.superforex.global/login"}
        blank
      />

      <div className="sm:block">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="my-28 text-default flex flex-col relative"
        style={{ zIndex: 2 }}
      >
        <div className="rounded-lg shadow-lg max-w-lg border-2 border-[#e0e3eb] relative self-center text-center">
          <div className="bg-[#2c3238] text-white rounded-t-lg p-3">
            <Typography variant="h6" className="font-semi-bold">
              {t("goldenRushRound129")}
            </Typography>
          </div>
          <div className="p-3">
            <Typography variant="h4" className="font-semi-bold">
              {t("june24ToJuly31")}
            </Typography>
          </div>
          <div className="p-3">{t("registerNow")}</div>
        </div>

        <br />

        <Typography variant="h4" className="font-semi-bold">
          {t("aboutContest")}
        </Typography>
        <br />
        <Typography>{t("aboutContestDescription1")}</Typography>
        <br />
        <Typography>{t("aboutContestDescription2")}</Typography>

        <br />

        <div className="rounded-lg shadow-lg max-w-md border-2 border-[#e0e3eb] relative self-center text-center">
          <div className="bg-[#2c3238] text-white rounded-t-lg p-3">
            <Typography variant="h6" className="font-semi-bold">
              {t("allPrizes")}
            </Typography>
          </div>
          <div className="flex border-b-2 border-[#e0e3eb]">
            <p className="p-3 px-5">{t("firstPlace")}</p>
            <p className="p-3 px-5">100$</p>
          </div>
          <div className="flex border-b-2 border-[#e0e3eb]">
            <p className="p-3 px-5">{t("secondPlace")}</p>
            <p className="p-3 px-5">50$</p>
          </div>
          <div className="flex border-b-2 border-[#e0e3eb]">
            <p className="p-3 px-5">{t("thirdPlace")}</p>
            <p className="p-3 px-5">30$</p>
          </div>
        </div>

        <br />

        <Typography variant="h4" className="font-semi-bold">
          {t("goalOfTheContest")}
        </Typography>
        <br />
        <Typography>{t("goalOfTheContestDescription")}</Typography>
        <br />

        <Typography variant="h4" className="font-semi-bold">
          {t("choosingAWinner")}
        </Typography>
        <br />
        <Typography>{t("choosingAWinnerDescription")}</Typography>
        <br />

        <Typography variant="h4" className="font-semi-bold">
          {t("howToStart")}
        </Typography>
        <br />
        <Typography>{t("howToStartDescription")}</Typography>

        <br />

        <div className="flex">
          <Link href={"https://my.superforex.global/login"} target="_blank">
            <Button background={true} name={t("beginAdventure")} />
          </Link>
        </div>
      </Container>

      <StyledGold1Stack>
        <Container
          maxWidth="lg"
          className="pb-16 pt-16 relative text-default"
          style={{ zIndex: 2 }}
        >
          <div className="rounded-lg shadow-lg border-2 border-[#e0e3eb] bg-white p-5 mb-20">
            <p>{t("noted")}</p>
            <br />
            <p>{t("prizeBasedOnNoDepositBonus")}</p>
            <br />
            <p>{t("winUpToTwoTimes")}</p>
          </div>
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
