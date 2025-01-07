"use client";
import React, { useState } from "react";
import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StyledStack from "./stack";

import { useTranslations } from "next-intl";

export default function Awards() {
  const t = useTranslations("Awards");

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
          {t("ourAwards")}
          </Typography>
        </Container>
      </Stack>

      <Container maxWidth="lg" className="py-10 relative" style={{ zIndex: 2 }}>
        <Typography className="text-default">
          {t("awardsDescription")}
        </Typography>

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/fd-2023.svg?updatedAt=1735633180412"}
          name={t("bestForexAffiliateProgramAfrica2023")}
          text={t("bestForexAffiliateProgramAfrica2023Description")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2022.svg?updatedAt=1735633180502"}
          name={t("bestCryptocurrencyBrokerLATAM2022")}
          text={t("bestCryptocurrencyBrokerLATAM2022Description")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/wfa-2022.svg?updatedAt=1735633180491"}
          name={t("bestWithdrawalOptions2022Africa")}
          text={t("bestWithdrawalOptions2022AfricaDescription")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2021.svg?updatedAt=1735633180540"}
          name={t("bestECNBrokerAfrica2021GBM")}
          text={t("bestECNBrokerAfrica2021GBMDescription")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/ibm-2021.svg?updatedAt=1735633180379"}
          name={t("bestECNBrokerAfrica2021IBM")}
          text={t("bestECNBrokerAfrica2021IBMDescription")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2020.svg?updatedAt=1735633180477"}
          name={t("bestNewECNBrokerAfrica2020")}
          text={t("bestNewECNBrokerAfrica2020Description")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/show-fx-2017.svg?updatedAt=1735633180286"}
          name={t("bestAffiliateProgram2017")}
          text={t("bestAffiliateProgram2017Description")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/show-fx-2016.svg?updatedAt=1735633180488"}
          name={t("bestForexBrokerMENA2016")}
          text={t("bestForexBrokerMENA2016Description")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/fx-report-2015.svg?updatedAt=1735633180507"}
          name={t("fastestGrowingBroker2015")}
          text={t("fastestGrowingBroker2015Description")}
        />

        <StyledStack
          img={"https://ik.imagekit.io/3idyffxxb/New%20Folder/show-fx-2015.svg?updatedAt=1735633180416"}
          name={t("bestNewcomer2015")}
          text={t("bestNewcomer2015Description")}
        />
      </Container>
      <img src="https://ik.imagekit.io/3idyffxxb/New%20Folder/awards-bg.jpg?updatedAt=1735635841101" alt="img" />
    </>
  );
}
