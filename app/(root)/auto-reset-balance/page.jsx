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

const StyledCard = ({ title, sub }) => {
  return (
    <Grid size={{ lg: 6, md: 12 }}>
      <div className="rounded-lg bg-white text-default shadow-2xl h-full">
        <div className="bg-default h-2 rounded-t-lg"></div>
        <div className="p-5">
          <p className="text-2xl">{title}</p>
          <br />
          <p>{sub}</p>
        </div>
      </div>
    </Grid>
  );
};

export default function GoldTrading() {
  const t = useTranslations("AutoResetBalance");

  return (
    <>
      <Banner
        imgDesktop={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero.jpg?updatedAt=1735645523123"
        }
        imgMobile={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero-mobile.jpg?updatedAt=1735645523009"
        }
        titleBanner={t("autoResetBalanceProgram")}
        subTitleBanner={t("yourBalanceDoesntGoBelow0")}
      />

      <div className="sm:block">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="my-28 text-default relative"
        style={{ zIndex: 2 }}
      >
        <Grid container spacing={4}>
          <StyledCard
            title={t("yourProblem")}
            sub={t("yourProblemDescription")}
          />
          <StyledCard
            title={t("ourSolution")}
            sub={t("ourSolutionDescription")}
          />
        </Grid>
        <br />
        <p>{t("note")}</p>
        <br />
        <Link href={"https://my.superforexs.com/register"} target="_blank">
          <Button name={t("visitCabinet")} background={true} />
        </Link>
      </Container>

      <StyledGold1Stack>
        <Container
          maxWidth="lg"
          className="pb-28 pt-40 relative"
          style={{ zIndex: 2 }}
        ></Container>
      </StyledGold1Stack>
    </>
  );
}
