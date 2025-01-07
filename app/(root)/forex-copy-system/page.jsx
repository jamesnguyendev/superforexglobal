"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Stack,
  Typography,
  Card,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "../../components/buttonCustomize";
import styled from "styled-components";

import Svg1 from "../../../public/svg-forex-copy-system/1.svg";
import Svg2 from "../../../public/svg-forex-copy-system/2.svg";
import Svg3 from "../../../public/svg-forex-copy-system/3.svg";
import Img1 from "../../../public/svg-forex-copy-system/scheme-1.webp";
import Img2 from "../../../public/svg-forex-copy-system/scheme-2.webp";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  height: 100%;
  min-height: 700px;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/hero%20(5).jpg?updatedAt=1735646301603");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -100px;
    height: 200px;
    background: white;
    transform: skewY(6deg);
    z-index: 1;
  }
`;

const StyledStackBottom = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -200px;
    height: 320px;
    background: white;
    transform: skewY(-6deg);
    z-index: 1;
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
          className="rounded-full my-10 p-3 bg-white shadow-2xl"
        />
      </div>
      <div className="text-center p-5">
        <div className="font-semi-bold text-2xl mb-5">{name}</div>
        <p>{text}</p>
      </div>
    </Grid>
  );
};

export default function ForexCopySystem() {
  const t = useTranslations("ForexCopySystem");

  return (
    <>
      <StyledStack>
        <Container maxWidth="lg">
          <div className="text-white text-2xl absolute bottom-32 md:right-40">
            <p className="text-3xl">{t("forexCopyService")}</p>
            <p>{t("bestWayForSocialTrading")}</p>
          </div>
        </Container>
      </StyledStack>

      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold">{t("aboutForexCopy")}</p>
        <br />
        <p>{t("signalInterpretation")}</p>
      </Container>

      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold">{t("copyTradingAdvantages")}</p>
        <Grid container spacing={4} className="text-default" paddingY={10}>
          <StyledWhiteCard
            size={{ xs: 12, sm: 4 }}
            icon={Svg1}
            name={t("optimalConditions")}
            text={t("startWithDeposit")}
          />
          <StyledWhiteCard
            size={{ xs: 12, sm: 4 }}
            icon={Svg2}
            name={t("hugeNetwork")}
            text={t("joinCommunity")}
          />
          <StyledWhiteCard
            size={{ xs: 12, sm: 4 }}
            icon={Svg3}
            name={t("advantageousReward")}
            text={t("commissionSystem")}
          />
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p className="text-4xl font-semi-bold self-start">
          {t("copyServiceExamples")}
        </p>
        <br />
        <div className="flex flex-col gap-5 items-center self-center text-xl md:w-4/5">
          <p>{t("caseAProfitDaily")}</p>
          <Image src={Img1} />
          <p>{t("caseBProfitShare")}</p>
          <Image src={Img2} />
        </div>
      </Container>

      <StyledStackBottom>
        <Container
          maxWidth="lg"
          className="py-10 relative text-default"
          style={{ zIndex: 2 }}
        >
          <div className="flex justify-center gap-10">
            <Link href="/forex-copy-follower-conditions">
              <Button name={t("becomeFollower")} background={true} />
            </Link>
            <Link href="/forex-copy-master-conditions">
              <Button name={t("becomeMaster")} background={true} />
            </Link>
          </div>
        </Container>
      </StyledStackBottom>
    </>
  );
}
