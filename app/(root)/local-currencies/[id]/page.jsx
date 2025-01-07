"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../../../components/buttonCustomize";
import AccountForm from "../../../components/accountForm";

import { useLocale, useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

const StyledBanner = styled.div`
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/bg-1.svg?updatedAt=1735644550393");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100%;
`;

const StyledSliderCard = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    left: 0;
    top: 0;
    transform: skew(-12deg);
    transform-origin: 0 0;
    pointer-events: none;
    display: block;
    border-top-right-radius: 10px;
    z-index: 1;
  }
`;

const SliderCard = ({ icon, name, text, link = "" }) => {
  const t = useTranslations("LocalCurrenciesId");
  return (
    <Card className="rounded-xl text-default">
      <Grid container>
        <Grid
          item
          size={{ md: 4, xs: 12 }}
          className="bg-[#79e8bd] flex items-center justify-center py-5"
        >
          <img src={icon} height={100} width={100} alt={icon} />
        </Grid>

        <Grid
          item
          size={{ md: 8, xs: 12 }}
          className="flex items-center justify-center"
        >
          <StyledSliderCard className="p-10 text-start">
            <Typography
              variant="h4"
              className="text-default "
              style={{ zIndex: 2 }}
            >
              {name}
            </Typography>
            <br />
            <Typography className="text-default" style={{ zIndex: 2 }}>
              {text}
            </Typography>
            <br />
            <div className="flex" style={{ zIndex: 2 }}>
              <Link href={link}>
                <Button name={t("moreInfo")} />
              </Link>
            </div>
          </StyledSliderCard>
        </Grid>
      </Grid>
    </Card>
  );
};

const AutoCardSlider = () => {
  const t = useTranslations("LocalCurrenciesId");
  const sliders = [
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/ecn-accounts.svg?updatedAt=1735644625304",
      link: "/ecn-accounts",
      name: t("ecnAccounts"),
      text: t("ecnAccountsDescription"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/broad-bonus-program.svg?updatedAt=1735644625364",
      link: "/forex-copy-system",
      name: t("broadBonusProgram"),
      text: t("broadBonusProgramDescription"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/license-and-regulation.svg?updatedAt=1735644625257",
      link: "/regulation",
      name: t("licenseAndRegulation"),
      text: t("licenseAndRegulationDescription"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/trading-instruments.svg?updatedAt=1735644625185",
      link: "/trading-instruments",
      name: t("over400TradingInstruments"),
      text: t("over400TradingInstrumentsDescription"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/deposit-protection.svg?updatedAt=1735644715805",
      link: "/deposit-protection",
      name: t("depositProtection"),
      text: t("depositProtectionDescription"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/forex-copy-system.svg?updatedAt=1735644625092",
      link: "/forex-copy-system",
      name: t("forexCopySystem"),
      text: t("forexCopySystemDescription"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/support.svg?updatedAt=1735644625189",
      link: "/contacts",
      name: t("support"),
      text: t("supportDescription"),
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {sliders.map((slider, index) => (
        <SliderCard
          key={index}
          icon={slider.icon}
          name={slider.name}
          text={slider.text}
          link={slider.link}
        />
      ))}
    </Slider>
  );
};

const Banner = ({
  imgDesktop,
  titleBanner,
  subTitleBanner,
  buttonName,
  textBannerColor,
  link,
  blank,
}) => {
  return (
    <StyledBanner>
      <Grid container spacing={3} className="py-28 justify-center items-center">
        <Grid item size={{ md: 6, sm: 12 }} className="md:pl-5 max-w-lg">
          <h1
            className={`text-[2.5rem] leading-[3rem] ${
              textBannerColor ? "text-default" : ""
            }`}
          >
            {titleBanner}
          </h1>
          <h2
            className={`pt-2 text-lg ${textBannerColor ? "text-default" : ""}`}
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
        </Grid>

        <Grid item size={{ md: 6, sm: 12 }}>
          <img src={imgDesktop} className="w-100 h-auto" />
        </Grid>
      </Grid>
    </StyledBanner>
  );
};

const StyledCard = ({ icon, name, text }) => {
  return (
    <Grid item size={{ sm: 6, xs: 12 }} className="md:p-20 p-5">
      <img src={icon} width={70} height={70} alt={icon} />
      <br />
      <Typography variant="h4">{name}</Typography>
      <br />
      <Typography>{text}</Typography>
    </Grid>
  );
};

const StyledGradientCard = ({
  gradient1,
  gradient2,
  gradient3,
  step,
  name,
}) => {
  return (
    <Grid
      item
      size={{ md: 4, xs: 12 }}
      className={`rounded-xl shadow-2xl overflow-hidden ${
        (gradient1 && "translate-y-10") || (gradient2 && "translate-y-5")
      } `}
    >
      {gradient1 && <div className="h-1 bg-[#5fe3b1]" />}
      {gradient2 && <div className="h-1 bg-[#5ae4cd]" />}
      {gradient3 && <div className="h-1 bg-[#5ad2e0]" />}

      <Stack className=" flex flex-col items-center">
        <p
          className="rounded-full px-5 py-3 my-10 font-bold bg-[#6ce1b4] text-white text-2xl"
        >
          {step}
        </p>
        <p className="mb-10">{name}</p>
      </Stack>
    </Grid>
  );
};

export default function Page() {
  const t = useTranslations("LocalCurrenciesId");
  const params = useParams();
  var currency = params.id.toUpperCase();

  console.log(params);
  console.log(currency);

  const locate = useLocale();

  return (
    <>
      <Banner
        imgDesktop={`/Image/card-currnency/hero-card-${currency}.webp`}
        titleBanner={`${currency} ${t("tradingAccount")}`}
        subTitleBanner={t("openAccountQuickAndEasily")}
        buttonName={t("openAccount")}
        textBannerColor
      />

      <Container maxWidth="md" className="my-28 text-default text-center">
        <Typography variant="h3">{t("aboutLocalCurrencies")}</Typography>
        <br />
        <Typography>
          {/* {t("aboutLocalCurrenciesDescription", { currency }, { currency })} */}
          {locate == "hans"
            ? `我们的所有客户都可以使用 ${currency} 开设账户，并使用此货币进行存款和取款。您还可以使用 ${currency} 进行交易，这样可以避免额外的货币转换。`
            : locate == "hant"
            ? `我們的所有客戶都可以使用 ${currency} 開設帳戶，並使用此貨幣進行存款和取款。您還可以使用 ${currency} 進行交易，這樣可以避免額外的貨幣轉換。"`
            : t("aboutLocalCurrenciesDescription", { currency }, { currency })}
        </Typography>
      </Container>

      <Container maxWidth="lg" className="my-28 text-default text-center">
        <Typography variant="h3">
          {locate == "hans"
            ? `${currency} 账户的优势`
            : locate == "hant"
            ? `${currency} 帳戶的優勢`
            : t("advantagesOfLocalCurrencyAccount", { currency })}
        </Typography>
        <Grid container spacing={5}>
          <StyledCard
            icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/promptly.svg?updatedAt=1735644441676"}
            name={t("promptly")}
            text={t("promptlyDescription")}
          />
          <StyledCard
            icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/conveniently.svg?updatedAt=1735644441562"}
            name={t("conveniently")}
            text={t("convenientlyDescription")}
          />
          <StyledCard
            icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/free.svg?updatedAt=1735644441479"}
            name={t("free")}
            text={t("freeDescription")}
          />
          <StyledCard
            icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/uniqueness.svg?updatedAt=1735644441505"}
            name={t("uniqueness")}
            text={t("uniquenessDescription")}
          />
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-28 text-default text-center">
        <Typography variant="h3" className="mb-20">
          {t("benefitsOfTradingWithSuperForex")}
        </Typography>
        <AutoCardSlider />
      </Container>

      <Container maxWidth="lg" className="my-28 text-default text-center">
        <Typography variant="h3" className="mb-20">
          {t("howToOpenAccount")}
        </Typography>
        <Grid container spacing={5} className="py-10">
          <StyledGradientCard gradient1 step="1" name={t("fillTheForm")} />
          <StyledGradientCard
            gradient2
            step="2"
            name={
              locate == "hans"
                ? `选择 ${currency} 作为您的账户货币`
                : locate == "hant"
                ? `選擇 ${currency} 作為您的帳戶貨幣`
                : t("chooseAccountCurrency", { currency })
            }
          />
          <StyledGradientCard
            gradient3
            step="3"
            name={t("makeDepositAndStartTrading")}
          />
        </Grid>
      </Container>

      <StyledBanner className="py-28 bg-[#f5f4f9]">
        <AccountForm
          data={["Standard"]}
          showText={false}
          background={true}
          option={true}
        />
      </StyledBanner>
    </>
  );
}
