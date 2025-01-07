"use client";
import React from "react";
import { Container, Stack, Typography, Card, Chip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "../../components/buttonCustomize";
import Link from "next/link";
import styled from "styled-components";

import { useTranslations } from "next-intl";

const ContestsGrid4 = ({
  img,
  name,
  text,
  link,
  mainPrize,
  winningPlaces,
  period,
  end,
}) => {
  const t = useTranslations("Contests");
  return (
    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        className="text-default"
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img src={img} alt="img" />
          <div className="p-5">
            <Typography variant="h5">{name}</Typography>
            <br />
            <div className="border-2 border-[#ccc] text-default font-bold">
              <div className="flex">
                <div className="p-2">
                  <p>{t("mainPrize")}</p>
                  <p>{mainPrize}</p>
                </div>
                <div className="p-2 flex-1 border-l-2 border-[#ccc]">
                  <p>{t("winningPlaces")}</p>
                  <p>{winningPlaces}</p>
                </div>
              </div>
              <div className="p-2 border-y-2 border-[#ccc]">
                <p>{t("periodOfContestRound")}</p>
                <p>{period}</p>
              </div>
              <div className="p-2">
                <p>{t("thisRoundWillFinish")}</p>
                <p>{end}</p>
              </div>
            </div>
            <br />
            <Typography>{text}</Typography>
          </div>
        </div>
        <br />
        <div className="flex gap-5 p-5">
          <Link
            href={"https://my.superforexs.com/auth/jwt/sign-in/"}
            target="_blank"
          >
            <Button name={t("takePart")} background />
          </Link>

          <Link href={link} target="_blank">
            <Button name={t("learnMore")} background />
          </Link>
        </div>
      </Card>
    </Grid>
  );
};

const StyledGrid4 = ({ img, name, text }) => {
  const t = useTranslations("Contests");
  return (
    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        className="text-default"
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <img src={img} alt="img" />
        <div className="flex justify-between items-center m-5">
          <Typography variant="h5">{name}</Typography>
          <Chip
            label={t("ended")}
            size="small"
            style={{ backgroundColor: "#aff3c7", fontWeight: 600 }}
          />
        </div>
        <Typography className="m-5">{text}</Typography>
      </Card>
    </Grid>
  );
};

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

export default function Contests() {
  const t = useTranslations("Contests");
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
            {t("superForexContests")}
          </Typography>
          <br />
          <Typography variant="h5" color="#ffffffb3" className="px-2">
            {t("tradeFunGetPrizes")}
          </Typography>
        </Container>
      </Stack>

      <Container
        maxWidth="lg"
        className="py-10 relative text-default"
        style={{ zIndex: 2 }}
      >
        <p className="text-4xl font-semi-bold">{t("aboutOurContests")}</p>
        <br />
        <p>
          {t("aboutContestsDescription1")}
        </p>
        <br />
        <p>
          {t("aboutContestsDescription2")}
        </p>
        <br />
        <p>
          {t("aboutContestsDescription3")}
        </p>
        <br />
        <Grid
          container
          spacing={2}
          className="py-10"
          style={{ display: "flex" }}
        >
          <ContestsGrid4
            name={"CryptoMania"}
            img={"https://superforex.com/img/contests/cryptomania.jpg"}
            mainPrize={"$1000"}
            winningPlaces={"12+1"}
            period={t("period1")}
            end={t("end1")}
            text={t("cryptoManiaDescription")}
            link={"/cryptomania"}
          />
          <ContestsGrid4
            name={"Gold Rush"}
            img={"https://superforex.com/img/contests/gold-rush.jpg"}
            mainPrize={"$100"}
            winningPlaces={"3"}
            period={t("period2")}
            end={t("end2")}
            text={t("goldRushDescription")}
            link={"/gold-rush"}
          />
        </Grid>
      </Container>

      <StyledStack>
        <Container
          maxWidth="lg"
          className="py-10 relative"
          style={{ zIndex: 2 }}
        >
          <p className="text-4xl font-semi-bold text-default">Ended Contests</p>
          <br />
          <Grid
            container
            spacing={2}
            className="py-10"
            justifyContent="center"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <StyledGrid4
              img={"https://superforex.com/img/contests/holy-apples-2023.jpg"}
              name={"Holy Apples"}
              text={t("holyApplesDescription")}
            />
            <StyledGrid4
              img={"https://superforex.com/img/contests/ib-challenge.jpg"}
              name={"Super IB Challenge"}
              text={t("superIbChallengeDescription")}
            />
            <StyledGrid4
              img={"https://superforex.com/img/contests/forex-gp.jpg"}
              name={"ForexGP"}
              text={t("forexGpDescription")}
            />
            <StyledGrid4
              img={"https://superforex.com/img/contests/holy-apples.jpg"}
              name={"Holy Apples"}
              text={t("holyApplesOldDescription")}
            />
            <StyledGrid4
              img={"https://superforex.com/img/contests/superforex-league.jpg"}
              name={"SuperForex League"}
              text={t("superForexLeagueDescription")}
            />
            <StyledGrid4
              img={"https://superforex.com/img/contests/lucky-draw.jpg"}
              name={"Lucky Draw"}
              text={t("luckyDrawDescription")}
            />
          </Grid>
        </Container>
      </StyledStack>
    </>
  );
}
