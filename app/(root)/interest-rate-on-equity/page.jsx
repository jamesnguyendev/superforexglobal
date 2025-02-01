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
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";
import Link from "next/link";

import Button from "../../components/buttonCustomize";
import AccountForm from "../../components/accountForm";
import Svg1 from "../../../public/svg-interest-rate-on-equity/1.svg";
import Svg2 from "../../../public/svg-interest-rate-on-equity/2.svg";
import Svg3 from "../../../public/svg-interest-rate-on-equity/3.svg";

import Banner from "./banner";

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

const StyledGold1Stack = styled.div`
  position: relative;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
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

const StyledWhiteCard = ({ size, icon, name, text }) => {
  return (
    <Grid
      item
      size={size}
      className="text-default rounded-xl shadow-2xl bg-white"
    >
      <div
        className="flex justify-center items-center rounded-xl"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/3idyffxxb/New%20Folder/gray.svg?updatedAt=1735639943012')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Image
          src={icon}
          width={120}
          height={120}
          alt={icon}
          className="rounded-full my-10 bg-white shadow-2xl"
        />
      </div>
      <div className="text-center p-5">
        <div className="font-semi-bold text-2xl mb-5">{name}</div>
        <p>{text}</p>
      </div>
    </Grid>
  );
};

export default function InterestRateOnEquity() {
  const t = useTranslations("InterestRateOnEquity");

  return (
    <>
      <Banner
        imgDesktop={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero%20(3).jpg?updatedAt=1735646087160"
        }
        imgMobile={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero-mobile%20(3).jpg?updatedAt=1735646087091"
        }
        titleBanner={t("interestRateOnEquity")}
        subTitleBanner={t("freeMoneyGenerateIncome")}
      />

      <div className="sm:block">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="my-28 text-default relative"
        style={{ zIndex: 2, display: "flex", flexDirection: "column" }}
      >
        <p className="text-4xl font-semi-bold">{t("aboutThisService")}</p>
        <br />
        <p>{t("aboutThisServiceDescription")}</p>
        <br />

        <p className="text-4xl font-semi-bold">{t("advantagesOfTheService")}</p>

        <Grid container spacing={4} className="text-default" paddingY={10}>
          <StyledWhiteCard
            size={{ xs: 12, sm: 4 }}
            icon={Svg1}
            name={t("freeMargin")}
            text={t("freeMarginDescription")}
          />
          <StyledWhiteCard
            size={{ xs: 12, sm: 4 }}
            icon={Svg2}
            name={t("passiveService")}
            text={t("passiveServiceDescription")}
          />
          <StyledWhiteCard
            size={{ xs: 12, sm: 4 }}
            icon={Svg3}
            name={t("proportionalProfit")}
            text={t("proportionalProfitDescription")}
          />
        </Grid>

        <p className="text-4xl font-semi-bold">{t("conditions")}</p>
        <br />
        <p>{t("conditionsDescription")}</p>
        <br />
        <p className="text-4xl font-semi-bold">{t("formula")}</p>
        <br />
        <div className="flex gap-5">
          <p>{t("formulaDescription")}</p>
          <Chip
            label={t("formulaCalculation")}
            size="small"
            style={{ backgroundColor: "#aff3c7", fontWeight: 600 }}
          />
        </div>
      </Container>

      <Container maxWidth="lg" className="my-28 text-default relative">
        <p>{t("openAccountPrompt")}</p>
        <br />
        <a href={"https://my.superforex.global/register"} target="_blank">
          <Button name={t("openAccount")} background={true} />
        </a>
      </Container>
    </>
  );
}
