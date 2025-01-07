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

import { useTranslations } from "next-intl";

const StyledDividerCenter = styled.div`
  position: relative;
  color: white;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100px;
    right: calc(50% - 50px);
    height: 3px;
    background-color: rgb(255, 255, 255);
  }
`;

const StyledDividerLeft = styled.div`
  position: relative;
  color: white;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100px;
    height: 3px;
    background-color: rgb(255, 255, 255);
  }
`;

const StyledDividerRight = styled.div`
  position: relative;
  color: white;

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    width: 100px;
    right: 0;
    height: 3px;
    background-color: rgb(255, 255, 255);
  }
`;

const StyledDiv = styled.div`
  overflow: hidden;
  position: relative;
  background-image: url('https://ik.imagekit.io/3idyffxxb/New%20Folder/bg%20(1).svg?updatedAt=1735641427204');

  &::before {
    top: -67%;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    background: rgb(21, 54, 89);
    z-index: 1;
    transform: skewY(-30deg);
    height: 100%;
  }

  &::after {
    top: 67%;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    background: rgb(21, 54, 89);
    z-index: 1;
    transform: skewY(-30deg);
    height: 100%;
  }
`;

const Banner = ({
  imgDesktop,
  imgMobile,
  titleBanner,
  subTitleBanner,
  buttonName,
  textBannerColor,
  link,
  blank,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the 'md' breakpoint in Tailwind
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="">
      {/* Conditionally render based on window width */}
      {!isMobile ? (
        <>
          {/* Desktop */}
          <Image
            src={imgDesktop}
            width={11120}
            height={11120}
            className="min-h-[35rem] object-cover"
            alt={imgDesktop}
            draggable="false"
            loading="eager"
            quality={100}
          />
          <div className="absolute top-[37%] text-white font-semibold gap-y-2 pl-[6.2rem]">
            <h1
              className={`text-[2.5rem] leading-[3rem] max-w-[350px] ${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {titleBanner}
            </h1>
            <h2
              className={`pt-2 text-lg ${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {subTitleBanner}
            </h2>
            <div className="pt-6">
              <Link
                href={link ? link : "#register"}
                target={blank ? "_blank" : "_self"}
              >
                <Button name={buttonName} background={true} />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Mobile */}
          <Image
            src={imgMobile}
            width={11120}
            height={11120}
            className="min-h-[35rem] object-cover"
            alt={imgMobile}
            quality={100}
          />
          <div className="text-white font-semibold gap-y-2 py-6 text-center">
            <h1 className="text-[2.5rem] leading-[3rem]">{titleBanner}</h1>
            <h2
              className={`pt-2 text-lg ${textBannerColor ? "text-white" : ""}`}
            >
              {subTitleBanner}
            </h2>
            <div className="pt-6">
              <Link
                href={link ? link : "#register"}
                target={blank ? "_blank" : "_self"}
              >
                <Button name={buttonName} background={true} />
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

const StyledGradientCard = ({ gradient, icon, name, text }) => {
  return (
    <Grid
      item
      size={{ md: 4, sm: 12 }}
      className="text-white rounded-xl shadow-2xl flex flex-col overflow-hidden bg-[#13306d]"
    >
      {gradient && (
        <div className="h-1 bg-gradient-to-r from-[#5e75f7] to-[#6acafa]" />
      )}
      <img
        src={icon}
        width={88}
        height={88}
        alt={icon}
        className="my-5 self-center"
      />
      <Stack className="text-center p-5">
        <p className="font-bold mb-5 text-[#6acafa] text-2xl">
          {name}
        </p>
        <p>{text}</p>
      </Stack>
    </Grid>
  );
}

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

export default function OilTrading() {
  const t = useTranslations("OilTrading");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="bg-[#153659]">
        <Banner
          imgDesktop={"/Image/hero-oil.jpg"}
          imgMobile={"/Image/hero-oil-mobile.jpg"}
          titleBanner={t("tradeBrentOilAndOtherEnergies")}
          subTitleBanner={t("startMakingMoneyInEnergyMarket")}
          buttonName={t("openAccount")}
        />
      </div>

      <div className="bg-[#153659]">
        {/* <Container
          maxWidth="lg"
          className="py-28 text-white flex flex-col"
          style={{ zIndex: 2 }}
        >
          <StyledDividerCenter>
            <p
              variant="h4"
              className="font-bold text-center text-[#6acafa] text-4xl"
            >
              {t("tradeOilWithSuperForex")}
            </p>
          </StyledDividerCenter>
          <br />
          <p className="text-center m-5">
            {t("bestTradingConditionsForEveryone")}
          </p>
          <Grid container spacing={5} className="py-10">
            <Grid
              item
              size={{ lg: 3, md: 6, xs: 12 }}
              className="text-center flex flex-col"
            >
              <Image
                src={"https://superforex.com/img/metals-trading/deposit-1.svg"}
                width={56}
                height={56}
                alt="img"
                className="m-3 self-center"
              />
              <p className="text-[#6acafa] font-bold text-2xl">
                {t("minimumDeposit")}
              </p>
            </Grid>
            <Grid
              item
              size={{ lg: 3, md: 6, xs: 12 }}
              className="text-center flex flex-col"
            >
              <Image
                src={"https://superforex.com/img/metals-trading/no-fees.svg"}
                width={56}
                height={56}
                alt="img"
                className="m-3 self-center"
              />
              <p className="text-[#6acafa] font-bold text-2xl">
                {t("zeroCommission")}
              </p>
            </Grid>

            <Grid
              item
              size={{ lg: 3, md: 6, xs: 12 }}
              className="text-center flex flex-col"
            >
              <Image
                src={
                  "https://superforex.com/img/metals-trading/ecn-accounts.svg"
                }
                width={56}
                height={56}
                alt="img"
                className="m-3 self-center"
              />
              <p className="text-[#6acafa] font-bold text-2xl">
                {t("ecnAccounts")}
              </p>
            </Grid>
            <Grid
              item
              size={{ lg: 3, md: 6, xs: 12 }}
              className="text-center flex flex-col"
            >
              <Image
                src={
                  "https://superforex.com/img/metals-trading/deposit-methods.svg"
                }
                width={56}
                height={56}
                alt="img"
                className="m-3 self-center"
              />
              <p className="text-[#6acafa] font-bold text-2xl">
                {t("paymentMethods")}
              </p>
            </Grid>
          </Grid>
        </Container> */}
      </div>

      <StyledDiv>
        <Container
          maxWidth="lg"
          className="text-white relative"
          style={{ zIndex: 2 }}
        >
          <Grid container spacing={10} className="justify-center">
            <Grid item size={{ sm: 12, md: 6 }}>
              <StyledDividerLeft>
                <p
                  className="font-bold mb-5 text-[#6acafa] text-4xl"
                >
                  {t("aboutOilTrading")}
                </p>
              </StyledDividerLeft>
              <br />
              <p>
                {t("aboutOilTradingDescription1")}
              </p>
              <br />
              <p>
                {t("aboutOilTradingDescription2")}
              </p>
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
                src={"https://ik.imagekit.io/3idyffxxb/New%20Folder/phone.png?updatedAt=1735641541189"}
                alt={"img"}
              />
            </Grid>
          </Grid>
        </Container>

        <Container
          maxWidth="lg"
          className="my-28 text-default relative"
          style={{ zIndex: 2 }}
        >
          <StyledDividerRight>
            <p
              className="font-bold text-right text-[#6acafa] text-4xl"
            >
              {t("whyIsOilTradingProfitable")}
            </p>
          </StyledDividerRight>

          <Grid container spacing={5} className="py-10">
            <StyledGradientCard
              gradient
              icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/high-liquidity.svg?updatedAt=1735641511543"}
              name={t("highLiquidity")}
              text={t("highLiquidityDescription")}
            />
            <StyledGradientCard
              gradient
              icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/predictability.svg?updatedAt=1735641511501"}
              name={t("predictability")}
              text={t("predictabilityDescription")}
            />
            <StyledGradientCard
              gradient
              icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/high-yield.svg?updatedAt=1735641511209"}
              name={t("highYield")}
              text={t("highYieldDescription")}
            />
          </Grid>
        </Container>

        <Container
          maxWidth="lg"
          className="mt-28 text-white relative"
          style={{ zIndex: 2 }}
        >
          <StyledDividerCenter>
            <p
              className="font-bold text-center text-[#6acafa] text-4xl"
            >
              {t("howToStart")}
            </p>
          </StyledDividerCenter>
          <br />
          <p className="text-center m-5">
            {t("howToStartDescription")}
          </p>

          <Grid container spacing={5} className="py-10">
            <StyledGradientCard
              icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/step1.svg?updatedAt=1735640889287"}
              name={t("openRealTradingAccount")}
              text={t("openRealTradingAccountDescription")}
            />
            <StyledGradientCard
              icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/step2.svg?updatedAt=1735640889256"}
              name={t("verifyYourAccount")}
              text={t("verifyYourAccountDescription")}
            />
            <StyledGradientCard
              icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/step3.svg?updatedAt=1735640889556"}
              name={t("startTrading")}
              text={t("startTradingDescription")}
            />
          </Grid>
        </Container>
      </StyledDiv>

      <div className="bg-[#153659]">
        <Container maxWidth="lg" className="py-28" style={{ zIndex: 2 }}>
          <AccountForm
            data={["Standard"]}
            showText={false}
            background={true}
            option={true}
          />
        </Container>
      </div>
    </>
  );
}
