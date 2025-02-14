"use client";
import React, { useState } from "react";
import {
  Button,
  Container,
  Stack,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import Global from "../../../public/global.svg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import StyledGrid3 from "./grid3";
import StyledGrid4 from "./grid4";
import StyledButton from "./button";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  color: white;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735633964340");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -150px;
    height: 320px;
    background: white;
    transform: skewY(-6deg);
    z-index: 1;
  }
`;

export default function AboutCompany() {
  const t = useTranslations("AboutCompany");
  const [tab, setTab] = useState("mission");

  return (
    <div>
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
            {t("aboutCompany")}
          </Typography>
        </Container>
      </Stack>

      <Container maxWidth="lg" className="my-10">
        <Typography variant="h4" className="text-default">
          {t("globalBroker")}
        </Typography>

        <Stack className="relative p-5">
          <Image
            src={Global}
            width={1920}
            height={300}
            alt="Picture of the author"
            style={{
              zIndex: -1,
              objectFit: "cover",
            }}
          />

          <Grid
            container
            spacing={4}
            justifyContent="center"
            className="sm:absolute left-0 right-0 top-48"
          >
            <StyledGrid4 number={"150+"} text={t("countries")} />
            <StyledGrid4 number={"1"} text={t("secondToOpenDeal")} />
            <StyledGrid4 number={"$ 100,000"} text={t("dailyProfit")} />
          </Grid>
        </Stack>

        <Stack className="text-default py-5 relative" style={{ zIndex: 2 }}>
          <Typography>{t("description1")}</Typography>

          <Typography>{t("description2")}</Typography>
        </Stack>
      </Container>

      <StyledStack>
        <Container
          maxWidth="lg"
          className="relative"
          style={{ zIndex: 2, paddingBottom: 5 }}
        >
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignContent="space-between"
            marginTop={10}
          >
            <StyledGrid3
              name={t("whyChooseUs")}
              img={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/why-choose-us.svg?updatedAt=1735634181181"
              }
              link="/why-choose-us"
            />
            <StyledGrid3
              name={t("regulation")}
              img={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/regulation.svg?updatedAt=1735634181731"
              }
              link="/regulation"
            />
            <StyledGrid3
              name={t("awards")}
              img={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/awards.svg?updatedAt=1735634181232"
              }
              link="/awards"
            />
            <StyledGrid3
              name={t("fundsSecurity")}
              img={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/funds-security.svg?updatedAt=1735634181724"
              }
              link="/funds-security"
            />
          </Grid>

          <Card className="text-default my-10">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              className=""
            >
              <p
                onClick={() => setTab("mission")}
                className={`p-1 px-4 mx-3 my-3 font-semi-bold rounded-full cursor-pointer hover:text-grey ${
                  tab == "mission"
                    ? "bg-default text-white hover:text-white"
                    : "bg-white"
                }`}
              >
                {t("goal")}
              </p>
              <p
                onClick={() => setTab("vision")}
                className={`p-1 px-4 mx-3 my-3 font-semi-bold rounded-full cursor-pointer hover:text-grey ${
                  tab == "vision"
                    ? "bg-default text-white hover:text-white"
                    : "bg-white"
                }`}
              >
                {t("vision")}
              </p>
              <p
                onClick={() => setTab("value")}
                className={`p-1 px-4 mx-3 my-3 font-semi-bold rounded-full cursor-pointer hover:text-grey ${
                  tab == "value"
                    ? "bg-default text-white hover:text-white"
                    : "bg-white"
                }`}
              >
                {t("values")}
              </p>
            </Stack>

            {tab == "mission" && (
              <>
                <CardContent>{t("goalDescription1")}</CardContent>
                <CardContent>{t("goalDescription2")}</CardContent>
              </>
            )}

            {tab == "vision" && (
              <>
                <CardContent>{t("visionDescription")}</CardContent>
              </>
            )}

            {tab == "value" && (
              <>
                <CardContent>{t("trust")}</CardContent>
                <CardContent>{t("quality")}</CardContent>
                <CardContent>{t("professionalism")}</CardContent>
                <CardContent>{t("leadership")}</CardContent>
              </>
            )}
          </Card>
        </Container>
      </StyledStack>
    </div>
  );
}
