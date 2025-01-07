"use client";
import React, { useState } from "react";
import { Container, Stack, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Button from "../../components/buttonCustomize";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  color: white;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -150px;
    height: 320px;
    background: white;
    transform: skewY(-6deg);
    z-index: 1;
  }
`;

const StyledBackground = styled.div`
  position: relative;
  display: block;
  height: 100%;
  padding-bottom: 120px;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    z-index: 1;
    bottom: 50%;
    transform: skewY(-30deg);
  }

  ,
  &::after {
    content: "";
    display: none;
    position: absolute;
    width: 100%;
    top: 90%;
    height: 100%;
    background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
    opacity: 0.3;
    transform: skewY(35deg);
    z-index: 2;
  }
  @media (max-width: 640px) {
    &::before {
      transform: skewY(-7deg); /* Change the skewY degree here for mobile */
    }
  }
  @media (min-width: 640px) {
    &::after {
      display: block;
    }
  }
`;

const StyledCard = ({ icon, name }) => {
  return (
    <Grid
      item
      size={{ md: 4, sm: 6, xs: 12 }}
      className="rounded-xl shadow-2xl"
    >
      <Stack direction="row" spacing={2} alignItems="center" className="p-5">
        <Image src={icon} width={90} height={90} alt={icon} />
        <Typography>{name}</Typography>
      </Stack>
    </Grid>
  );
};

export default function MobileApp() {
  const t = useTranslations("MobileApp");
  return (
    <div>
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
            {t("superForexMobileApplication")}
          </Typography>
        </Container>
      </Stack>

      <Container maxWidth="lg" className="my-10 relative z-10 text-default">
        <Typography variant="h4">{t("aboutMobileApp")}</Typography>
        <br />
        <Typography>
          {t("aboutMobileAppDescription")}
        </Typography>
        <br />
        <Typography variant="h4" className="text-center">
          {t("withSuperForexAppYouCan")}
        </Typography>
        <br />
        <Grid container spacing={2} className="my-10">
          <StyledCard
            icon={"/svg-mobile-app/1.svg"}
            name={t("openRealOrDemoAccount")}
          />
          <StyledCard
            icon={"/svg-mobile-app/2.svg"}
            name={t("makeDepositAndWithdrawMoney")}
          />
          <StyledCard
            icon={"/svg-mobile-app/3.svg"}
            name={t("checkAllTradingOperations")}
          />
          <StyledCard
            icon={"/svg-mobile-app/4.svg"}
            name={t("trackQuotesInRealTime")}
          />
          <StyledCard
            icon={"/svg-mobile-app/5.svg"}
            name={t("mergeYourAccounts")}
          />
          <StyledCard
            icon={"/svg-mobile-app/6.svg"}
            name={t("receiveTradingSignals")}
          />
          <StyledCard
            icon={"/svg-mobile-app/7.svg"}
            name={t("copyDealsOfOtherTraders")}
          />
          <StyledCard
            icon={"/svg-mobile-app/8.svg"}
            name={t("readAnalyticalArticles")}
          />
          <StyledCard
            icon={"/svg-mobile-app/9.svg"}
            name={t("trackEconomicNews")}
          />
        </Grid>
        <Typography>
          {t("downloadSuperForexAppNow")}
        </Typography>
        <br />
        <Link
          href="https://play.google.com/store/apps/details?id=com.superforex.cabinet"
          target="_blank"
        >
          <Button name="Google Play" background />
        </Link>
      </Container>

      <StyledBackground className="">
        <div className="relative z-10">
          <img
            src="https://ik.imagekit.io/3idyffxxb/New%20Folder/cabinet.png?updatedAt=1735644947137"
            alt="img"
            className="m-auto sm:block hidden"
          />
        </div>
      </StyledBackground>
    </div>
  );
}
