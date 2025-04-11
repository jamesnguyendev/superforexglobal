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

import AmazonIcon from "../../../public/svg-stock-trading/amazon.svg";
import AppleIcon from "../../../public/svg-stock-trading/apple.svg";
import IbmIcon from "../../../public/svg-stock-trading/ibm.svg";
import IntelIcon from "../../../public/svg-stock-trading/intel.svg";
import MicrosoftIcon from "../../../public/svg-stock-trading/microsoft.svg";
import TeslaIcon from "../../../public/svg-stock-trading/tesla.svg";
import AmazonHoverIcon from "../../../public/svg-stock-trading/amazonHover.svg";
import AppleHoverIcon from "../../../public/svg-stock-trading/appleHover.svg";
import IbmHoverIcon from "../../../public/svg-stock-trading/ibmHover.svg";
import IntelHoverIcon from "../../../public/svg-stock-trading/intelHover.svg";
import MicrosoftHoverIcon from "../../../public/svg-stock-trading/microsoftHover.svg";
import TeslaHoverIcon from "../../../public/svg-stock-trading/teslaHover.svg";
import LeverageIcon from "../../../public/svg-stock-trading/leverage.svg";
import CashIcon from "../../../public/svg-stock-trading/cash.svg";
import FocusIcon from "../../../public/svg-stock-trading/focus.svg";
import Icon01 from "../../../public/svg-stock-trading/01.svg";
import Icon02 from "../../../public/svg-stock-trading/02.svg";
import Icon03 from "../../../public/svg-stock-trading/03.svg";

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
  align-items: center;
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

const SliderCard = ({ icon, name }) => {
  return (
    <Card className="my-10 rounded-xl text-default">
      <Grid container>
        <Grid
          item
          size={{ md: 4, xs: 12 }}
          className="bg-[#6820fd] flex items-center justify-center py-5"
        >
          <img src={icon} height={100} width={100} alt={icon} />
        </Grid>

        <Grid
          item
          size={{ md: 8, xs: 12 }}
          className="flex items-center justify-center"
        >
          <StyledSliderCard>
            <Typography
              variant="h5"
              className="text-default py-5"
              style={{ zIndex: 2 }}
            >
              {name}
            </Typography>
          </StyledSliderCard>
        </Grid>
      </Grid>
    </Card>
  );
};

const AutoCardSlider = () => {
  const t = useTranslations("StockTrading");
  const sliders = [
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/1.svg?updatedAt=1735641148449",
      name: t("netProfitIncrease"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/2.svg?updatedAt=1735641148654",
      name: t("valuationOfRatingAgencies"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/3.svg?updatedAt=1735641148238",
      name: t("strategicDevelopmentPlans"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/4.svg?updatedAt=1735641148071",
      name: t("enteringNewMarkets"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/5.svg?updatedAt=1735641148261",
      name: t("positiveEconomicEvents"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/6.svg?updatedAt=1735641148518",
      name: t("successfulReleaseOfNewProduct"),
    },
    {
      icon: "https://ik.imagekit.io/3idyffxxb/New%20Folder/7.svg?updatedAt=1735641148135",
      name: t("boardStatements"),
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
        <SliderCard key={index} icon={slider.icon} name={slider.name} />
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
};

const StyledStepCard = ({ icon, name, transform1, transform2, isMobile }) => {
  return (
    <Grid
      item
      size={{ md: 4, xs: 12 }}
      className="text-default rounded-xl shadow-2xl overflow-hidden flex flex-col p-10"
      style={{
        transform: !isMobile
          ? (transform1 && transform2 && "translateY(84px)") ||
            (transform2 && "translateY(42px)")
          : "none",
      }}
    >
      <Image src={icon} alt={icon} />
      <StyledDot>
        <Typography variant="h5" className="text-center">
          {name}
        </Typography>
      </StyledDot>
    </Grid>
  );
};

const StyledSvgCard = ({ icon, name, text }) => {
  return (
    <Grid
      item
      size={{ md: 4, xs: 12 }}
      className="text-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
    >
      <Image
        src={icon}
        width={68}
        height={68}
        alt={icon}
        className="bg-[#6820fd] rounded-full m-10"
      />
      <div className="text-center px-10 pb-10 bg-white text-default flex-grow">
        <p className="font-semi-bold mb-5 text-xl">{name}</p>
        <Typography>{text}</Typography>
      </div>
    </Grid>
  );
};

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
};

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
};

const StyledBanner = () => {
  const t = useTranslations("StockTrading");
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
        imgDesktop={
          "https://ik.imagekit.io/9lcvptcyj/911937d9938123df7a90.jpg?updatedAt=1742527644013"
        }
        imgMobile={"/Image/bg-stock.jpg"}
        titleBanner={t("stockTrading")}
        subTitleBanner={t("tradeSharesOfTopCompanies")}
        buttonName={t("openAccount")}
      />
      <div
        className={`absolute flex flex-col items-center justify-center ${
          isMobile ? "inset-0" : "right-44 inset-y-0"
        }`}
      >
        {/* <Grid container spacing={5} className="p-5">
          <Grid item>
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/facebook.svg?updatedAt=1735661741151"
              }
              width={88}
              height={120}
              alt="img"
            ></img>
          </Grid>
          <Grid item>
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/apple.svg?updatedAt=1735661741010"
              }
              width={88}
              height={120}
              alt="img"
            ></img>
          </Grid>
          <Grid item>
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/twitter.svg?updatedAt=1735661741266"
              }
              width={88}
              height={120}
              alt="img"
            ></img>
          </Grid>
        </Grid> 
        <Grid container spacing={5} className="p-5">
          <Grid item>
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/google.svg?updatedAt=1735661741135"
              }
              width={88}
              height={120}
              alt="img"
            ></img>
          </Grid>
          <Grid item>
            <img
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/microsoft.svg?updatedAt=1735661741046"
              }
              width={88}
              height={120}
              alt="img"
            ></img>
          </Grid>
        </Grid>*/}
      </div>
    </div>
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

export default function StockTrading() {
  const t = useTranslations("StockTrading");
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
          {t("tradeStocksWithSuperForex")}
        </Typography>
        <br />
        <Typography className="text-center">
          {t("bestTradingConditions")}
        </Typography>
        <Grid container spacing={5} className="my-10">
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/stock-trading/conditions/minimum-deposit.svg"
            }
            name={t("minimumDeposit")}
          />
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/stock-trading/conditions/commission.svg"
            }
            name={t("commission")}
          />
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/stock-trading/conditions/payment-methods.svg"
            }
            name={t("paymentMethods")}
          />
          <StyledWhiteCard
            icon={
              "https://superforex.com/img/stock-trading/conditions/accounts.svg"
            }
            name={t("accounts")}
          />
        </Grid>
      </Container> */}

      <div className="relative md:py-28" style={{ backgroundColor: "#1a003d" }}>
        <Container maxWidth="lg" className="text-white py-16">
          <Grid container spacing={5}>
            <Grid item size={{ md: 6, sm: 12 }}>
              <p className="font-bold text-4xl">
                {t("stockTradingForEveryone")}
              </p>
              <br />
              <p>{t("stockTradingForEveryoneDescription")}</p>
            </Grid>

            <Grid
              item
              size={{ md: 6, xs: 0 }}
              className="absolute inset-y-0 right-0 self-center"
            >
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/img.jpg?updatedAt=1735641006331"
                alt="img"
                className="rounded-2xl"
              />
            </Grid>
          </Grid>
        </Container>
      </div>

      <Container maxWidth="lg" className="my-28 text-default">
        <Grid container spacing={2} className="items-center justify-center">
          <Grid item size={{ md: 6, sm: 12 }}>
            <Typography
              variant="h3"
              className="font-semi-bold text-center md:text-left"
            >
              {t("workWithPopularCompanies")}
            </Typography>
            <br />
            <Typography className="text-center md:text-left">
              {t("manyOthersAccordingToWishes")}
            </Typography>
          </Grid>
          <Grid container size={{ md: 6, sm: 12 }}>
            <Grid
              container
              style={{
                transform: isMobile ? "none" : "translateX(calc(50% - 25vw))",
              }}
            >
              <StyledIconCard icon={AmazonIcon} iconHover={AmazonHoverIcon} />
              <StyledIconCard icon={IntelIcon} iconHover={IntelHoverIcon} />
              <StyledIconCard icon={AppleIcon} iconHover={AppleHoverIcon} />
            </Grid>
            <Grid container>
              <StyledIconCard icon={IbmIcon} iconHover={IbmHoverIcon} />
              <StyledIconCard
                icon={MicrosoftIcon}
                iconHover={MicrosoftHoverIcon}
              />
              <StyledIconCard icon={TeslaIcon} iconHover={TeslaHoverIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <div
        className=""
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/3idyffxxb/New%20Folder/bg%20(1).jpg?updatedAt=1735641053271')",
        }}
      >
        <Container
          maxWidth="md"
          className="text-center text-white py-28 flex flex-col items-center"
        >
          <Typography variant="h3" className="font-semi-bold">
            {t("whyDoSharePricesChange")}
          </Typography>
          <br />
          <Typography>{t("sharePricesChangeDescription")}</Typography>
          <Container maxWidth="sm" className="mt-10">
            <Typography variant="h5" className="font-semi-bold">
              {t("mainGrowthFactors")}
            </Typography>
            <AutoCardSlider />
            <Typography>{t("noticeGrowthFactors")}</Typography>
          </Container>
        </Container>
      </div>

      <Container maxWidth="lg" className="my-28 text-default">
        <Typography variant="h3" className="text-center">
          {t("advantagesOfStockTrading")}
        </Typography>
        <Grid container spacing={2} className="py-16">
          <StyledSvgCard
            icon={LeverageIcon}
            name={t("useLeverage")}
            text={t("useLeverageDescription")}
          />
          <StyledSvgCard
            icon={CashIcon}
            name={t("earnOnOverpricedStocks")}
            text={t("earnOnOverpricedStocksDescription")}
          />
          <StyledSvgCard
            icon={FocusIcon}
            name={t("easyToFocus")}
            text={t("easyToFocusDescription")}
          />
        </Grid>
      </Container>

      <Container maxWidth="lg" className="my-28 text-default">
        <Typography variant="h3" className="text-center">
          {t("easyToStart")}
        </Typography>
        <Grid container spacing={2} className="py-16">
          <StyledStepCard
            icon={Icon01}
            name={t("openRealTradingAccount")}
            isMobile={isMobile}
            transform1
            transform2
          />
          <StyledStepCard
            icon={Icon02}
            name={t("makeDeposit")}
            isMobile={isMobile}
            transform2
          />
          <StyledStepCard
            icon={Icon03}
            name={t("startTrading")}
            isMobile={isMobile}
          />
        </Grid>
      </Container>

      <div className="py-28 bg-[#f5f4f9]">
        <AccountForm
          data={["Standard"]}
          showText={false}
          background={true}
          option={true}
        />
      </div>
    </>
  );
}
