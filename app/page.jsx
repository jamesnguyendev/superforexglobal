/* eslint-disable react/jsx-key */
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
  Tab,
  Tabs,
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

const AutoImageSlider = () => {
  const t = useTranslations("AutoSlider");
  const images = [
    {
      imgDesktop:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/web%20SF%20(1920%20x%20550%20px)%2022.png?updatedAt=1739160877835",
      imgMobile:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/mobile%20enc.jpg?updatedAt=1739335506618",
      titleBanner: t("goldtrading"),
      subTitleBanner: t("stableprofit"),
      buttonName: t("openaccount"),
      dot: true,
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
        "https://ik.imagekit.io/kn40ppx9b/Superforex/ECN%20account%20bong%20bong.jpg?updatedAt=1739334575998",
      imgMobile: BannerMobile1,
      titleBanner: t("ecnaccount"),
      subTitleBanner: t("tradingwithspreads"),
      buttonName: t("moreinformation"),
      textBannerColor: false,
      link: "/ecn-accounts",
    },
    {
      imgDesktop:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/1ee21263b3c90d9754d8.jpg?updatedAt=1740712054995",
      imgMobile:
        "https://ik.imagekit.io/kn40ppx9b/Superforex/9a0d63e14d15f14ba804.jpg?updatedAt=1736824707631",
      titleBanner: t("30bonus"),
      subTitleBanner: t("applyonlocal"),
      buttonName: t("learnmore"),
      textBannerColor: false,
      link: "/free-swap",
    },

    {
      imgDesktop:
        "https://ik.imagekit.io/3idyffxxb/New%20Folder/9a9f2f22-91b5-4586-a96c-a664d349fe16.jfif?updatedAt=1743061687927",
      imgMobile: BannerMobile5,
      titleBanner: t("30%Extreme"),
      subTitleBanner: t("thehottestoffer"),
      buttonName: t("getbonus"),
      dot: true,
      link: "/hot-bonus",
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
      link: "/stp-accounts",
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
        <p className="font-bold pb-3 text-4xl text-primary">{name}</p>

        <p className="font-semibold">{text}</p>
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
const transactions1 = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/EURUSD.svg?updatedAt=1735631748190",
    name: "#EURUSD",
    text: "Euro / US Dollar",
    cal: EURUSD,
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
  {
    img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-palladium.svg?updatedAt=1735632034028",
    name: "XPDUSD",
    text: "Palladium",
    cal: XPDUSD,
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
  {
    img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-palladium.svg?updatedAt=1735632034028",
    name: "XPDUSD",
    text: "Palladium",
    cal: XPDUSD,
  },
];
const transactions2 = [
  {
    img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-apple.svg?updatedAt=1735632034169",
    name: "#AAPL",
    text: "Apple Inc.",
    cal: AAPL,
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-tesla.svg?updatedAt=1735632034118",
    name: "#TSLA",
    text: "Tesla",
    cal: TSLA,
  },
  {
    img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/icon-nasdaq.svg?updatedAt=1735632034083",
    name: "NAS100",
    text: "Nasdaq",
    cal: NAS100,
  },
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/goog.svg?updatedAt=1738722372586",
    name: "GOOGL",
    text: "Google",
    cal: NAS100,
  },
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/msft.svg?updatedAt=1738722731014",
    name: "MSFT",
    text: "Microsoft",
    cal: NAS100,
  },
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/fb.svg?updatedAt=1738722731061",
    name: "META",
    text: "Meta",
    cal: NAS100,
  },
];
const transactions3 = [
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/es35.svg?updatedAt=1738724215152",
    name: "ES35",
    text: "Spain 35",
    cal: AAPL,
  },
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/mom.png?updatedAt=1739931411406",
    name: "US30",
    text: "US Wall Street 30",
    cal: AAPL,
  },
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/Layer%202s.png?updatedAt=1738730249112",
    name: "UK100",
    text: "UK 100",
    cal: AAPL,
  },
  {
    img: "https://ik.imagekit.io/kn40ppx9b/Superforex/Layerss%202.png?updatedAt=1738730359670",
    name: "FR40",
    text: "France 40",
    cal: AAPL,
  },
];
const AutoCardSlider = ({ data }) => {
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
    <Slider {...settings} className="lg:w-2/3 w-full">
      {data.map((transaction, index) => (
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
    "https://ik.imagekit.io/kn40ppx9b/Superforex/0014244_enimo.png?updatedAt=1738742314155",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/mastercard.svg?updatedAt=1735633649637",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/bitcoin.svg?updatedAt=1735633647168",
    "https://ik.imagekit.io/kn40ppx9b/Superforex/%E1%BB%8Bu.png?updatedAt=1738743856880",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/triv.svg?updatedAt=1735633647103",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/vodacom.svg?updatedAt=1735633647036",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/astropay.svg?updatedAt=1735633647093",
    "https://ik.imagekit.io/kn40ppx9b/Superforex/images%20(2).png?updatedAt=1738743262960",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/bitwallet.svg?updatedAt=1735633647061",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/sticpay.svg?updatedAt=1735633647021",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/bank-wire-transfer.svg?updatedAt=1735633647020",
    "https://ik.imagekit.io/3idyffxxb/New%20Folder/perfect-money.svg?updatedAt=1735633646552",
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

const InfiniteSlider = () => {
  const t = useTranslations("HomePage");
  const [index, setIndex] = useState(0); // Vị trí phần tử hiện tại
  const itemWidth = 250 + 24; // 250px (width) + 24px (gap)

  const LOGOS = [
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/fd-2023.svg?updatedAt=1735633180412",
      title: t("bestforex"),
      name: t("financederivative"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2022.svg?updatedAt=1735633180502",
      title: t("bestcryptocurrency"),
      name: t("globalbusiness"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/wfa-2022.svg?updatedAt=1735633180491",
      title: t("thebestwithdrawal"),
      name: t("byworldfinancial"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2021.svg?updatedAt=1735633180540",
      title: t("bestecnbroker"),
      name: t("globalbusiness"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/ibm-2021.svg?updatedAt=1735633180379",
      title: t("bestECNBrokerAfrica2021IBM"),
      name: t("bestECNBrokerAfrica2021IBMDescription"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2020.svg?updatedAt=1735633180477",
      title: t("bestNewECNBrokerAfrica2020"),
      name: t("bestNewECNBrokerAfrica2020Description"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/show-fx-2017.svg?updatedAt=1735633180286",
      title: t("bestAffiliateProgram2017"),
      name: t("bestAffiliateProgram2017Description"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/show-fx-2016.svg?updatedAt=1735633180488",
      title: t("bestForexBrokerMENA2016"),
      name: t("bestForexBrokerMENA2016Description"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/fx-report-2015.svg?updatedAt=1735633180507",
      title: t("fastestGrowingBroker2015"),
      name: t("fastestGrowingBroker2015Description"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/show-fx-2015.svg?updatedAt=1735633180416",
      title: t("bestNewcomer2015"),
      name: t("bestNewcomer2015Description"),
    },
  ];
  const totalItems = LOGOS.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 2000); // 10 giây

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div
        className="flex gap-6 transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * itemWidth}px)` }}
      >
        {LOGOS.map((item, index) => (
          <div
            className="slide flex flex-col  items-center justify-center my-6"
            key={index}
          >
            <div className=" w-[250px] h-full p-4 rounded-2xl">
              <Image
                alt="ab"
                width={100}
                height={100}
                src={item.img}
                className="w-full aspect-video  "
              />
              <div className="flex flex-col text-center">
                <span className="font-semibold mb-2">{item.title}</span>
                <span className="truncate">{item.name}</span>
              </div>
            </div>
          </div>
        ))}
        {LOGOS.map((item, index) => (
          <div
            className="slide flex flex-col  items-center justify-center my-6"
            key={index}
          >
            <div className=" w-[250px] h-full p-4 rounded-2xl">
              <Image
                alt="ab"
                width={100}
                height={100}
                src={item.img}
                className="w-full aspect-video  "
              />
              <div className="flex flex-col text-center">
                <span className="font-semibold mb-2">{item.title}</span>
                <span className="truncate">{item.name}</span>
              </div>
            </div>
          </div>
        ))}
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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="lg:w-[65%] w-full text-default text-lg font-normal overflow-y-hidden"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}
export default function Home() {
  const t = useTranslations("HomePage");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mounted, setMounted] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="text-default">
      <Header />
      <AutoImageSlider />
      <Container maxWidth="lg" className="my-12">
        <Grid container spacing={3} className="my-5 capitalize">
          <StyledGrid3 name={"$3TN+"} text={t("tradevolume")} />
          <StyledGrid3 name={"8"} text={t("awardin2024")} />
          <StyledGrid3 name={"150"} text={t("country")} />
          <StyledGrid3 name={"12"} text={t("yearsofope")} />
          <StyledGrid3 name={"24/7"} text={t("supportmutiplelang")} />
          <StyledGrid3 name={"100%"} text={t("fundssecurity")} />
          <StyledGrid3 name={"1:500"} text={t("leverage")} />
          <StyledGrid3 name={"50$"} text={t("minimumdeposit")} />
        </Grid>
      </Container>
      <Container maxWidth="lg" className="my-28">
        <p className="font-bold text-center text-5xl">{t("welcome")}</p>
      </Container>
      <Container maxWidth="lg" className="my-28 ">
        <Grid container spacing={10} className="items-center">
          <Grid item size={12}>
            <StyledStack className="lg:flex justify-center items-center">
              <AutoCardSlider data={transactions1} />
              <AutoCardSlider data={transactions2} />
              <AutoCardSlider data={transactions3} />
            </StyledStack>
          </Grid>
        </Grid>
      </Container>
      <div className="relative bg-[rgb(245,244,249)] my-8">
        <p className="font-bold flex justify-center py-8 text-4xl">
          {t("opentrading")}
        </p>
        <Container className="px-16 flex *:justify-center">
          <div className="flex flex-col lg:flex-row bg-[rgb(245,244,249)] flex-grow items-center lg:h-[340px]">
            <div className="lg:border-r max-lg:border-b-2 border-slate-200  pe-7">
              <Tabs
                orientation="vertical"
                onChange={handleChange}
                value={value}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Tab
                  label={"Standard"}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#35465B",
                      borderRadius: 15,
                    },
                  }}
                />
                <Tab
                  label={"ECN"}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#35465B",
                      borderRadius: 15,
                    },
                  }}
                />
                <Tab
                  label={"CENT"}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#35465B",
                      borderRadius: 15,
                    },
                  }}
                />
                <Tab
                  label={"PRIME"}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#35465B",
                      borderRadius: 15,
                    },
                  }}
                />
                <Tab
                  label={"PRO"}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#fff",
                      backgroundColor: "#35465B",
                      borderRadius: 15,
                    },
                  }}
                />
              </Tabs>
            </div>
            <TabPanel value={value} index={0}>
              <span className="text-[18px]">{t("thisistypicall")}</span>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <span className="text-[18px]">
                {t("themainadvantage")}
                <br />
                <br />
                {t("unlikeprofi-stp")}
              </span>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <span className="text-lg">{t("tabindex2")}</span>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <span className="text-lg">
                {t("thisistypicall")} <br />
                {t("tabindex3")}
              </span>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <span className="text-lg"></span>
            </TabPanel>
          </div>
        </Container>
      </div>
      <Container maxWidth="lg" className="my-28">
        <Grid container spacing={5} className="items-center">
          <Grid item size={{ md: 7, sm: 12 }}>
            <p className="font-bold mb-5 text-4xl">{t("sfx")}</p>
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
              src="https://ik.imagekit.io/kn40ppx9b/Superforex/2%20dien%20thoai%20sf%202.png?updatedAt=1739177211642"
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
            icon={PresentIcon}
            name={t("bonusprogram")}
            text={t("weoffer")}
            link="/hot-bonus"
          />
          <StyledIconCard
            icon={SuperforexIcon}
            name={t("mobileapp")}
            text={t("ourappallow")}
            link="https://play.google.com/store/apps/details?id=com.superforex.cabinet"
          />
          <StyledIconCard
            icon={ForexCopyIcon}
            name={t("forexcopy")}
            text={t("forexcopyservice")}
            link="/forex-copy-system"
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
        <div className="my-10">
          <InfiniteSlider />
        </div>
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
        <h3 className="mb-5 font-semibold text-md">{t("riskwarning")}</h3>
        <div className="text-grey text-justify pb-7">{t("sactional")}</div>
        <h3 className="my-5 font-semibold text-md">
          {t("jurisdictionnotice")}
        </h3>
        <div className="text-grey text-justify pb-8">{t("jurisdiction")}</div>
        <div className="text-grey text-justify pb-16">{t("jurisdiction2")}</div>
      </Container>
      <Container maxWidth="lg" className="my-14">
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
      <Footer />
    </main>
  );
}
