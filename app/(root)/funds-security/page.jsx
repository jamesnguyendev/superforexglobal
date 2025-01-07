"use client";
import React from "react";
import { Container, Stack, Typography, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";

import StyledGrid4 from "./grid4";

import { useTranslations } from "next-intl";

export default function FundsSecurity() {
  const t = useTranslations("FundsSecurity");
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
            {t("fundsSecurity")}
          </Typography>
        </Container>
      </Stack>

      <Container maxWidth="lg" className="py-10 relative" style={{ zIndex: 2 }}>
        <Typography className="text-default">
          {t("fundsSecurityDescription")}
        </Typography>

        <Grid
          container
          spacing={2}
          className="py-10"
          justifyContent="center"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <StyledGrid4
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/segregated-funds.jpg?updatedAt=1735635981101"
            }
            name={t("segregatedFunds")}
            text={t("segregatedFundsDescription")}
          />
          <StyledGrid4
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/ssl-certificate.jpg?updatedAt=1735635981096"
            }
            name={t("sslCertificate")}
            text={t("sslCertificateDescription")}
          />
          <StyledGrid4
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/account-verification.jpg?updatedAt=1735635981112"
            }
            name={t("accountVerification")}
            text={t("accountVerificationDescription")}
          />
          <StyledGrid4
            img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/login-history.jpg?updatedAt=1735635980977"}
            name={t("loginHistory")}
            text={t("loginHistoryDescription")}
          />
          <StyledGrid4
            img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/device-id.jpg?updatedAt=1735635981102"}
            name={t("deviceID")}
            text={t("deviceIDDescription")}
          />
          <StyledGrid4
            img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/allowed-ip.jpg?updatedAt=1735635980906"}
            name={t("allowedIPList")}
            text={t("allowedIPListDescription")}
          />
        </Grid>

        <Typography className="text-default">
          {t("fundsSecurityConclusion")}
        </Typography>
      </Container>
    </>
  );
}
