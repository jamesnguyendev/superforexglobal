"use client";

import React, { useState } from "react";
import { Container, Stack, Typography, Grid, Divider } from "@mui/material";
import Image from "next/image";

import Link from "next/link";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SkypeIcon from "../../public/skype.svg";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import { useTranslations } from "next-intl";

export function TypographyLink({ name, link = "" }) {
  return (
    <Link href={link}>
      <p className="text-grey hover:opacity-[.6] hover:text-default my-1 cursor-pointer">
        {name}
      </p>
    </Link>
  );
}

export function TypographyTitle({ name }) {
  return <p className="font-semibold text-default my-3 text-lg">{name}</p>;
}

export function StyleStack({ name, link = "" }) {
  const [hover, setHover] = useState();

  return (
    <Link href={link}>
      <Stack
        direction="row"
        alignItems="center"
        className={`py-3 text-grey ${hover ? "opacity-[.6]" : "opacity-100"}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <TextSnippetIcon />

        <p className="text-grey ml-3 cursor-pointer">{name}</p>
      </Stack>
    </Link>
  );
}

export function StyleStackDownload({ name, link = "" }) {
  const [hover, setHover] = useState();

  return (
    <Link href={link} target="_blank">
      <Stack
        direction="row"
        alignItems="center"
        className={`py-3 text-grey ${hover ? "opacity-[.6]" : "opacity-100"}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <TextSnippetIcon />

        <p className="text-grey ml-3 cursor-pointer">{name}</p>
      </Stack>
    </Link>
  );
}

export function ImgStack({ name, img }) {
  return (
    <Stack direction="row" alignItems="center" className="py-3 text-grey">
      <img src={img} width={80} height={80} alt={"img"} />
      <p className="text-grey ml-3">{name}</p>
    </Stack>
  );
}

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <>
      <Divider />

      <Container className="py-3">
        <Grid container className="justify-between max-sm:justify-center">
          <Stack direction="row">
            <PhoneIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <EmailIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <WhatsAppIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <TelegramIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <Image
              src={SkypeIcon}
              className="text-default hover:opacity-[.6] m-2"
              width={20}
              height={20}
              alt={"SkypeIcon"}
            />
          </Stack>
          <Stack direction="row">
            <InstagramIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <FacebookIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <YouTubeIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <TwitterIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <LinkedInIcon className="text-light_grey hover:opacity-[.6] m-2" />
            <PinterestIcon className="text-light_grey hover:opacity-[.6] m-2" />
          </Stack>
        </Grid>
      </Container>

      <Divider />

      <Container className="relative">
        <Grid container paddingY={1} className={""}>
          <Grid xs={12} md={4} className="p-3">
            <TypographyTitle name={t("about")} />
            <TypographyLink name={t("aboutcompany")} link={"/about-company"} />
            <TypographyLink name={t("tradingins")} />
            <TypographyLink name={t("forexanalytics")} />
          </Grid>

          <Grid xs={12} md={4} className="p-3">
            <TypographyTitle name={t("accountmanage")} />
            <TypographyLink
              name={t("openaccount")}
              link={"https://my.superforex.global/register"}
            />
            <TypographyLink
              name={t("clientcabinet")}
              link={"https://my.superforex.global/login"}
            />
            <TypographyLink
              name={t("depositwithdrawal")}
              link={"/deposit-and-withdrawal"}
            />
          </Grid>

          <Grid xs={4} className="p-3 lg:block hidden ">
            <TypographyTitle name={t("bonuses")} />
            <TypographyLink name={t("welcomeplus")} link={"/trade-and-earn"} />
            <TypographyLink name={t("75energy")} link={"/free-swap"} />
            <TypographyLink name={t("hotbonus")} link={"/hot-bonus"} />
          </Grid>

          <Grid xs={4} className="p-3  lg:block hidden">
            <TypographyTitle name={t("tas")} />
            <Typography className="text-grey">{t("risknotice")}</Typography>
            <StyleStack
              name={t("termofuse")}
              link="/terms-and-conditions/terms-of-use"
            />
            <StyleStackDownload
              name={t("clientagreement")}
              link="https://ik.imagekit.io/3idyffxxb/New%20Folder/Client%20Agreement.pdf?updatedAt=1741666728345"
            />
            <StyleStackDownload
              name={t("privacypolicy")}
              link="https://ik.imagekit.io/3idyffxxb/New%20Folder/Privacy%20Policy.pdf?updatedAt=1741666728546"
            />
            <StyleStack
              name={t("order")}
              link="/terms-and-conditions/order-execution-policy"
            />
            <StyleStackDownload
              name={t("riskdisclosure")}
              link="https://ik.imagekit.io/3idyffxxb/New%20Folder/Risk%20Disclosure%20Statement.pdf?updatedAt=1741666109424"
            />
            <StyleStack
              name={t("complaint")}
              link="/terms-and-conditions/complaint-handling-policy"
            />
            <StyleStack
              name={t("aml")}
              link="/terms-and-conditions/aml-policy"
            />
            <StyleStack
              name={t("kyc")}
              link="/terms-and-conditions/kyc-policy"
            />
            <StyleStack
              name={t("refurd")}
              link="/terms-and-conditions/refund-policy"
            />
          </Grid>

          <Grid xs={12} md={4} className="p-3">
            <TypographyTitle name={t("ouraward")} />
            <ImgStack
              img={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/ibm-2021.svg?updatedAt=1735633180379"
              }
              name={t("bestecnbroker")}
            />
            <ImgStack
              img={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/gbm-2020.svg?updatedAt=1735633180477"
              }
              name={t("bestnewecn")}
            />
            <ImgStack
              img={
                "https://ik.imagekit.io/3idyffxxb/New%20Folder/show-fx-2017.svg?updatedAt=1735633180286"
              }
              name={t("bestaffiliate")}
            />
            {/*</div>*/}
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container className="relative">
        <Typography className="text-grey text-center" paddingY={2}>
          {t("legal")}
        </Typography>
      </Container>
    </>
  );
}
