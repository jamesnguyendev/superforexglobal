"use client";

import React, { useEffect, useState, useTransition } from "react";

import {
  Container,
  Stack,
  Typography,
  Grid,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Link from "next/link";
import Image from "next/image";

import SuperForexLogo from "../../public/superforex.svg";
import LightPub from "../../public/lightpub.svg";
import Document from "../../public/document.svg";
import Phone from "../../public/phone.svg";
import STP from "../../public/stp.svg";
import ECN from "../../public/ecn.svg";
import DemoAccount from "../../public/demo.svg";
import Location from "../../public/location.svg";
import DepositAndWithdrawal from "../../public/depositAndWithdrawal.svg";
import MetaTrader4 from "../../public/metaTrader4.svg";
import Analytics from "../../public/analytics.svg";
import CryptoCurrencies from "../../public/cryptoCurrencies.svg";
import GoldTrading from "../../public/goldTrading.svg";
import MetalsTrading from "../../public/metalsTrading.svg";
import StockTrading from "../../public/stockTrading.svg";
import OilTrading from "../../public/oilTrading.svg";
import IndicesTrading from "../../public/indicesTrading.svg";
import MobileApp from "../../public/mobile.svg";
import GoldRush from "../../public/goldRush.svg";
import CryptoMania from "../../public/cryptoMania.svg";
import AutoResetBalance from "../../public/autoResetBalance.svg";
import NoFeesOnDeposit from "../../public/noFeesOnDeposit.svg";
import DepositProtection from "../../public/depositProtection.svg";
import InterestRateOnEquity from "../../public/interestRateOnEquity.svg";
import MembershipClub from "../../public/membershipClub.svg";
import AccountPackages from "../../public/accountPackages.svg";
import ForexCopy from "../../public/forexCopy.svg";
import PartnershipProgram from "../../public/partnershipProgram.svg";
import IbCertificates from "../../public/ibCertificates.svg";
import Links from "../../public/links.svg";
import Banners from "../../public/banners.svg";
import PartnerContest from "../../public/partnerContest.svg";
import Merchandise from "../../public/merchandise.svg";
import Presentations from "../../public/presentations.svg";
import ReadyWebsites from "../../public/readyWebsites.svg";
import SuperForexMoney from "../../public/superForexMoney.svg";
import SuperIbBonus from "../../public/superIbBonus.svg";
import RebateSystem from "../../public/rebateSystem.svg";
import WelcomeBonus from "../../public/welcomeBonus.svg";
import HotBonus from "../../public/hotBonus.svg";
import EasyDepositBonus from "../../public/easyDepositBonus.svg";
import EnergyBonus from "../../public/energyBonus.svg";
import ReferAFriend from "../../public/referAFriend.svg";
import Education from "../../public/education.svg";
import TrainingCentres from "../../public/trainingCentres.svg";
import Seminars from "../../public/seminars.svg";
import EducationVideos from "../../public/educationVideos.svg";
import PatternGraphix from "../../public/patternGraphix.svg";
import MenuMobile from "../components/MenuMobile";
import ButtonCustomize from "../components/buttonCustomize";
import english from "../../public/Image/flags/uk.webp";
import china from "../../public/Image/flags/china.webp";
import india from "../../public/Image/flags/india.webp";
import indonesia from "../../public/Image/flags/indonesia.webp";
import malaysia from "../../public/Image/flags/malaysia.webp";
import vietnam from "../../public/Image/flags/vietnam.webp";
import korea from "../../public/Image/flags/south-korea.webp";
import bangladesh from "../../public/Image/flags/bangladesh.png";
import brazil from "../../public/Image/flags/brazil.png";
import cs from "../../public/Image/flags/czech.png";
import it from "../../public/Image/flags/italy.png";
import es from "../../public/Image/flags/spain.png";
import fr from "../../public/Image/flags/france.png";
import de from "../../public/Image/flags/germany.png";
import ro from "../../public/Image/flags/romania.png";
import tr from "../../public/Image/flags/turkey.png";
import pl from "../../public/Image/flags/poland.png";
import ur from "../../public/Image/flags/pakistan.webp";
import uae from "../../public/Image/flags/uae.png";

import { setUserLocale } from "../../services/locale";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function StyleStack({
  img,
  name,
  secondName,
  tagColor,
  tagName,
  link = "",
}) {
  const [hover, setHover] = useState();

  return (
    <Link
      href={link}
      className="inline-flex flex-col w-auto my-2 active:border-primary active:rounded-md border-white border-2 "
    >
      <div
        className="inline-flex items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Image src={img} alt={img} width={20} height={20} className="" />
        <p className="text-default ml-3 font-medium cursor-pointer">{name}</p>
        {tagColor && tagName && (
          <TypographyTag name={tagName} color={tagColor} />
        )}
        <ArrowForwardIcon
          sx={{ fontSize: 15, color: hover ? "" : "white" }}
          className="ml-1"
        />
      </div>
      {secondName && (
        <p className="text-grey opacity-[.6] cursor-pointer">{secondName}</p>
      )}
    </Link>
  );
}

export function TypographyLink({ name, link = "" }) {
  return (
    <Link href={link}>
      <p className="inline-flex my-1 text-grey opacity-[.6] hover:opacity-100 hover:text-default cursor-pointer active:border-primary active:rounded-md border-white border-2">
        {name}
      </p>
    </Link>
  );
}

export function TypographyTag({ name, color }) {
  return (
    <Typography
      className="rounded-full text-white p-1 px-2 font-semibold"
      marginLeft={1}
      style={{
        backgroundColor: color,
        fontSize: 10,
        height: "80%",
        alignItems: "center",
      }}
    >
      {name}
    </Typography>
  );
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

export default function Header() {
  const [isPending, startTransition] = useTransition();
  const [flag, setFlag] = useState(english);
  const t = useTranslations("Header");
  const [localeCookie, setLocaleCookie] = useState(null);

  useEffect(() => {
    const localeCookies = getCookie("NEXT_LOCALE_SUPERFOREX");
    setLocaleCookie(localeCookies);
  }, []);

  useEffect(() => {
    switch (localeCookie) {
      case "en":
        setFlag(english);
        break;
      case "hans":
        setFlag(china);
        break;
      case "hant":
        setFlag(china);
        break;
      case "hi":
        setFlag(india);
        break;
      case "id":
        setFlag(indonesia);
        break;
      case "ms":
        setFlag(malaysia);
        break;
      case "vi":
        setFlag(vietnam);
        break;
      case "ko":
        setFlag(korea);
        break;
      case "bn":
        setFlag(bangladesh);
        break;
      case "pt-BR":
        setFlag(brazil);
        break;
      case "cs":
        setFlag(cs);
        break;
      case "it":
        setFlag(it);
        break;
      case "es":
        setFlag(es);
        break;
      case "fr":
        setFlag(fr);
        break;
      case "de":
        setFlag(de);
        break;
      case "ro":
        setFlag(ro);
        break;
      case "tr":
        setFlag(tr);
        break;
      case "pl":
        setFlag(pl);
        break;
      case "ur":
        setFlag(ur);
        break;
      case "uae":
        setFlag(uae);
        break;
      default:
    }
  }, [localeCookie]);

  const handlerLang = (value) => {
    const locate = value;
    startTransition(() => {
      setUserLocale(locate);
    });
    switch (locate) {
      case "en":
        setFlag(english);
        break;
      case "hans":
        setFlag(china);
        break;
      case "hant":
        setFlag(china);
        break;
      case "hi":
        setFlag(india);
        break;
      case "id":
        setFlag(indonesia);
        break;
      case "ms":
        setFlag(malaysia);
        break;
      case "vi":
        setFlag(vietnam);
        break;
      case "ko":
        setFlag(korea);
        break;
      case "bn":
        setFlag(bangladesh);
        break;
      case "pt-BR":
        setFlag(brazil);
        break;
      case "cs":
        setFlag(cs);
        break;
      case "it":
        setFlag(it);
        break;
      case "es":
        setFlag(es);
        break;
      case "fr":
        setFlag(fr);
        break;
      case "de":
        setFlag(de);
        break;
      case "ro":
        setFlag(ro);
        break;
      case "tr":
        setFlag(tr);
        break;
      case "pl":
        setFlag(pl);
        break;
      case "ur":
        setFlag(ur);
        break;
      case "uae":
        setFlag(uae);
        break;
      default:
    }
  };

  return (
    <Container maxWidth="lg" className="relative z-50">
      <Stack direction="row" justifyContent="space-between" paddingY={1}>
        <Link href={"/"}>
          <Image
            src={SuperForexLogo}
            alt={"SuperForexLogo"}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden md:flex gap-3 justify-center items-center">
          <Link href={"https://my.superforex.global"} target="_blank">
            <ButtonCustomize name={t("signin")} />
          </Link>
          <Link href={"https://my.superforex.global/register"} target="_blank">
            <ButtonCustomize name={t("openaccount")} background={true} />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Image src={flag} alt="" className="rounded-lg" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="grid grid-cols-2 capitalize">
              <DropdownMenuItem
                onClick={() => handlerLang("en")}
                className="text-default font-normal text-lg "
              >
                <Image src={english} alt="" />
                <h3>English</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("hans")}
                className="text-default font-normal text-lg "
              >
                <Image src={china} alt="" />
                <h3>简体中文</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("hant")}
                className="text-default font-normal text-lg "
              >
                <Image src={china} alt="" />
                <h3>繁体中文</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("hi")}
                className="text-default font-normal text-lg "
              >
                <Image src={india} alt="" />
                <h3>हिंदी</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("ms")}
                className="text-default font-normal text-lg "
              >
                <Image src={malaysia} alt="" />
                <h3>Bahasa Melayu</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("ko")}
                className="text-default font-normal text-lg "
              >
                <Image src={korea} alt="" />
                <h3>한국어</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("id")}
                className="text-default font-normal text-lg "
              >
                <Image src={indonesia} alt="" />
                <h3>Bahasa Indonesia</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("vi")}
                className="text-default font-normal text-lg "
              >
                <Image src={vietnam} alt="" />
                <h3>tiếng việt</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("bn")}
                className="text-default font-normal text-lg "
              >
                <Image src={bangladesh} alt="" />
                <h3>বাংলা</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("pt-BR")}
                className="text-default font-normal text-lg "
              >
                <Image src={brazil} alt="" />
                <h3>português</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("cs")}
                className="text-default font-normal text-lg "
              >
                <Image src={cs} alt="" />
                <h3>Česky</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("it")}
                className="text-default font-normal text-lg "
              >
                <Image src={it} alt="" />
                <h3>Italiano</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("es")}
                className="text-default font-normal text-lg "
              >
                <Image src={es} alt="" />
                <h3>Español</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("fr")}
                className="text-default font-normal text-lg "
              >
                <Image src={fr} alt="" />
                <h3>Français</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("de")}
                className="text-default font-normal text-lg "
              >
                <Image src={de} alt="" />
                <h3>Deutsch</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("ro")}
                className="text-default font-normal text-lg "
              >
                <Image src={ro} alt="" />
                <h3>Română</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("tr")}
                className="text-default font-normal text-lg "
              >
                <Image src={tr} alt="" />
                <h3>Türkçe</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("pl")}
                className="text-default font-normal text-lg "
              >
                <Image src={pl} alt="" />
                <h3>Polski</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("ur")}
                className="text-default font-normal text-lg "
              >
                <Image src={ur} alt="" />
                <h3 className="lowercase">اردو</h3>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handlerLang("uae")}
                className="text-default font-normal text-lg "
              >
                <Image src={uae} alt="" />
                <h3 className="lowercase">رَبِيَّة</h3>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <MenuMobile />
      </Stack>

      <div className="">
        <NavigationMenu className="hidden md:flex text-default">
          <NavigationMenuList className="relative">
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="text-md">
                {t("about")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="md:min-w-[350px] lg:min-w-[550px] rounded-xl bg-white">
                <Grid container className="rounded-xl bg-white">
                  <Grid xs={6} className="p-5">
                    <p className="text-grey opacity-[.6] font-semibold text-sm">
                      {t("information")}
                    </p>
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/info%20(1).png?updatedAt=1738911236098"
                      }
                      name={t("aboutcompany")}
                      link={"/about-company"}
                    />
                    <br />
                    <TypographyLink
                      name={t("whychooseus")}
                      link={"/why-choose-us"}
                    />
                    <br />
                    <TypographyLink
                      name={t("regulation")}
                      link={"/regulation"}
                    />
                    <br />
                    <TypographyLink
                      name={t("fundssecurity")}
                      link={"/funds-security"}
                    />
                  </Grid>
                  <Grid xs={6} className="p-5">
                    <p className="text-grey opacity-[.6] font-semibold text-sm">
                      {t("contact")}
                    </p>
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/phone-call%20(1).png?updatedAt=1738911455805"
                      }
                      name={t("contacts")}
                      link={"/contacts"}
                    />
                    <br />
                  </Grid>
                </Grid>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md">
                {t("traders")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="md:min-w-[750px] lg:min-w-[1150px] rounded-xl bg-white">
                <Grid container className="rounded-xl bg-white">
                  <Grid xs={4} className="p-5">
                    <p className="text-grey opacity-[.6] font-semibold text-sm">
                      {t("account")}
                    </p>
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card%20(1).png?updatedAt=1738911658825"
                      }
                      name={t("stpaccount")}
                      link={"/stp-accounts"}
                    />
                    <br />
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/membership-vip.png?updatedAt=1738911809927"
                      }
                      name={t("ecnaccount")}
                      link={"/ecn-accounts"}
                    />
                    <br />
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card-buyer.png?updatedAt=1738912254026"
                      }
                      name={t("centaccount")}
                      link={"/cent-accounts"}
                    />
                    <br />
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/membership-vip%20(2).png?updatedAt=1738912410051"
                      }
                      name={t("accountprime")}
                      link={"/"}
                    />
                    <br />
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card%20(3).png?updatedAt=1738912647339"
                      }
                      name={"Pro Account"}
                      link={"/"}
                    />
                    <br />
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card-buyer%20(1).png?updatedAt=1738912736354"
                      }
                      name={t("demoaccount")}
                      link={"/demo-account"}
                    />
                  </Grid>
                  <Grid
                    xs={4}
                    className="p-5"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <p className="text-grey opacity-[.6] font-semibold text-sm">
                      {t("tradinginstruments")}
                    </p>
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/coins-crypto.png?updatedAt=1738912884988"
                      }
                      name={t("cryptocurrencies")}
                      link={"/cryptocurrencies"}
                    />
                    {/* <br /> */}
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/boxes.png?updatedAt=1738913722516"
                      }
                      name={t("goldtrading")}
                      link={"/gold-trading"}
                    />
                    {/* <br /> */}
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/layers.png?updatedAt=1738913478264"
                      }
                      name={t("mestalstrading")}
                      link={"/metals-trading"}
                    />
                    {/* <br /> */}
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/growth-chart-invest.png?updatedAt=1738913791550"
                      }
                      name={t("stocktrading")}
                      link={"/stock-trading"}
                    />
                    {/* <br /> */}
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/car-oil.png?updatedAt=1738913881286"
                      }
                      name={t("oiltrading")}
                      link="/oil-trading"
                    />
                    {/* <br /> */}
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/meter-bolt.png?updatedAt=1738914068135"
                      }
                      name={t("indicestrading")}
                      link={"/indices-trading"}
                    />
                    {/* <TypographyLink name={t("allins")} /> */}
                  </Grid>
                  <Grid xs={4} className="p-5">
                    <p className="text-grey opacity-[.6] font-semibold text-sm">
                      {t("financials")}
                    </p>
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/deposit.png?updatedAt=1738914177710"
                      }
                      name={t("depositwithdrawal")}
                      link={"/deposit-and-withdrawal"}
                    />
                    <br />
                    <TypographyLink
                      name={"Economic Calendar"}
                      link={"/economic-calendar"}
                    />
                  </Grid>
                </Grid>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md">
                {t("services")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="md:min-w-[450px] lg:min-w-[650px] rounded-xl">
                <Grid className="rounded-xl" container>
                  <Grid xs={6} className="p-5">
                    <p className="text-grey opacity-[.6] font-semibold text-sm">
                      {t("tradingsoftware")}
                    </p>
                    <Stack direction={"row"} alignItems={"center"}>
                      <StyleStack
                        img={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/mobile-notch.png?updatedAt=1738914394421"
                        }
                        name={t("mobileapp")}
                        link={"/mobile-app"}
                        tagName={"TOP"}
                        tagColor={"#6485f9"}
                      />
                    </Stack>
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/square-4.png?updatedAt=1738914536409"
                      }
                      name={"Meta Trader 4"}
                      link="mt-4"
                    />
                    <br />
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/square-5.png?updatedAt=1738914606656"
                      }
                      name={"Meta Trader 5"}
                    />
                    <br />
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/transaction-euro.png?updatedAt=1738914691398"
                      }
                      name={"Web Trade"}
                      link="mt-4"
                    />
                  </Grid>
                  <Grid
                    xs={6}
                    className="p-5"
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <p className="text-grey opacity-[.6] font-semibold text-sm">
                      {t("forexcopysys")}
                    </p>
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/clone.png?updatedAt=1738914841762"
                      }
                      name={t("forexcopy")}
                      link={"/forex-copy-system"}
                    />
                    {/* <br /> */}
                    <TypographyLink
                      name={t("becomeafollower")}
                      link={"/forex-copy-follower-conditions"}
                    />
                    <TypographyLink
                      name={t("becomeamaster")}
                      link={"/forex-copy-master-conditions"}
                    />
                  </Grid>
                </Grid>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md">
                {t("bonuses")}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="md:min-w-[750px] lg:min-w-[1150px] rounded-xl bg-white">
                <Grid container className="rounded-xl bg-white">
                  <Grid xs={4} className="p-5">
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/gift-box-benefits.png?updatedAt=1738915591118"
                      }
                      link={"/trade-and-earn"}
                      name={t("welcomebonus")}
                      // name={t("trande and earn")}
                      secondName={t("increase")}
                    />
                  </Grid>
                  <Grid xs={4} className="p-5">
                    <StyleStack
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/usd-circle.png?updatedAt=1738915853443"
                      }
                      name={t("30ex")}
                      secondName={t("thehottest")}
                      // secondName={t("thehottest")} con 10 percent
                      link="/hot-bonus"
                    />
                  </Grid>
                  <Grid xs={4} className="p-5">
                    <StyleStack
                      link="/free-swap"
                      img={
                        "https://ik.imagekit.io/kn40ppx9b/Superforex/thunderstorm.png?updatedAt=1738915294213"
                      }
                      name={t("energybonus")}
                      // name={t("energybonus")} doi thanh free swap
                      secondName={t("getanadd")}
                    />
                  </Grid>
                </Grid>
              </NavigationMenuContent>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-md">
                <Link href={"/partnership-program"}> {t("partners")}</Link>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </Container>
  );
}
