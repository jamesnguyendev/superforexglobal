"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Stack, Typography, Card } from "@mui/material";

import { readNameCountry } from "../../utils/phoneContry";
import Buttontw from "../../components/buttonCustomize";
import AccountForm from "./accountForm";

import { useTranslations } from "next-intl";

export default function CallBack() {
  const t = useTranslations("CallBack");
  
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
            {t("callBack")}
          </Typography>
        </Container>
      </Stack>

      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{ zIndex: 2 }}
      >
        <Typography className="mb-5">
          {t("callBackDescription1")}
        </Typography>
        <Typography className="mb-5">
          {t("callBackDescription2")}
        </Typography>
        <Typography className="mb-5">
          {t("callBackDescription3")}
        </Typography>
        <AccountForm />
      </Container>
    </>
  );
}
