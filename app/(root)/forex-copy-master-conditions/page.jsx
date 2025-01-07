"use client";
import React from "react";
import { Container, Stack, Typography, Card, Chip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "../../components/buttonCustomize";
import AccountForm from "../../components/accountForm";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import Svg1 from "../../../public/svg-forex-copy-follower-conditions/1.svg";
import Svg2 from "../../../public/svg-forex-copy-follower-conditions/2.svg";
import Svg3 from "../../../public/svg-forex-copy-follower-conditions/3.svg";
import Svg5 from "../../../public/svg-forex-copy-follower-conditions/5.svg";
import Svg6 from "../../../public/svg-forex-copy-follower-conditions/6.svg";
import Svg7 from "../../../public/svg-forex-copy-follower-conditions/7.svg";

import Svg4 from "../../../public/svg-forex-copy-master-conditions/1.svg";
import Svg8 from "../../../public/svg-forex-copy-master-conditions/2.svg";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
  background-position: center center;
  background-size: cover;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -200px;
    height: 400px;
    background: white;
    z-index: 1;
    transform: skewY(-10deg);
  }
`;

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
          width={120}
          height={120}
          alt={icon}
          className="rounded-full my-10 p-5 bg-white shadow-2xl"
        />
      </div>
      <div className="text-center p-5">
        <div className="font-semi-bold text-2xl mb-5">{name}</div>
        <p>{text}</p>
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
        {/* <Typography>{text}</Typography> */}
      </div>
    </Grid>
  );
};

export default function ForexCopyMasterConditions() {
  const t = useTranslations("ForexCopyMasterConditions");

  return (
    <>
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
            {t("forexCopyForMasters")}
          </Typography>
          <br />
          <Typography variant="h5" color="#ffffffb3" className="px-2">
            {t("additionalIncome")}
          </Typography>
        </Container>
      </Stack>

      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold text-default">
          {t("aboutForexCopy")}
        </p>
        <br />
        <p>{t("aboutForexCopyDescription1")}</p>
        <br />
        <p>{t("aboutForexCopyDescription2")}</p>
      </Container>

      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold text-default">
          {t("advantagesForMasters")}
        </p>
        <Grid container spacing={4} className="text-default" paddingY={10}>
          <StyledWhiteCard
            size={{ xs: 12, md: 4, sm: 6 }}
            icon={Svg4}
            name={t("highProfit")}
            text={t("highProfitDescription")}
          />
          <StyledWhiteCard
            size={{ xs: 12, md: 4, sm: 6 }}
            icon={Svg2}
            name={t("theyAreThousands")}
            text={t("theyAreThousandsDescription")}
          />
          <StyledWhiteCard
            size={{ xs: 12, md: 4, sm: 6 }}
            icon={Svg8}
            name={t("partnershipProgram")}
            text={t("partnershipProgramDescription")}
          />
        </Grid>
      </Container>

      <StyledStack>
        <Container
          maxWidth="lg"
          className="py-10 relative text-default"
          style={{ zIndex: 2 }}
        >
          <p className="text-4xl font-semi-bold text-default">
            {t("howToBecomeMaster")}
          </p>
          <Grid container spacing={5} className="text-default" marginY={5}>
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={Svg5}
              step={t("step1")}
              name={t("openRealAccount")}
              bgImg={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
              }
              bgColor={"#55a0b5"}
            />
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={Svg6}
              step={t("step2")}
              name={t("registerAsMaster")}
              bgImg={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
              }
              bgColor={"#468b90"}
            />
            <StyledGoldCard
              size={{ md: 4, xs: 12 }}
              icon={Svg7}
              step={t("step3")}
              name={t("addedToMastersList")}
              bgImg={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/pattern-2.svg?updatedAt=1735640175320"
              }
              bgColor={"#237873"}
            />
          </Grid>

          <p className="text-lg font-semi-bold text-white text-center">
            {t("averageSubscriberBenefit")}
          </p>
          <br />
          <AccountForm
            data={["Standard"]}
            showText={false}
            option={true}
            background
          />
        </Container>
      </StyledStack>
    </>
  );
}
