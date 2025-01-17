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
import Svg1 from "../../../public/svg-membership-club/1.svg";
import Svg2 from "../../../public/svg-membership-club/2.svg";
import Svg3 from "../../../public/svg-membership-club/3.svg";
import Svg4 from "../../../public/svg-membership-club/4.svg";
import Svg5 from "../../../public/svg-membership-club/5.svg";
import Svg6 from "../../../public/svg-membership-club/6.svg";
import Svg7 from "../../../public/svg-membership-club/7.svg";
import Svg8 from "../../../public/svg-membership-club/8.svg";
import Svg9 from "../../../public/svg-membership-club/9.svg";

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

const StyledGold2Stack = styled.div`
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

const StyledWhiteCard = ({ icon, name, text }) => {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6 }}
      className="text-default rounded-lg shadow-2xl bg-white"
    >
      <div className="flex gap-5 p-5">
        <Image src={icon} width={88} height={88} alt={icon} />
        <div className="flex-grow">
          <p className="text-lg">{name}</p>
          <br />
          <p>{text}</p>
        </div>
      </div>
    </Grid>
  );
};

const StyledGoldCard = ({ size, icon, step, name, text, bgImg, bgColor }) => {
  return (
    <Grid
      item
      size={size}
      className="text-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
    >
      <div
        className="flex flex-col items-center"
        style={{
          backgroundImage: `url('${bgImg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: bgColor,
          color: "white",
        }}
      >
        <div className="rounded-full my-5 p-5 shadow-2xl">
          <span fill="white">
            <Image
              src={icon}
              width={68}
              height={68}
              alt={icon}
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </span>
        </div>
        <Typography className="pb-5 text-xl">{step}</Typography>
      </div>
      <div className="text-center p-5 bg-white text-default flex-grow">
        <Typography variant="h6" className="font-semi-bold mb-5">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </div>
    </Grid>
  );
};

export default function MembershipClub() {
  const t = useTranslations("MembershipClub");

  return (
    <>
      <Banner
        imgDesktop={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero%20(4).jpg?updatedAt=1735646191737"
        }
        imgMobile={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/hero-mobile%20(4).jpg?updatedAt=1735646191363"
        }
        titleBanner={t("membershipClub")}
        subTitleBanner={t("joinAndGetYourPrivilegesToday")}
        buttonName={t("register")}
      />

      <div className="sm:block">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="my-28 text-default relative"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold">{t("aboutMembershipClub")}</p>
        <br />
        <p>{t("aboutMembershipClubDescription1")}</p>
        <br />
        <p>{t("aboutMembershipClubDescription2")}</p>
        <br />
      </Container>

      <StyledGold2Stack>
        <Container
          maxWidth="lg"
          className="relative text-default"
          style={{ zIndex: 2 }}
        >
          <p className="text-4xl font-semi-bold">
            {t("benefitsOfParticipation")}
          </p>

          <Grid container spacing={4} className="text-default" marginY={5}>
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg1}
              name={t("tradeWithLoweredSpreads")}
              text={t("tradeWithLoweredSpreadsDescription")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg2}
              name={t("welcomeBonus")}
              text={t("welcomeBonusDescription")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg3}
              name={t("uniqueForexSignals")}
              text={t("uniqueForexSignalsDescription")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg4}
              name={t("fullSupport")}
              text={t("fullSupportDescription")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg5}
              name={t("noBrokerCommission")}
              text={t("noBrokerCommissionDescription")}
            />
            <StyledWhiteCard
              size={{ xs: 12, sm: 6, md: 3 }}
              icon={Svg6}
              name={t("extendedDepositProtection")}
              text={t("extendedDepositProtectionDescription")}
            />
          </Grid>

          <p className="text-4xl font-semi-bold text-white">{t("howToJoin")}</p>

          <Grid container spacing={5} className="text-default" marginY={5}>
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={Svg7}
              step={t("step1")}
              name={t("makeSureYouHaveATradingAccount")}
              text={t("makeSureYouHaveATradingAccountDescription")}
              bgImg={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
              }
              bgColor={"#478c89"}
            />
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={Svg8}
              step={t("step2")}
              name={t("makeADeposit")}
              text={t("makeADepositDescription")}
              bgImg={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
              }
              bgColor={"#34736b"}
            />
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={Svg9}
              step={t("step3")}
              name={t("applyForTheMembershipClub")}
              text={t("applyForTheMembershipClubDescription")}
              bgImg={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
              }
              bgColor={"#2d5f66"}
            />
          </Grid>
        </Container>
      </StyledGold2Stack>

      <Container
        maxWidth="lg"
        className="my-28 text-default text-center relative flex flex-col"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold">
          {t("joinTheMembershipClubRightNow")}
        </p>
        <br />
        <p>{t("youNeedToDeposit")}</p>
        <br />
        <p className="text-4xl font-semi-bold">$5000.00</p>
        <br />
        <Link
          href={"https://my.superforexs.com/login"}
          target="_blank"
          className="self-center"
        >
          <Button name={t("makeADeposit")} background={true} />
        </Link>
      </Container>

      <StyledGold1Stack>
        <Container
          maxWidth="lg"
          className="pb-28 relative"
          style={{ zIndex: 2 }}
        >
          <p className="text-center text-default">{t("openAccountPrompt")}</p>
          <br />
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
