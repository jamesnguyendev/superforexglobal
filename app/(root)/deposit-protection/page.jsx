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
import Svg1 from "../../../public/svg-deposit-protection/1.svg";
import Svg2 from "../../../public/svg-deposit-protection/2.svg";
import Svg3 from "../../../public/svg-deposit-protection/3.svg";
import Svg4 from "../../../public/svg-deposit-protection/4.svg";

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
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735633964340");
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

const StyledWhiteCard = ({ size, icon, name }) => {
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
          width={88}
          height={88}
          alt={icon}
          className="rounded-full my-10 bg-white shadow-2xl"
        />
      </div>
      <div className="text-center p-5">
        <div className="font-semi-bold text-2xl mb-5">{name}</div>
      </div>
    </Grid>
  );
};

export default function DepositProtection() {
  const t = useTranslations("DepositProtection");

  return (
    <>
      <Banner
        imgDesktop={"https://ik.imagekit.io/3idyffxxb/New%20Folder/hero%20(2).jpg?updatedAt=1735645925417"}
        imgMobile={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero-mobile%20(2).jpg?updatedAt=1735645925475"
        }
        titleBanner={t("depositProtectionProgram")}
        subTitleBanner={t("saveYourMoney")}
        buttonName={t("makeADeposit")}
      />

      <div className="sm:block">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="my-28 text-default relative"
        style={{ zIndex: 2, display: "flex", flexDirection: "column" }}
      >
        <p className="text-4xl font-semi-bold">{t("aboutDepositProtection")}</p>
        <br />
        <p>{t("aboutDepositProtectionDescription")}</p>

        <div className="rounded-lg bg-white text-default shadow-2xl w-full max-w-xl self-center my-10">
          <div className="bg-default h-2 rounded-t-lg"></div>
          <div className="p-5 mx-5 flex gap-10">
            <p className="w-5/12">{t("protectionDuration1")}</p>
            <p>{t("protectionDuration1Day")}</p>
          </div>
          <div className="p-5 mx-5 border-t-2 border-[#e1e4e8] flex gap-10">
            <p className="w-5/12">{t("protectionDuration2")}</p>
            <p>{t("protectionDuration2Day")}</p>
          </div>
          <div className="p-5 mx-5 border-t-2 border-[#e1e4e8] flex gap-10">
            <p className="w-5/12">{t("protectionDuration3")}</p>
            <p>{t("protectionDuration3Day")}</p>
          </div>
          <div className="p-5 mx-5 border-t-2 border-[#e1e4e8] flex gap-10">
            <p className="w-5/12">{t("protectionDuration4")}</p>
            <p>{t("protectionDuration4Day")}</p>
          </div>
          <div className="p-5 mx-5 border-t-2 border-[#e1e4e8] flex gap-10">
            <p className="w-5/12">{t("protectionDuration5")}</p>
            <p>{t("protectionDuration5Day")}</p>
          </div>
        </div>

        <p>{t("extendProtection")}</p>

        <br />

        <p className="text-4xl font-semi-bold">
          {t("advantagesOfDepositProtectionProgram")}
        </p>

        <Grid container spacing={4} className="text-default" paddingY={10}>
          <StyledWhiteCard
            size={{ xs: 12, sm: 6, md: 3 }}
            icon={Svg1}
            name={t("advantage1")}
          />
          <StyledWhiteCard
            size={{ xs: 12, sm: 6, md: 3 }}
            icon={Svg2}
            name={t("advantage2")}
          />
          <StyledWhiteCard
            size={{ xs: 12, sm: 6, md: 3 }}
            icon={Svg3}
            name={t("advantage3")}
          />
          <StyledWhiteCard
            size={{ xs: 12, sm: 6, md: 3 }}
            icon={Svg4}
            name={t("advantage4")}
          />
        </Grid>

        <p className="text-4xl font-semi-bold">{t("howDoesItWork")}</p>
        <br />
        <p>{t("howDoesItWorkDescription")}</p>
        <br />
        <p className="text-4xl font-semi-bold">{t("theRefund")}</p>
        <br />
        <p>{t("theRefundDescription1")}</p>
        <br />
        <p>{t("theRefundDescription2")}</p>
        <br />
        <p>{t("theRefundDescription3")}</p>
      </Container>

      <StyledGold1Stack>
        <Container
          maxWidth="lg"
          className="pb-10 relative"
          style={{ zIndex: 2 }}
        >
          <p className="text-4xl font-semi-bold text-default">
            {t("termsAndConditions")}
          </p>
          <br />
          <div className="rounded-lg bg-white text-default shadow-2xl self-center">
            <div className="bg-default h-2 rounded-t-lg"></div>
            <div className="p-5">
              <p className="text-2xl">{t("termsAndConditionsDescription")}</p>
              <br />
              <p>{t("condition1")}</p>
              <br />
              <p>{t("condition2")}</p>
              <br />
              <p>{t("condition3")}</p>
              <br />
              <p>{t("condition4")}</p>
            </div>
          </div>
        </Container>
      </StyledGold1Stack>
    </>
  );
}
