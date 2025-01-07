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
import TaskIcon from "../../../public/svg-local-currencies/task.svg";
import ScheduleIcon from "../../../public/svg-local-currencies/schedule.svg";
import CardIcon from "../../../public/svg-local-currencies/card.svg";
import CocktailIcon from "../../../public/svg-local-currencies/cocktail.svg";
import AppleFreeIcon from "../../../public/svg-local-currencies/appleFree.svg";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  color: white;
  ${
    "" /* background-image: url("https://superforex.com/img/gold-trading/hero.jpg"); */
  }
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -100px;
    height: 100px;
    background: white;
    ${"" /* z-index: 1; */}
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
    ${"" /* z-index: 1; */}
    transform: skewY(6deg);
  }
`;

const StyledGoldStack = styled.div`
  position: relative;
  color: white;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
  background-position: center center;
  background-size: cover;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -175px;
    height: 350px;
    background: white;
    z-index: 1;
    transform: skewY(-10deg);
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -175px;
    height: 350px;
    background: white;
    z-index: 1;
    transform: skewY(-10deg);
  }
`;

const StyledGold1Stack = styled.div`
  position: relative;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
  background-position: center center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: -150px;
    left: 0px;
    right: 0px;
    height: 350px;
    background: white;
    transform: skewY(-10deg);
  }
`;

const dataCountry = [
  {
    currency: "AED",
    countries: [
      {
        flag: "/Image/flags/afghanistan.webp",
        name: "Afghanistan",
      },
      {
        flag: "/Image/flags/algeria.webp",
        name: "Algeria",
      },
      {
        flag: "/Image/flags/bahrain.webp",
        name: "Bahrain",
      },
    ],
    text: "and 7 more",
  },
  {
    currency: "MYR",
    countries: [
      {
        flag: "/Image/flags/brunei.webp",
        name: "Brunei",
      },
      {
        flag: "/Image/flags/malaysia.webp",
        name: "Malaysia",
      },
    ],
    text: "",
  },
  {
    currency: "IDR",
    countries: [
      {
        flag: "/Image/flags/indonesia.webp",
        name: "Indonesia",
      },
    ],
    text: "",
  },
  {
    currency: "RUB",
    countries: [
      {
        flag: "/Image/flags/armenia.webp",
        name: "Armenia",
      },
      {
        flag: "/Image/flags/azerbaijan.webp",
        name: "Azerbaijan",
      },
      {
        flag: "/Image/flags/belarus.webp",
        name: "Belarus",
      },
    ],
    text: "and 3 more",
  },
  {
    currency: "ZAR",
    countries: [
      {
        flag: "/Image/flags/lesotho.webp",
        name: "Lesotho",
      },
      {
        flag: "/Image/flags/namibia.webp",
        name: "Namibia",
      },
      {
        flag: "/Image/flags/south-africa.webp",
        name: "South Africa",
      },
    ],
    text: "",
  },
  {
    currency: "NGN",
    countries: [
      {
        flag: "/Image/flags/nigerian.webp",
        name: "Nigeria",
      },
    ],
    text: "",
  },
  {
    currency: "INR",
    countries: [
      {
        flag: "/Image/flags/india.webp",
        name: "India",
      },
    ],
    text: "",
  },
  {
    currency: "PKR",
    countries: [
      {
        flag: "/Image/flags/pakistan.webp",
        name: "Pakistan",
      },
    ],
    text: "",
  },
  {
    currency: "THB",
    countries: [
      {
        flag: "/Image/flags/thailand.webp",
        name: "Thailand",
      },
    ],
    text: "",
  },
  {
    currency: "BRL",
    countries: [
      {
        flag: "/Image/flags/brasil.webp",
        name: "Brazil",
      },
    ],
    text: "",
  },
  {
    currency: "BDT",
    countries: [
      {
        flag: "/Image/flags/bangladesh.webp",
        name: "Bangladesh",
      },
    ],
    text: "",
  },
  {
    currency: "EGP",
    countries: [
      {
        flag: "/Image/flags/egypt.webp",
        name: "Egypt",
      },
    ],
    text: "",
  },
  {
    currency: "CHF",
    countries: [
      {
        flag: "/Image/flags/austria.webp",
        name: "Austria",
      },
      {
        flag: "/Image/flags/belgium.webp",
        name: "Belgium",
      },
      {
        flag: "/Image/flags/bulgaria.webp",
        name: "Bulgaria",
      },
    ],
    text: "and 29 more",
  },
  {
    currency: "MXN",
    countries: [
      {
        flag: "/Image/flags/belize.webp",
        name: "Belize",
      },
      {
        flag: "/Image/flags/bolivia.webp",
        name: "Bolivia",
      },
      {
        flag: "/Image/flags/chile.webp",
        name: "Chile",
      },
    ],
    text: "and 13 more",
  },
  {
    currency: "JPY",
    countries: [
      {
        flag: "/Image/flags/japan.webp",
        name: "Japan",
      },
    ],
    text: "",
  },
  {
    currency: "TRY",
    countries: [
      {
        flag: "/Image/flags/turkey.webp",
        name: "Turkey",
      },
    ],
    text: "",
  },
  {
    currency: "PHP",
    countries: [
      {
        flag: "/Image/flags/philippines.webp",
        name: "Philippines",
      },
    ],
    text: "",
  },
  {
    currency: "HKD",
    countries: [
      {
        flag: "/Image/flags/china.webp",
        name: "China",
      },
      {
        flag: "/Image/flags/hongkong.webp",
        name: "Hong Kong",
      },
      {
        flag: "/Image/flags/taiwan.webp",
        name: "Taiwan",
      },
    ],
    text: "",
  },
  {
    currency: "SGD",
    countries: [
      {
        flag: "/Image/flags/singapore.webp",
        name: "Singapore",
      },
    ],
    text: "",
  },
  {
    currency: "PEN",
    countries: [
      {
        flag: "/Image/flags/peru.webp",
        name: "Peru",
      },
    ],
    text: "",
  },
  {
    currency: "CLP",
    countries: [
      {
        flag: "/Image/flags/chile.webp",
        name: "Chile",
      },
    ],
    text: "",
  },
  {
    currency: "ILS",
    countries: [
      {
        flag: "/Image/flags/israel.webp",
        name: "Israel",
      },
      {
        flag: "/Image/flags/palestine.webp",
        name: "Palestine",
      },
    ],
    text: "",
  },
  {
    currency: "TZS",
    countries: [
      {
        flag: "/Image/flags/tanzania.webp",
        name: "Tanzania",
      },
    ],
    text: "",
  },
  {
    currency: "KES",
    countries: [
      {
        flag: "/Image/flags/kenya.webp",
        name: "Kenya",
      },
    ],
    text: "",
  },
  {
    currency: "GHS",
    countries: [
      {
        flag: "/Image/flags/ghana.webp",
        name: "Ghana",
      },
    ],
    text: "",
  },
  {
    currency: "UGX",
    countries: [
      {
        flag: "/Image/flags/uganda.webp",
        name: "Uganda",
      },
    ],
    text: "",
  },
  {
    currency: "ZMW",
    countries: [
      {
        flag: "/Image/flags/zambia.webp",
        name: "Zambia",
      },
    ],
    text: "",
  },
  {
    currency: "RWF",
    countries: [
      {
        flag: "/Image/flags/rwanda.webp",
        name: "Rwanda",
      },
    ],
    text: "",
  },
  {
    currency: "VND",
    countries: [
      {
        flag: "/Image/flags/vietnam.webp",
        name: "Vietnam",
      },
    ],
    text: "",
  },
  {
    currency: "XAF",
    countries: [
      {
        flag: "/Image/flags/cameroon.webp",
        name: "Cameroon",
      },
      {
        flag: "/Image/flags/central-african-republic.webp",
        name: "Central African Republic",
      },
      {
        flag: "/Image/flags/chad.webp",
        name: "Chad",
      },
    ],
    text: "and 4 more",
  },
  {
    currency: "PLN",
    countries: [
      {
        flag: "/Image/flags/poland.webp",
        name: "Poland",
      },
    ],
    text: "",
  },
  {
    currency: "AUD",
    countries: [
      {
        flag: "/Image/flags/australia.webp",
        name: "Australia",
      },
    ],
    text: "",
  },
  {
    currency: "CAD",
    countries: [
      {
        flag: "/Image/flags/canada.webp",
        name: "Canada",
      },
    ],
    text: "",
  },
  {
    currency: "JOD",
    countries: [
      {
        flag: "/Image/flags/jordan.webp",
        name: "Jordan",
      },
    ],
    text: "",
  },
  {
    currency: "NZD",
    countries: [
      {
        flag: "/Image/flags/new-zealand.webp",
        name: "New Zealand",
      },
    ],
    text: "",
  },
  {
    currency: "CZK",
    countries: [
      {
        flag: "/Image/flags/czech-republic.webp",
        name: "Czech Republic",
      },
    ],
    text: "",
  },
  {
    currency: "SEK",
    countries: [
      {
        flag: "/Image/flags/sweden.webp",
        name: "Sweden",
      },
    ],
    text: "",
  },
  {
    currency: "DKK",
    countries: [
      {
        flag: "/Image/flags/denmark.webp",
        name: "Denmark",
      },
    ],
    text: "",
  },
  {
    currency: "NOK",
    countries: [
      {
        flag: "/Image/flags/norway.webp",
        name: "Norway",
      },
    ],
    text: "",
  },
  {
    currency: "HUF",
    countries: [
      {
        flag: "/Image/flags/hungary.webp",
        name: "Hungary",
      },
    ],
    text: "",
  },
  {
    currency: "KZT",
    countries: [
      {
        flag: "/Image/flags/kazakhstan.webp",
        name: "Kazakhstan",
      },
      {
        flag: "/Image/flags/kyrgyzstan.webp",
        name: "Kyrgyzstan",
      },
      {
        flag: "/Image/flags/tajikistan.webp",
        name: "Tajikistan",
      },
    ],
    text: "and 2 more",
  },
  {
    currency: "KRW",
    countries: [
      {
        flag: "/Image/flags/south-korea.webp",
        name: "South Korea",
      },
    ],
    text: "",
  },
  {
    currency: "COP",
    countries: [
      {
        flag: "/Image/flags/colombia.webp",
        name: "Colombia",
      },
    ],
    text: "",
  },
  {
    currency: "TWD",
    countries: [
      {
        flag: "/Image/flags/china.webp",
        name: "China",
      },
      {
        flag: "/Image/flags/hongkong.webp",
        name: "Hong Kong",
      },
      {
        flag: "/Image/flags/taiwan.webp",
        name: "Taiwan",
      },
    ],
    text: "",
  },
];

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

const StyledWhiteCard = ({ size, icon, name, text }) => {
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
          className="rounded-full my-10"
        />
      </div>
      <Stack className="text-center p-5">
        <Typography variant="h5" className="font-semi-bold mb-5">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </Stack>
    </Grid>
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

export default function LocalCurrencies() {
  const t = useTranslations("LocalCurrencies");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Banner
        imgDesktop={"/Image/local-currencies-desktop.webp"}
        imgMobile={"/Image/local-currencies-mobile.webp"}
        titleBanner={t("localCurrencyTradingAccount")}
        subTitleBanner={t("openAccountQuickAndEasily")}
        buttonName={t("openAccount")}
      />

      <div className="sm:block">
        <StyledStack />
      </div>

      <Container
        maxWidth="lg"
        className="mb-28 text-default relative"
        style={{ zIndex: 3 }}
      >
        <Typography variant="h4" className="font-semi-bold">
          {t("aboutLocalCurrencies")}
        </Typography>
        <br />
        <Typography>
          {t("aboutLocalCurrenciesDescription")}
        </Typography>
      </Container>

      <StyledGoldStack>
        <Container
          maxWidth="lg"
          className="mb-28 text-default relative"
          style={{ zIndex: 3 }}
        >
          <Typography variant="h4" className="font-semi-bold">
            {t("advantagesOfOpeningLocalCurrencyAccount")}
          </Typography>
          <Grid container spacing={5} className="my-10">
            <StyledWhiteCard
              size={{ md: 4, sm: 12 }}
              icon={CocktailIcon}
              name={t("promptly")}
              text={t("promptlyDescription")}
            />
            <StyledWhiteCard
              size={{ md: 4, sm: 12 }}
              icon={CardIcon}
              name={t("conveniently")}
              text={t("convenientlyDescription")}
            />
            <StyledWhiteCard
              size={{ md: 4, sm: 12 }}
              icon={AppleFreeIcon}
              name={t("free")}
              text={t("freeDescription")}
            />
          </Grid>
        </Container>

        <Container
          maxWidth="lg"
          className="mt-28 relative flex flex-col items-center"
          style={{ zIndex: 2 }}
        >
          <Typography variant="h4" className="text-3xl text-white">
            {t("listOfCountriesWithLocalCurrencyAccount")}
          </Typography>

          <div className=" bg-white rounded-lg border-2 text-default max-w-4xl my-10">
            {dataCountry.map((data, index) => (
              <Link
                href={`local-currencies/${data.currency.toLowerCase()}`}
                key={index}
              >
                <Grid
                  container
                  spacing={5}
                  className="py-3 px-5 border-b-2 items-center hover:bg-[#f6f9fc]"
                >
                  <Grid item size={{ md: 2, xs: 12 }}>
                    <Typography>{data.currency}</Typography>
                  </Grid>
                  <Grid
                    item
                    size={{ md: 10, xs: 12 }}
                    className="flex flex-wrap gap-3"
                  >
                    <div className="flex gap-3">
                      {data.countries.map((country, index) => (
                        <div
                          className="flex justify-center gap-2 items-center"
                          key={index}
                        >
                          <Image
                            src={country.flag}
                            height={24}
                            width={24}
                            alt={country.flag}
                          />
                          <Typography className="">{country.name}</Typography>
                        </div>
                      ))}
                    </div>

                    {data.text != "" && <Typography>{data.text}</Typography>}
                  </Grid>
                </Grid>
              </Link>
            ))}
          </div>
        </Container>
      </StyledGoldStack>

      <Container
        maxWidth="lg"
        className="text-default my-28 relative"
        style={{ zIndex: 2 }}
      >
        <Typography variant="h5" className="font-semi-bold">
          {t("howToOpenAccount")}
        </Typography>

        <Grid container spacing={5} className="my-10">
          <StyledGoldCard
            size={{ md: 4, xs: 12 }}
            icon={TaskIcon}
            step={t("step1")}
            name={t("fillFormAtBottomOfPage")}
            bgImg={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
            }
            bgColor={"#478c89"}
          />
          <StyledGoldCard
            size={{ md: 4, xs: 12 }}
            icon={ScheduleIcon}
            step={t("step2")}
            name={t("chooseAccountCurrency")}
            bgImg={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
            }
            bgColor={"#34736b"}
          />
          <StyledGoldCard
            size={{ md: 4, xs: 12 }}
            icon={CardIcon}
            step={t("step3")}
            name={t("makeDepositAndStartTrading")}
            bgImg={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
            }
            bgColor={"#2d5f66"}
          />
        </Grid>
      </Container>

      <StyledGold1Stack>
        <Container
          maxWidth="lg"
          className="pb-28 pt-40 relative"
          style={{ zIndex: 2 }}
        >
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
