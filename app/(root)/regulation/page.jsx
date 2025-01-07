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

import Download from "../../../public/download.svg";
import StyledButton from "../about-company/button";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  color: white;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
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

const StyledGrid2 = ({ name, text1, text2, icon, img, link, reverse }) => {
  return (
    <Grid
      container
      justifyContent="center"
      marginTop={5}
      className="text-default"
      style={reverse && { display: "flex", flexDirection: "row-reverse" }}
    >
      <Grid size={6} alignContent="center">
        <Stack
          className="p-5"
          style={{ display: "flex", alignItems: "space-between" }}
        >
          <Stack direction="row" alignItems="center">
            <Image src={icon} height={80} width={80} alt={"icon"} />
            <Typography variant="h4" className="m-4">
              {name}
            </Typography>
          </Stack>
          <Typography>{text1}</Typography>
          {text2 && (
            <>
              <br />
              <Typography>{text2}</Typography>
            </>
          )}
          <br />
          <StyledButton link={link} />
        </Stack>
      </Grid>

      <Grid size={6}>
        <Card className="mx-5">
          <img src={img} />
        </Card>
      </Grid>
    </Grid>
  );
};

const StyledGrid3 = ({ name, img }) => {
  return (
    <Grid
      item
      size={{ xs: 12, sm: 6, md: 3 }}
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <Card
        className="text-center flex flex-col items-center"
        style={{
          flexGrow: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card className="h-150 w-150 rounded-full p-3 flex items-center justify-center">
          <img src={img} width={96} height={96} alt={img} />
        </Card>
        <Stack className="p-4">
          <CardContent>
            <Typography variant="h7" className="text-default">
              {name}
            </Typography>
          </CardContent>
        </Stack>
      </Card>
    </Grid>
  );
};

export default function Regulation() {
  const t = useTranslations("Regulation");
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(
      "https://superforex.com/finateqs-investor-compensation-fund.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

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
            {t("superForexRegulation")}
          </Typography>
        </Container>
      </Stack>

      <Container maxWidth="lg" className="py-10 relative" style={{ zIndex: 2 }}>
        <Typography className="text-default">
          {t("superForexRegulationDescription")}
        </Typography>

        <Grid container className="py-5 text-default">
          <Grid item size={{ sm: 12, md: 6 }}>
            <Card>
              <img
                src="https://ik.imagekit.io/3idyffxxb/New%20Folder/preview-fund.jpg?updatedAt=1735635363692"
                alt={"img"}
              />
              <CardContent>
                <Stack direction="row" justifyContent="space-between">
                  <Typography className="font-bold">
                    {t("investorCompensationFund")}
                  </Typography>
                  <Image
                    src={Download}
                    className="cursor-pointer"
                    onClick={handleLinkClick}
                    alt={"icon download"}
                  />
                </Stack>
              </CardContent>
            </Card>
            <Typography className="pt-5">
              {t("investorCompensationFundDescription")}
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <StyledStack>
        <Container className="relative" style={{ zIndex: 2 }}>
          <Stack>
            <Typography variant="h4" className="text-default" marginTop={5}>
              {t("licensedBrokerIs")}
            </Typography>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignContent="space-between"
              marginY={5}
            >
              <StyledGrid3
                name={t("fightWithMoneyLaundering")}
                img={
                  "https://ik.imagekit.io/3idyffxxb/New%20Folder/counter-laundering.svg?updatedAt=1735635490953"
                }
              />
              <StyledGrid3
                name={t("provideServices")}
                img={
                  "https://ik.imagekit.io/3idyffxxb/New%20Folder/financial-services.svg?updatedAt=1735635490587"
                }
              />
              <StyledGrid3
                name={t("insuranceOfFunds")}
                img={
                  "https://ik.imagekit.io/3idyffxxb/New%20Folder/deposit-protection.svg?updatedAt=1735635478936"
                }
              />
              <StyledGrid3
                name={t("safetyAndSecurityOfFunds")}
                img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/funds-security%20(1).svg?updatedAt=1735635490888"}
              />
            </Grid>
          </Stack>

          <Stack>
            <Typography variant="h4" marginTop={5}>
              {t("liquidityProviders")}
            </Typography>
            <Typography variant="h7" marginTop={5}>
              {t("liquidityProvidersDescription")}
            </Typography>

            <Card className="my-5">
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignContent="space-between"
                marginY={5}
              >
                <Grid item>
                  <img src="https://ik.imagekit.io/3idyffxxb/New%20Folder/bnp-paribas.png?updatedAt=1735635592742" />
                </Grid>
                <Grid item>
                  <img src="https://ik.imagekit.io/3idyffxxb/New%20Folder/natixis.png?updatedAt=1735635592675" />
                </Grid>
                <Grid item>
                  <img src="https://ik.imagekit.io/3idyffxxb/New%20Folder/citibank.png?updatedAt=1735635592351" />
                </Grid>
                <Grid item>
                  <img src="https://ik.imagekit.io/3idyffxxb/New%20Folder/ubs.png?updatedAt=1735635592255" />
                </Grid>
              </Grid>
            </Card>
          </Stack>

          <Stack>
            <Typography variant="h4" marginTop={5}>
              {t("trademark")}
            </Typography>
            <Typography variant="h7" marginTop={5} paddingBottom={5}>
              {t("trademarkDescription")}
            </Typography>
          </Stack>
        </Container>
      </StyledStack>
    </>
  );
}
