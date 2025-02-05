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
      <Grid size={6} alignContent="center">
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

      <Grid size={6}>
        <Card className="p-5">
          <img src={img} />
        </Card>
      </Grid>
    </Grid>
  );
};

const StyledGrid3 = ({ name, img, link }) => {
  const t = useTranslations("WhyChooseUs");
  return (
    <Grid
      item
      size={3}
      className="px-4"
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
        <Card className="h-150 w-150 flex items-center justify-center">
          <img src={img} />
        </Card>
        <Stack className="p-4">
          <CardContent>
            <Typography variant="h6" className="text-default">
              {name}
            </Typography>
          </CardContent>
          <Link href={link} className="flex justify-center">
            <Button name={t("moreInfo")} background={true} />
          </Link>
          {/* <StyledButton link={link} /> */}
        </Stack>
      </Card>
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
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/mobile-trading.jpg?updatedAt=1735634889822"
          }
          name={t("mobileTrading")}
          text1={t("mobileTradingDescription")}
          text2={t("mobileAppUsage")}
          reverse
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/many-deposit-methods.svg?updatedAt=1735634889348"
          }
          img={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/many-deposit-methods.jpg?updatedAt=1735634889529"
          }
          name={t("manyDepositMethods")}
          text1={t("manyDepositMethodsDescription")}
          link="/deposit-and-withdrawal"
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/education.svg?updatedAt=1735634886011"
          }
          img={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/education.jpg?updatedAt=1735635033333"
          }
          name={t("education")}
          text1={t("educationDescription")}
          reverse
          link="/education"
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/forex-copy.svg?updatedAt=1735634886287"
          }
          img={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/forex-copy.jpg?updatedAt=1735634886196"
          }
          name={"Forex Copy"}
          text1={t("forexCopyDescription")}
          link="/forex-copy-system"
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/bonuses-contests.svg?updatedAt=1735634886312"
          }
          img={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/bonuses-contests.jpg?updatedAt=1735634885986"
          }
          name={t("bonusesAndContests")}
          text1={t("bonusesAndContestsDescription")}
          reverse
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/news-analysis.svg?updatedAt=1735634889296"
          }
          img={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/news-analysis.jpg?updatedAt=1735634889424"
          }
          name={t("economicNewsAndAnalysis")}
          text1={t("economicNewsAndAnalysisDescription")}
          text2={t("marketUnderstanding")}
        />
        <StyledGrid2
          icon={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/diversity-of-accounts.svg?updatedAt=1735634886260"
          }
          img={
            "https://ik.imagekit.io/3idyffxxb/New%20Folder/diversity-of-accounts.jpg?updatedAt=1735634885952"
          }
          name={t("diversityOfAccounts")}
          text1={t("diversityOfAccountsDescription")}
          link="/stp-accounts"
          reverse
        />

        <Stack className="text-default">
          <p className="p-5 text-3xl">{t("specialOffers")}</p>
          <StyledGrid2
            icon={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/news-analysis.svg?updatedAt=1735634889296"
            }
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/auto-reset-balance.jpg?updatedAt=1735634886265"
            }
            name={t("autoResetBalance")}
            text1={
              "It often happens that if you make any mistakes during trading, they will gradually eat away at your deposits. Suffering losses can be tough as they bring your account balance closer and closer to zero, and particularly bad situations can take that even below zero, putting you in debt."
            }
            link={"/auto-reset-balance"}
          />
          <StyledGrid2
            icon={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/diversity-of-accounts.svg?updatedAt=1735634886260"
            }
            img={
              "https://ik.imagekit.io/3idyffxxb/New%20Folder/no-fees-on-deposit.jpg?updatedAt=1735634886229"
            }
            name={t("noDepositFees")}
            text1={
              "SuperForex provides you with more than 30 methods for depositing and withdrawing money. Since we work only with trusted financial partners, we will cover in full or partially the intermediary fees charged by the payment systems when customers deposit funds with us. SuperForex does not charge any internal payments for deposits or withdrawals.SuperForex provides you with more than 30 methods for depositing and withdrawing money. Since we work only with trusted financial partners, we will cover in full or partially the intermediary fees charged by the payment systems when customers deposit funds with us. SuperForex does not charge any internal payments for deposits or withdrawals."
            }
            link="/no-fees-on-deposit"
            reverse
          />
        </Stack>
      </Container>
    </>
  );
}
