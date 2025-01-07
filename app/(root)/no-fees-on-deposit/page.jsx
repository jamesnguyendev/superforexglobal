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
import Svg1 from "../../../public/svg-no-fees-on-deposit/1.svg";
import Svg2 from "../../../public/svg-no-fees-on-deposit/2.svg";
import Svg3 from "../../../public/svg-no-fees-on-deposit/3.svg";
import Svg4 from "../../../public/svg-no-fees-on-deposit/4.svg";

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

export default function NoFeesOnDeposit() {
  const t = useTranslations("NoFeesOnDeposit");

  return (
    <>
      <Banner
        imgDesktop={"https://ik.imagekit.io/3idyffxxb/New%20Folder/hero%20(1).jpg?updatedAt=1735645611641"}
        imgMobile={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero-mobile%20(1).jpg?updatedAt=1735645611601"
        }
        titleBanner={t("noFeesOnDepositsAndWithdrawals")}
        subTitleBanner={t("doNotWorryAboutTheCommission")}
        buttonName={t("makeADeposit")}
      />

      <div className="sm:block">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="my-28 text-default relative"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold">{t("aboutThisProgram")}</p>
        <br />
        <p>{t("aboutThisProgramDescription1")}</p>
        <br />
        <p>{t("aboutThisProgramDescription1")}</p>
        <br />
        <p className="text-4xl font-semi-bold">
          {t("advantagesOfNoFeesProgram")}
        </p>
      </Container>

      <StyledGold1Stack>
        <Container
          maxWidth="lg"
          className="pb-28 relative"
          style={{ zIndex: 2 }}
        >
          <Grid container spacing={4} className="text-default">
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg1}
              name={t("amountOfDepositAndWithdrawalNotLimited")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg2}
              name={t("validForAllDepositAndWithdrawalMethods")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg3}
              name={t("fullCustomerSupportAtAllStages")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg4}
              name={t("instantMoneyTransfer")}
            />
          </Grid>
          <br />
          <br />
          <Link
            href={"https://my.superforexs.com/auth/jwt/sign-in/"}
            target="_blank"
          >
            <Button name={t("makeADeposit")} background={true} />
          </Link>
          <br />
          <p className="text-white">{t("note")}</p>
        </Container>
      </StyledGold1Stack>
    </>
  );
}
