"use client";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import {
  Container,
  Stack,
  Typography,
  Card,
  Modal,
  Box,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/buttonCustomize";
import AccountForm from "./components/accountForm";
import SlideBanner from "./components/slideBanner";

import BannerDesktop0 from "../public/Image/gold-trading-zero-spread-desktop.webp";
import BannerDesktop1 from "../public/Image/ecn-accounts-desktop.webp";
import BannerDesktop2 from "../public/Image/30pc.jpg";
import BannerDesktop3 from "../public/Image/cryptomania-desktop.webp";
import BannerDesktop4 from "../public/Image/welcome-bonus-desktop.webp";
import BannerDesktop5 from "../public/Image/hot-bonus-desktop-ltr.webp";
import BannerDesktop6 from "../public/Image/stp-card-desktop-ltr.webp";
import BannerDesktop7 from "../public/Image/local-currencies-desktop.webp";

import BannerMobile0 from "../public/Image/gold-trading-zero-spread-mobile.webp";
import BannerMobile1 from "../public/Image/ecn-accounts-mobile.webp";
import BannerMobile2 from "../public/Image/30mobile.webp";
import BannerMobile3 from "../public/Image/cryptomania-mobile.webp";
import BannerMobile4 from "../public/Image/welcome-bonus-mobile.webp";
import BannerMobile5 from "../public/Image/hot-bonus-mobile.webp";
import BannerMobile6 from "../public/Image/stp-card-mobile.webp";
import BannerMobile7 from "../public/Image/local-currencies-mobile.webp";

import XAUUSD from "../public/svg-home/XAUUSD.svg";
import AAPL from "../public/svg-home/AAPL.svg";
import EURUSD from "../public/svg-home/EURUSD.svg";
import GBPUSD from "../public/svg-home/GBPUSD.svg";
import NAS100 from "../public/svg-home/NAS100.svg";
import TSLA from "../public/svg-home/TSLA.svg";
import XPDUSD from "../public/svg-home/XPDUSD.svg";

import CrownIcon from "../public/svg-home/crown.svg";
import ForexCopyIcon from "../public/svg-home/forexcopy.svg";
import GlobalIcon from "../public/svg-home/global.svg";
import MoneyProtectIcon from "../public/svg-home/moneyprotect.svg";
import PresentIcon from "../public/svg-home/present.svg";
import SuperforexIcon from "../public/svg-home/superforex.svg";

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
  return (
    <section className="">
      {/* Conditionally render based on window width */}
      <div className="hidden lg:block">
        {/* Desktop */}
        <Image
          src={imgDesktop}
          width={11120}
          height={11120}
          className="min-h-[35rem] object-cover"
          alt={imgDesktop}
          draggable="false"
          loading="eager"
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
            className={`pt-2 text-lg ${textBannerColor ? "text-default" : ""}`}
          >
            {subTitleBanner}
          </h2>
          <div className="pt-6">
            <Link
              href={link ? link : "https://my.superforex.global/register"}
              target={blank ? "_blank" : "_self"}
            >
              <Button name={buttonName} background={true} />
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        {/* Mobile */}
        <Image
          src={imgMobile}
          width={11120}
          height={12220}
          className="min-h-[15rem] object-cover"
          alt={imgMobile}
        />
        <div className="text-default font-semibold gap-y-2 py-6 text-center">
          <h1 className="text-[2.5rem] leading-[3rem]">{titleBanner}</h1>
          <h2
            className={`pt-2 text-lg ${textBannerColor ? "text-default" : ""}`}
          >
            {subTitleBanner}
          </h2>
          <div className="pt-6">
            <Link
              href={link ? link : "https://my.superforex.global/register"}
              target={blank ? "_blank" : "_self"}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button name={buttonName} background={true} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const AutoImageSlider = () => {
  const t = useTranslations("AutoSlider");
  const images = [
    {
      imgDesktop:
        "https://ik.imagekit.io/3idyffxxb/New%20Folder/quality_restoration_20241227110248870.png?updatedAt=1735272464298",
      imgMobile: BannerMobile0,
      titleBanner: t("goldtrading"),
      subTitleBanner: t("stableprofit"),
      buttonName: t("openaccount"),
      dot: true,
      link: "https://my.superforex.global/register",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/3idyffxxb/New%20Folder/quality_restoration_20241227105809052.png?updatedAt=1735272455857",
      imgMobile: BannerMobile1,
      titleBanner: t("ecnaccount"),
      subTitleBanner: t("tradingwithspreads"),
      buttonName: t("moreinformation"),
      textBannerColor: true,
      link: "https://my.superforex.global/register",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/0785b1c691332d6d7422.jpg?updatedAt=1736824575921",
      imgMobile:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/9a0d63e14d15f14ba804.jpg?updatedAt=1736824707631",
      titleBanner: t("30bonus"),
      subTitleBanner: t("applyonlocal"),
      buttonName: t("learnmore"),
      textBannerColor: false,
      link: "https://my.superforex.global/register",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/7fd1fb1bdbee67b03eff.jpg?updatedAt=1736821505597",
      imgMobile:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/d7eb3010bde701b958f6.jpg?updatedAt=1736830105397",
      titleBanner: t("cryptomania"),
      subTitleBanner: t("increaseyourprofits"),
      buttonName: t("joincontest"),
      textBannerColor: false,
      link: "/trade-and-earn",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/3idyffxxb/New%20Folder/quality_restoration_20241227105954389.png?updatedAt=1735272455464",
      imgMobile: BannerMobile4,
      titleBanner: t("protect100%"),
      subTitleBanner: t("ourmostpopular"),
      buttonName: t("Takealook"),
      dot: true,
      link: "https://my.superforex.global/register",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/3idyffxxb/New%20Folder/quality_restoration_20241227105605300.png?updatedAt=1735272457272",
      imgMobile: BannerMobile5,
      titleBanner: t("30%Extreme"),
      subTitleBanner: t("thehottestoffer"),
      buttonName: t("getbonus"),
      dot: true,
      link: "https://my.superforex.global/register",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/3idyffxxb/New%20Folder/quality_restoration_20241227105900533.png?updatedAt=1735272453105",
      imgMobile: BannerMobile6,
      titleBanner: t("getbonus"),
      subTitleBanner: t("Standardaccount"),
      textBannerColor: true,
      buttonName: t("moreinformation"),
      dot: true,
      link: "https://my.superforex.global/register",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/3idyffxxb/New%20Folder/quality_restoration_20241227105448232.png?updatedAt=1735273269821",
      imgMobile: BannerMobile7,
      titleBanner: t("localcurrencies"),
      subTitleBanner: t("forexhasbecome"),
      buttonName: t("moreinformation"),
      dot: true,
      link: "https://my.superforex.global/register",
    },
  ];

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    height: 500,
  };

  return <SlideBanner slides={images} />;
};

const StyledGrid3 = ({ name, text }) => {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Stack
        className="text-center flex flex-col items-center text-default"
        style={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p className="font-bold pb-3 text-4xl">{name}</p>

        <p>{text}</p>
      </Stack>
    </Grid>
  );
};

const StyledStack = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  background-image: url("https://superforex.com/img/home/ti-background.svg");
  background-size: cover;
  background-position: center;
`;

const StyledCard = ({ img, name, text, cal, flag }) => {
  return (
    <Card
      className={`shadow-2xl rounded-xl m-3 p-3 ${flag ? "mx-5" : "mx-10"}`}
    >
      <Grid container spacing={2} className="items-center">
        <Grid item>
          <img src={img} width={100} height={100} alt="img" loading="eager" />
        </Grid>
        <Grid item>
          <Stack>
            <Typography className="font-bold">{name}</Typography>
            <Typography className="font-bold text-light_grey mt-2">
              {text}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
};

const AutoCardSlider = () => {
  const transactions = [
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-nasdaq.svg?updatedAt=1735632034083",
      name: "NAS100",
      text: "Nasdaq",
      cal: NAS100,
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-apple.svg?updatedAt=1735632034169",
      name: "#AAPL",
      text: "Apple Inc.",
      cal: AAPL,
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-palladium.svg?updatedAt=1735632034028",
      name: "XPDUSD",
      text: "Palladium",
      cal: XPDUSD,
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/EURUSD.svg?updatedAt=1735631748190",
      name: "#EURUSD",
      text: "Euro / US Dollar",
      cal: EURUSD,
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-tesla.svg?updatedAt=1735632034118",
      name: "#TSLA",
      text: "Tesla",
      cal: TSLA,
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/GBPUSD.svg?updatedAt=1735631748231",
      name: "GBPUSD",
      text: "GB Pound / US Dollar",
      cal: GBPUSD,
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/XAUUSD.svg?updatedAt=1735631766946",
      name: "XAUUSD",
      text: "Gold / US Dollar",
      cal: XAUUSD,
    },
  ];
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: false,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Slider {...settings}>
      {transactions.map((transaction, index) => (
        <StyledCard
          key={index}
          img={transaction.img}
          name={transaction.name}
          text={transaction.text}
          cal={transaction.cal}
          flag={index === currentIndex}
        />
      ))}
    </Slider>
  );
};

const OpenAccount = ({ handleOpen }) => {
  const [tab, setTab] = useState("standard");
  const t = useTranslations("HomePage");
  return (
    <Container maxWidth="lg" className="my-28">
      <Grid container>
        <Grid item size={{ md: 6, sm: 12 }}>
          {tab == "standard" && (
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/standard.jpg?updatedAt=1735632633266"
              alt="img"
            />
          )}
          {tab == "profi" && (
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/cent%20account%202.jpg?updatedAt=1735630687750"
              alt="img"
            />
          )}
          {tab == "ecn" && (
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/ecn.webp?updatedAt=1735632719880"
              alt="img"
            />
          )}
        </Grid>
        <Grid item size={{ md: 6, sm: 12 }} className="p-10">
          <p className="font-bold mb-10 text-4xl">{t("opentrading")}</p>
          <Stack direction={"row"} className="mb-10">
            <p
              className={`px-3 py-1 rounded-full cursor-pointer ${
                tab == "standard"
                  ? "bg-default text-white hover:text-white"
                  : "hover:text-light_grey"
              }`}
              onClick={() => setTab("standard")}
            >
              {t("standard")}
            </p>
            <p
              className={`px-3 py-1 rounded-full cursor-pointer ${
                tab == "profi"
                  ? "bg-default text-white hover:text-white"
                  : "hover:text-light_grey"
              }`}
              onClick={() => setTab("profi")}
            >
              Cent
            </p>
            <p
              className={`px-3 py-1 rounded-full cursor-pointer ${
                tab == "ecn"
                  ? "bg-default text-white hover:text-white"
                  : "hover:text-light_grey"
              }`}
              onClick={() => setTab("ecn")}
            >
              {t("ecn")}
            </p>
          </Stack>
          {tab == "standard" && <p className="mb-5">{t("thisistypicall")}</p>}
          {tab == "profi" && <p className="mb-5">{t("theprofi-stp")}</p>}
          {tab == "ecn" && (
            <>
              <p className="">{t("themainadvantage")}</p>
              <p className="mb-5">{t("unlikeprofi-stp")}</p>
            </>
          )}
          <div onClick={handleOpen}>
            <Button name={t("openaccount")} background />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const StyledIconCard = ({ icon, name, text, link = "" }) => {
  const t = useTranslations("HomePage");
  return (
    <Grid
      item
      size={{ lg: 4, md: 6, sm: 12 }}
      className="p-10 rounded-xl hover:shadow-2xl flex flex-col justify-between"
    >
      <Stack>
        <Image src={icon} height={72} width={72} alt="img" />
        <p className="font-bold mb-5">{name}</p>
        <p className="mb-5">{text}</p>
      </Stack>
      <Link href={link}>
        <Button name={t("readmore")} />
      </Link>
    </Grid>
  );
};

const PaymentSlider = () => {
  const images = [
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/online-naira.svg?updatedAt=1735633650700",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/mtn.svg?updatedAt=1735633650376",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/fasapay.svg?updatedAt=1735633649716",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/mastercard.svg?updatedAt=1735633649637",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/bitcoin.svg?updatedAt=1735633647168",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/triv.svg?updatedAt=1735633647103",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/vodacom.svg?updatedAt=1735633647036",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/astropay.svg?updatedAt=1735633647093",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/bitwallet.svg?updatedAt=1735633647061",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/sticpay.svg?updatedAt=1735633647021",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/bank-wire-transfer.svg?updatedAt=1735633647020",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/perfect-money.svg?updatedAt=1735633646552",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/superforex-money.svg?updatedAt=1735633646527",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/visa.svg?updatedAt=1735633646452",
  ];

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </Slider>
  );
};

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

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const t = useTranslations("HomePage");

  return (
    <main className="text-default">
      <Header />
      <AutoImageSlider />
      <Container maxWidth="lg" className="my-28">
        <Grid container spacing={3} className="my-5">
          <StyledGrid3 name={"100%"} text={t("fundssecurity")} />
          <StyledGrid3 name={"1:500"} text={t("leverage")} />
          <StyledGrid3 name={"80%"} text={t("commission")} />
          <StyledGrid3 name={"50$"} text={t("minimumdeposit")} />
        </Grid>
      </Container>
      <Container maxWidth="lg" className="my-28">
        <p className="font-bold mb-8 text-center text-5xl">{t("welcome")}</p>
        <p className="font-bold text-center">{t("welcome_sub")}</p>
      </Container>
      <Container maxWidth="lg" className="my-28">
        <Grid container spacing={10} className="items-center">
          <Grid item size={{ md: 7, sm: 12 }}>
            <p className="font-bold mb-10 text-4xl">{t("tradethemost")}</p>
            <p className="font-bold mb-5">
              {t("Openaposition")}
              <span className="text-primary">&nbsp;{t("EUR/USD")}&nbsp;</span>
              {t("end300other")}
            </p>
            <Button name={t("readmore")} background />
          </Grid>
          <Grid item size={{ md: 5, sm: 12 }}>
            <StyledStack>
              <AutoCardSlider />
            </StyledStack>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className="my-28">
        <Grid container className="items-center">
          <Grid
            item
            size={{ lg: 6, sm: 12 }}
            className="lg:pl-10 max-[700px]:p-10"
          >
            <p className="font-bold mb-10 text-4xl">{t("ifsupport")}</p>
            <p className="mb-5">{t("eliudkipchoge")}</p>
            <div onClick={handleOpen}>
              <Button name={t("openaccount")} background />
            </div>
          </Grid>
          <Grid item size={{ lg: 6, sm: 12 }}>
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/eliud-kipchoge.png?updatedAt=1735632446105"
              alt="image"
            />
          </Grid>
        </Grid>
      </Container>
      <OpenAccount handleOpen={handleOpen} />
      <Container maxWidth="lg" className="my-28">
        <Grid container spacing={5} className="items-center">
          <Grid item size={{ md: 7, sm: 12 }}>
            <p className="font-bold mb-10 text-4xl">{t("sfx")}</p>
            <p className="mb-5">{t("manageyourtrading")}</p>
            <Link
              href={
                "https://play.google.com/store/apps/details?id=com.superforex.cabinet"
              }
            >
              <Button name={t("installapp")} background />
            </Link>
          </Grid>
          <Grid item size={{ md: 5, sm: 12 }} className="items-end">
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/mobile-app.png?updatedAt=1735632792088"
              alt="img"
            />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-28">
        <Stack className="text-center mb-10">
          <p className="font-bold text-4xl">{t("bychoosingsuperForex")}</p>
          <p className="font-bold text-4xl">{t("youbenefit")}</p>
        </Stack>
        <Grid container spacing={5} className="">
          <StyledIconCard
            icon={GlobalIcon}
            name={t("localcurrency")}
            text={t("openanaccount")}
            link="/local-currencies"
          />
          <StyledIconCard
            icon={CrownIcon}
            name={t("membershipclub")}
            text={t("everycustomer")}
            link=""
          />
          <StyledIconCard
            icon={PresentIcon}
            name={t("bonusprogram")}
            text={t("weoffer")}
            link=""
          />
          <StyledIconCard
            icon={SuperforexIcon}
            name={t("mobileapp")}
            text={t("ourappallow")}
            link=""
          />
          <StyledIconCard
            icon={MoneyProtectIcon}
            name={t("depositprotection")}
            text={t("doyouever")}
            link=""
          />
          <StyledIconCard
            icon={ForexCopyIcon}
            name={t("forexcopy")}
            text={t("forexcopyservice")}
            link=""
          />
        </Grid>
        <div
          className="grid grid-cols-1 md:grid-cols-2 md:gap-9 md:py-24"
          id="mt4"
        >
          <Image
            src={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/devices.jpg?updatedAt=1735632942235"
            }
            width={600}
            height={600}
            quality={100}
            alt="image "
            className="rounded-md w-full"
          />
          <div className="text-center flex flex-col justify-center items-center">
            <h1 className="max-sm:pt-5 text-4xl font-semibold ">
              {t("metatrader4")}
            </h1>
            <p className="py-5 text-start">{t("superforexmetatrader")}</p>
            <div className="flex justify-center gap-2">
              <Link
                href={
                  "https://download.mql5.com/cdn/web/superfin.corp/mt4/superfin4setup.exe"
                }
                target="_blank"
              >
                <Button name={"Desktop"} background={true} />
              </Link>
              <Link
                href={
                  "https://download.mql5.com/cdn/mobile/mt4/android?server=SuperFin-Demo,SuperFin-Live"
                }
                target="_blank"
              >
                <Button name={"Android"} background={true} />
              </Link>
              <Link
                href={
                  "https://download.mql5.com/cdn/mobile/mt4/ios?server=SuperFin-Demo,SuperFin-Live"
                }
                target="_blank"
              >
                <Button name={"IOS"} background={true} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Container maxWidth="lg" className="my-28">
        <p className="font-bold text-center text-4xl">{t("ourawards")}</p>
        <Grid container spacing={5} className="my-10">
          <Grid
            item
            size={{ md: 3, xs: 12 }}
            className="rounded-xl flex flex-col items-center hover:shadow-2xl"
          >
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/fd-2023.svg?updatedAt=1735633180412"
              width={80}
              height={80}
              alt={"img"}
              className="m-5 items-center"
            />
            <p className="font-bold p-1 text-center text-xl">
              {t("bestforex")}
            </p>
            <p className="font-bold p-3 text-light_grey">
              {t("financederivative")}
            </p>
          </Grid>

          <Grid
            item
            size={{ md: 3, xs: 12 }}
            className="rounded-xl flex flex-col items-center hover:shadow-2xl"
          >
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2022.svg?updatedAt=1735633180502"
              width={80}
              height={80}
              alt={"img"}
              className="m-5 items-center"
            />
            <p className="font-bold p-1 text-center text-xl">
              {t("bestcryptocurrency")}
            </p>
            <p className="font-bold p-3 text-light_grey">
              {t("globalbusiness")}
            </p>
          </Grid>

          <Grid
            item
            size={{ md: 3, xs: 12 }}
            className="rounded-xl flex flex-col items-center hover:shadow-2xl"
          >
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/wfa-2022.svg?updatedAt=1735633180491"
              width={80}
              height={80}
              alt={"img"}
              className="m-5 items-center"
            />
            <p className="font-bold p-1 text-center text-xl">
              {t("thebestwithdrawal")}
            </p>
            <p className="font-bold p-3 text-light_grey">
              {t("byworldfinancial")}
            </p>
          </Grid>

          <Grid
            item
            size={{ md: 3, xs: 12 }}
            className="rounded-xl flex flex-col items-center hover:shadow-2xl"
          >
            <img
              src="https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2021.svg?updatedAt=1735633180540"
              width={80}
              height={80}
              alt={"img"}
              className="m-5 items-center"
            />
            <p className="font-bold p-1 text-center text-xl">
              {t("bestecnbroker")}
            </p>
            <p className="font-bold p-3 text-light_grey">
              {t("globalbusiness")}
            </p>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" className="my-28">
        <p className="font-bold text-center text-4xl">
          {t("supportedpayment")}
        </p>
        <p className="text-center m-5">
          {t("and20plus")}
          <Link href={"/deposit-and-withdrawal"}>
            <span className="text-primary font-bold">
              &nbsp; {t("depositandwithdrawals")}
            </span>
          </Link>
        </p>
        <PaymentSlider />
      </Container>
      <Container maxWidth="lg" className="my-14">
        <p className="font-bold text-center text-5xl">{t("tryityourself")}</p>
        <p className="text-center my-10">{t("thebestwaytodecide")}</p>
        <Stack direction="row" spacing={5} justifyContent="center">
          <div onClick={handleOpen}>
            <Button name={t("openrealaccount")} background />
          </div>
          <Link href="/demo-account">
            <Button name={t("opendemoaccount")} />
          </Link>
        </Stack>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AccountForm
            data={[
              "Standard",
              "Swap-Free",
              "No Spread",
              "Micro Cent",
              "Profi Stp",
              "Crypto",
              "ECN Standard",
              "ECN Standard Mini",
              "ECN Swap-Free",
              "ECN Swap-Free Mini",
              "ECN Crypto",
              "Sticpay STP",
            ]}
          />
        </Box>
      </Modal>

      <Container className="relative">
        <div className="text-grey text-justify pb-7">{t("sactional")}</div>
        <div className="text-grey text-justify pb-16">{t("address")}</div>
      </Container>
      <Footer />
    </main>
  );
}
