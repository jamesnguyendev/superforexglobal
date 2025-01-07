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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../../components/buttonCustomize";
import AccountForm from "../../components/accountForm";

import LeverageIcon from "../../../public/svg-stock-trading/leverage.svg";
import CashIcon from "../../../public/svg-stock-trading/cash.svg";
import FocusIcon from "../../../public/svg-stock-trading/focus.svg";
import ChartIcon from "../../../public/svg-indices-trading/chart.svg";
import Chart1Icon from "../../../public/svg-indices-trading/chart1.svg";
import SunIcon from "../../../public/svg-indices-trading/sun.svg";
import ManipulateIcon from "../../../public/svg-indices-trading/manipulate.svg";
import CompassIcon from "../../../public/svg-indices-trading/compass.svg";
import Global from "../../../public/global.svg";

import SliderCard from "./sliderCard";

import { useTranslations } from "next-intl";

const StyledDot = styled.div`
  position: relative;
  padding-top: 64px;

  &::before {
    content: "";
    position: absolute;
    top: 24px;
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(66, 14, 148);
  }
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

const StyledContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 35% 0px 20% 20%;
    z-index: -2;
    background-color: rgb(235, 234, 240);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 50% 20% 10% 0px;
    z-index: -1;
    background-color: rgb(245, 244, 249);
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const AutoCardSlider = () => {
  const t = useTranslations("IndicesTrading");
  const sliders = [
    {
      icon: ChartIcon,
      name: t("growingMarket"),
      text: t("growingMarketDescription"),
    },
    {
      icon: CompassIcon,
      name: t("reliableTrends"),
      text: t("reliableTrendsDescription"),
    },
    {
      icon: SunIcon,
      name: t("seasonalityInTrade"),
      text: t("seasonalityInTradeDescription"),
    },
    {
      icon: Chart1Icon,
      name: t("technicalAnalysisReasonable"),
      text: t("technicalAnalysisReasonableDescription"),
    },
    {
      icon: ManipulateIcon,
      name: t("difficultToManipulate"),
      text: t("difficultToManipulateDescription"),
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
        />
      ))}
    </Slider>
  );
};

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
          <div className="text-default font-semibold gap-y-2 py-6 text-center">
            <h1 className="text-[2.5rem] leading-[3rem]">{titleBanner}</h1>
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
      )}
    </section>
  );
}

const StyledStepCard = ({
  icon,
  name,
  transform1,
  transform2,
  isMobile,
}) => {
  return (
    <Grid
      item
      size={{ md: 4, xs: 12 }}
      className="text-default rounded-xl shadow-2xl overflow-hidden flex flex-col items-center p-10"
      style={{
        transform: !isMobile
          ? (transform1 && transform2 && "translateY(84px)") ||
            (transform2 && "translateY(42px)")
          : "none",
      }}
    >
      <img src={icon} width={135} alt={icon} />
      <Typography variant="h5" className="text-center">
        {name}
      </Typography>
    </Grid>
  );
}

const StyledSvgCard = ({ icon, name, text }) => {
  return (
    <Grid
      item
      size={{ md: 4, xs: 12 }}
      className="text-white rounded-xl shadow-md overflow-hidden flex flex-col hover:-translate-y-5 hover:shadow-2xl"
    >
      <Image
        src={icon}
        width={68}
        height={68}
        alt={icon}
        className="bg-[#0ee4be] rounded-full m-10 self-center"
      />
      <div className="text-center px-10 pb-10 bg-white text-default flex-grow">
        <Typography variant="h6" className="font-semi-bold mb-5">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </div>
    </Grid>
  );
}

const StyledWhiteCard = ({ icon, name }) => {
  return (
    <Grid
      item
      size={{ lg: 3, md: 6, xs: 12 }}
      className="text-default rounded-xl hover:shadow-2xl flex flex-col items-center cursor-pointer py-10"
    >
      <img src={icon} alt={icon} className="my-10" />
      <Typography className="font-semi-bold mb-5">{name}</Typography>
    </Grid>
  );
}

const StyledIconCard = ({ icon, iconHover }) => {
  const [hover, setHover] = useState(false);

  return (
    <Grid
      item
      size={{ md: 4, xs: 12 }}
      className="rounded-xl hover:shadow-2xl flex justify-center items-center cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <Image src={iconHover} alt={iconHover} className="m-10" />
      ) : (
        <Image src={icon} alt={icon} className="m-10" />
      )}
    </Grid>
  );
}

const StyledBanner = () => {
  const t = useTranslations("IndicesTrading");
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
    <div className="relative">
      <Banner
        imgDesktop={"/Image/hero-indices.jpg"}
        imgMobile={"/Image/hero-indices.jpg"}
        titleBanner={t("indicesTrading")}
        subTitleBanner={t("createAccountNow")}
        buttonName={t("openAccount")}
      />
      <div
        className={`absolute flex flex-col items-center justify-center ${
          isMobile ? "inset-0 mx-20" : "right-0 inset-y-0"
        }`}
      >
        <img
          src={"https://ik.imagekit.io/3idyffxxb/New%20Folder/stoxx.png?updatedAt=1735661740999"}
          alt="img"
          className="mb-5"
        ></img>
        <img
          src={"https://ik.imagekit.io/3idyffxxb/New%20Folder/nasdaq.png?updatedAt=1735661741223"}
          alt="img"
          className="mb-5"
        ></img>
        <img
          src={"https://ik.imagekit.io/3idyffxxb/New%20Folder/dowjones.png?updatedAt=1735661741059"}
          alt="img"
          className="mb-5"
        ></img>
      </div>
    </div>
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

export default function IndicesTrading() {
  const t = useTranslations("IndicesTrading");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900); // 768px is the 'md' breakpoint in Tailwind
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <StyledBanner />

      {/* <Container
        maxWidth="lg"
        className="my-28 text-default flex flex-col"
        style={{ zIndex: 2 }}
      >
        <Typography variant="h4" className="font-semi-bold text-center">
          {t("tradeIndicesWithSuperForex")}
        </Typography>
        <br />
        <Typography className="text-center">
          {t("bestTradingConditionsForEveryone")}
        </Typography>
        <Grid container spacing={5} className="my-10">
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/indices-trading/company-advantages/minimum-deposit.svg"
            }
            name={t("minimumDeposit")}
          />
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/indices-trading/company-advantages/ecn-accounts.svg"
            }
            name={t("accounts")}
          />
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/indices-trading/company-advantages/commission.svg"
            }
            name={t("commission")}
          />
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/indices-trading/company-advantages/payment-methods.svg"
            }
            name={t("paymentMethods")}
          />
        </Grid>
      </Container> */}

      <Container maxWidth="sm">
        <Divider />
      </Container>

      <div className="relative md:py-28" style={{ backgroundColor: "#f5f4f9" }}>
        <Container maxWidth="lg" className="text-default py-16">
          <Grid container spacing={5}>
            <Grid
              item
              size={{ md: 6, xs: 0 }}
              className="absolute inset-y-0 left-0 self-center"
            >
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/laptop.png?updatedAt=1735641924563"
                alt="img"
              />
            </Grid>
            <Grid item size={{ md: 6, xs: 0 }}></Grid>
            <Grid item size={{ md: 6, sm: 12 }} className="right-0">
              <Typography variant="h4" className="font-semi-bold">
                {t("indicesTradingForEveryone")}
              </Typography>
              <br />
              <Typography>
                {t("indicesTradingForEveryoneDescription")}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container maxWidth="lg" className="my-28 text-default">
        <Typography variant="h3" className="text-center">
          {t("advantagesOfIndicesTrading")}
        </Typography>
        <Grid container spacing={2} className="py-16">
          <StyledSvgCard
            icon={LeverageIcon}
            name={t("useLeverage")}
            text={t("useLeverageDescription")}
          />
          <StyledSvgCard
            icon={CashIcon}
            name={t("technicalAnalysisFriendly")}
            text={t("technicalAnalysisFriendlyDescription")}
          />
          <StyledSvgCard
            icon={FocusIcon}
            name={t("lessSpeculation")}
            text={t("lessSpeculationDescription")}
          />
        </Grid>
      </Container>

      <Container maxWidth="sm">
        <Divider />
      </Container>

      <div className="" style={{ backgroundColor: "#f5f4f9" }}>
        <Container
          maxWidth="lg"
          className=" text-default py-28 mt-28 flex justify-center items-center"
        >
          <Grid container spacing={2}>
            <Grid item size={{ md: 2, xs: 12 }}>
              <Typography variant="h4" className="font-semi-bold">
                {t("whyConsiderTradingIndices")}
              </Typography>
            </Grid>
            <Grid item size={{ md: 10, xs: 12 }}>
              <Container maxWidth="md">
                <AutoCardSlider />
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container maxWidth="lg" className="my-28 text-center relative">
        <Image
          src={Global}
          width={1920}
          height={300}
          alt="Picture of the author"
          style={{
            // zIndex: -1,
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center">
          <Typography variant="h3" className="text-default">
            {t("tradeMostPopularIndices")}
          </Typography>
          <br />
          <p className="text-default mb-5">
            {t("manyOthersAccordingToWishes")}
          </p>

          <Grid container columns={10} spacing={2} padding={2}>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/01.svg?updatedAt=1735642066305"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/02.svg?updatedAt=1735642066202"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/03.svg?updatedAt=1735642066217"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/04.svg?updatedAt=1735642066357"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/05.svg?updatedAt=1735642066192"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/06.svg?updatedAt=1735642066037"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/07.svg?updatedAt=1735642066256"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/08.svg?updatedAt=1735642065997"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/09.svg?updatedAt=1735642066262"
                alt="img"
              />
            </Grid>
            <Grid item size={2}>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/10.svg?updatedAt=1735642065852"
                alt="img"
              />
            </Grid>
          </Grid>
        </div>
      </Container>

      <Container maxWidth="sm">
        <Divider />
      </Container>

      <Container maxWidth="lg" className="my-28 text-default">
        <Typography variant="h3" className="text-center">
          {t("easyToStart")}
        </Typography>
        <Grid container spacing={2} className="py-16">
          <StyledStepCard
            icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/1%20(1).svg?updatedAt=1735642211302"}
            name={t("openRealTradingAccount")}
            isMobile={isMobile}
            transform1
            transform2
          />
          <StyledStepCard
            icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/2%20(1).svg?updatedAt=1735642211206"}
            name={t("makeDeposit")}
            isMobile={isMobile}
            transform2
          />
          <StyledStepCard
            icon={"https://ik.imagekit.io/3idyffxxb/New%20Folder/3%20(1).svg?updatedAt=1735642210884"}
            name={t("startTrading")}
            isMobile={isMobile}
          />
        </Grid>
      </Container>

      <Container maxWidth="sm">
        <Divider />
      </Container>

      {/* <div className="mt-28 py-28 bg-[#f5f4f9]">
        <AccountForm data={["Standard"]} showText={false} />
      </div> */}

      <StyledContainer className="py-28">
        <AccountForm
          data={["Standard"]}
          showText={false}
          background={true}
          option={true}
        />
        <div className="absolute bg-[#363f48] -z-10 inset-x-0 bottom-0 h-40" />
      </StyledContainer>
    </>
  );
}
