"use client";
import React from "react";
import { Container, Stack, Typography, Card } from "@mui/material";
import Grid from "@mui/material/Grid2";

import StyledGrid4 from "./grid4";

import { useTranslations } from "next-intl";
import Image from "next/image";

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
        {/* ////// */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mb-24 mb-12 my-6">
          <div className="">
            <Image
              alt="sl"
              width={100}
              height={100}
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/segregated-funds.jpg?updatedAt=1735635981101"
              }
              className="w-full h-full rounded-lg"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-2xl">{t("segregatedFunds")}</span>
            <span className="">{t("segregatedFundsDescription")}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mb-24 mb-12">
          <div className="md:order-2">
            <Image
              alt="sl"
              width={100}
              height={100}
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/ssl-certificate.jpg?updatedAt=1735635981096"
              }
              className="w-full h-full rounded-lg"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-6 ">
            <span className="text-2xl">{t("sslCertificate")}</span>
            <span className="">{t("sslCertificateDescription")}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  md:mb-24 mb-12">
          <div className="">
            <Image
              alt="sl"
              width={100}
              height={100}
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/account-verification.jpg?updatedAt=1735635981112"
              }
              className="w-full h-full rounded-lg"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-6 ">
            <span className="text-2xl">{t("accountVerification")}</span>
            <span className="">{t("accountVerificationDescription")}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  md:mb-24 mb-12">
          <div className="md:order-2">
            <Image
              alt="sl"
              width={100}
              height={100}
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/login-history.jpg?updatedAt=1735635980977"
              }
              className="w-full h-full rounded-lg"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-6 ">
            <span className="text-2xl">{t("loginHistory")}</span>
            <span className="">{t("loginHistoryDescription")}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  md:mb-24 mb-12">
          <div className="">
            <Image
              alt="sl"
              width={100}
              height={100}
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/device-id.jpg?updatedAt=1735635981102"
              }
              className="w-full h-full rounded-lg"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-6 ">
            <span className="text-2xl">{t("deviceID")}</span>
            <span className="">{t("deviceIDDescription")}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mb-24 mb-12">
          <div className="md:order-2">
            <Image
              alt="sl"
              width={100}
              height={100}
              src={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/allowed-ip.jpg?updatedAt=1735635980906"
              }
              className="w-full h-full rounded-lg"
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-6 ">
            <span className="text-2xl">{t("allowedIPList")}</span>
            <span className="">{t("allowedIPListDescription")}</span>
          </div>
        </div>
        <Typography className="text-default">
          {t("fundsSecurityConclusion")}
        </Typography>
      </Container>
    </>
  );
}
