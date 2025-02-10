"use client";
import React, { useState } from "react";
import { Container, Stack, Typography, Card, CardContent } from "@mui/material";
import Button from "../../components/buttonCustomize";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import Link from "next/link";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useTranslations } from "next-intl";

const StyledGrid2 = ({ name, text1, text2, icon, img, link, reverse }) => {
  return (
    <Grid
      container
      justifyContent="center"
      marginTop={5}
      className="text-default"
      style={reverse && { display: "flex", flexDirection: "row-reverse" }}
    >
      <Grid size={{ xs: 12, sm: 6 }} alignContent="center">
        <Stack
          className="p-5"
          style={{ display: "flex", alignItems: "space-between" }}
        >
          <Stack direction="row" alignItems="center">
            <img src={icon} height={80} width={80} alt={"icon"} />
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

      <Grid size={{ xs: 12, sm: 6 }}>
        <Card className="p-5">
          <img src={img} />
        </Card>
      </Grid>
    </Grid>
  );
};

const StyledButton = ({ link = "" }) => {
  const t = useTranslations("WhyChooseUs");
  const [hover, setHover] = useState(false);

  return (
    <Link href={link}>
      <Button name={t("moreInfo")} background={true} />
    </Link>
  );
};

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  return (
    <>
      <Stack className="relative">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            color="white"
            className="px-2"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translate(-0%, -50%)",
            }}
          >
            {t("whyChooseUs")}
          </Typography>
        </Container>

        <img
          src="https://ik.imagekit.io/3idyffxxb/New%20Folder/default.svg?updatedAt=1735634159546"
          width={1920}
          height={300}
          alt="Picture of the author"
          style={{
            zIndex: -1,
            objectFit: "cover",
            width: "100vw",
            height: 150,
          }}
        />
      </Stack>

      <Container maxWidth="lg" className="my-10 relative">
        <Typography className="text-default">
          {t("whyChooseUsDescription")}
        </Typography>
        <br />
        <Typography className="text-default">
          {t("individualAndCorporateClients")}
        </Typography>

        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/mobile-trading.svg?updatedAt=1735634889916"
          }
          img={
            "https://ik.imagekit.io/kn40ppx9b/Superforex/trading%20platform.jpg?updatedAt=1739177332678"
          }
          name={t("mobileTrading")}
          text1={t("mobileTradingDescription")}
          text2={t("mobileAppUsage")}
          link="/mobile-app"
          reverse
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/many-deposit-methods.svg?updatedAt=1735634889348"
          }
          img={
            "https://ik.imagekit.io/kn40ppx9b/Superforex/pexels-photo-5031038.webp?updatedAt=1739177882377"
          }
          name={t("manyDepositMethods")}
          text1={t("manyDepositMethodsDescription")}
          link="/deposit-and-withdrawal"
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/forex-copy.svg?updatedAt=1735634886287"
          }
          img={
            "https://ik.imagekit.io/kn40ppx9b/Superforex/how-to-select-best-mobile-trading-app-for-investment-img-3-768x512.webp?updatedAt=1739177950380"
          }
          name={"Forex Copy"}
          text1={t("forexCopyDescription")}
          link="/forex-copy-system"
          reverse
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/bonuses-contests.svg?updatedAt=1735634886312"
          }
          img={
            "https://ik.imagekit.io/kn40ppx9b/Superforex/closeup-successful-businessman-p.jpg?updatedAt=1739177622066"
          }
          name={t("bonusesAndContests")}
          text1={t("bonusesAndContestsDescription")}
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/news-analysis.svg?updatedAt=1735634889296"
          }
          img={
            "https://ik.imagekit.io/kn40ppx9b/Superforex/pexels-anna-nekrashevich-6801874.jpg?updatedAt=1739177685754"
          }
          name={t("economicNewsAndAnalysis")}
          text1={t("economicNewsAndAnalysisDescription")}
          text2={t("marketUnderstanding")}
          link="/economic-calendar"
          reverse
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/diversity-of-accounts.svg?updatedAt=1735634886260"
          }
          img={
            "https://ik.imagekit.io/kn40ppx9b/Superforex/stacked-credit-cards.jpg?updatedAt=1739177728576"
          }
          name={t("diversityOfAccounts")}
          text1={t("diversityOfAccountsDescription")}
          link="/stp-accounts"
        />
      </Container>
    </>
  );
}
