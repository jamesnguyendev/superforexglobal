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
              link={"https://my.superforexs.com/auth/jwt/sign-up/"}
            />
            <TypographyLink
              name={t("clientcabinet")}
              link={"https://my.superforexs.com/auth/jwt/sign-in/"}
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
            <TypographyLink
              name={t("easydepositbonus")}
              link={"/easy-deposit-bonus"}
            />
          </Grid>

          <Grid xs={4} className="p-3  lg:block hidden">
            <TypographyTitle name={t("tas")} />
            <Typography className="text-grey">{t("risknotice")}</Typography>
            <StyleStack
              name={t("termofuse")}
              link="/terms-and-conditions/terms-of-use"
            />
            <StyleStack
              name={t("privacypolicy")}
              link="/terms-and-conditions/privacy-policy"
            />
            <StyleStack
              name={t("order")}
              link="/terms-and-conditions/order-execution-policy"
            />
            <StyleStack
              name={t("riskdisclosure")}
              link="/terms-and-conditions/risk-disclosure"
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
        <div className="text-grey text-justify py-7">
          Trading Leveraged Products such as Forex and Derivatives may not be
          suitable for all investors as they carry a high degree of risk to your
          capital. Please ensure that you fully understand the risks involved,
          taking into account your investments and level of experience, before
          trading, and if necessary, seek independent advice. Trading Forex,
          CFDs, and any financial derivative instruments on margin carries a
          high level of risk and may not be suitable for all investors, as you
          could sustain losses. The Company under no circumstances shall be
          liable to any persons or entity for any loss or damage in the whole or
          part caused by, resulting from, or relating to any transactions
          related to CFDs. Botanica Glow (Pty) Ltd. assumes no liability for
          errors, inaccuracies, or omissions, does not warrant the accuracy,
          completeness of information, text, graphics, links, or other items
          within these materials. Botanica Glow (Pty) Ltd. does not offer and
          does not provide services to residents and citizens of certain
          jurisdictions, including Australia, Canada, Japan, Thailand, the
          United States of America and countries sanctioned by the EU.
        </div>
        <div className="text-grey text-justify pb-7">
          Superforexglobal.com is owned and operated by Superfin Corp. a company
          with registration number 1671 CTD 2024, with registered address at
          P.O. Box 1510, Beachmont Kingstown, St. Vincent and the Grenadines,
          and operation address at Landmark Park 7 Tower, P7-37-09 , 208 Nguyen
          Huu Canh Street, Binh Thanh City, Ho Chi Minh City, Vietnam.
        </div>
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
