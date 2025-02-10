"use client";

import React, { useEffect, useState, useTransition } from "react";

import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import LayersIcon from "@mui/icons-material/Layers";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import AddCardRoundedIcon from "@mui/icons-material/AddCardRounded";

import Link from "next/link";
import Image from "next/image";

import OilTrading from "../../public/oilTrading.svg";
import MetaTrader4 from "../../public/metaTrader4.svg";
import GoldRush from "../../public/goldRush.svg";
import PartnerContest from "../../public/partnerContest.svg";
import ReferAFriend from "../../public/referAFriend.svg";
import SuperForexMoney from "../../public/superForexMoney.svg";
import IbCertificates from "../../public/ibCertificates.svg";
import PartnershipProgram from "../../public/partnershipProgram.svg";
import WelcomeBonus from "../../public/welcomeBonus.svg";
import MobileApp from "../../public/mobile.svg";
import ForexCopy from "../../public/forexCopy.svg";
import Education from "../../public/education.svg";
import IndicesTrading from "../../public/indicesTrading.svg";
import DemoAccount from "../../public/demo.svg";
import Merchandise from "../../public/merchandise.svg";
import DepositAndWithdrawal from "../../public/depositAndWithdrawal.svg";
import Location from "../../public/location.svg";
import EasyDepositBonus from "../../public/easyDepositBonus.svg";
import HotBonus from "../../public/hotBonus.svg";
import CryptoCurrencies from "../../public/cryptoCurrencies.svg";
import SuperIbBonus from "../../public/superIbBonus.svg";
import EnergyBonus from "../../public/energyBonus.svg";
import DepositProtection from "../../public/depositProtection.svg";
import ReadyWebsites from "../../public/readyWebsites.svg";
import StockTrading from "../../public/stockTrading.svg";
import MetalsTrading from "../../public/metalsTrading.svg";
import Presentations from "../../public/presentations.svg";
import GoldTrading from "../../public/goldTrading.svg";
import Document from "../../public/document.svg";
import MembershipClub from "../../public/membershipClub.svg";
import AutoResetBalance from "../../public/autoResetBalance.svg";
import NoFeesOnDeposit from "../../public/noFeesOnDeposit.svg";
import InterestRateOnEquity from "../../public/interestRateOnEquity.svg";
import AccountPackages from "../../public/accountPackages.svg";
import Phone from "../../public/phone.svg";
import Seminars from "../../public/seminars.svg";
import TrainingCentres from "../../public/trainingCentres.svg";
import PatternGraphix from "../../public/patternGraphix.svg";
import Analytics from "../../public/analytics.svg";
import EducationVideos from "../../public/educationVideos.svg";
import LinksAffilate from "../../public/links.svg";
import CryptoMania from "../../public/cryptoMania.svg";
import RebateSystem from "../../public/rebateSystem.svg";
import Banners from "../../public/banners.svg";
import english from "../../public/Image/flags/uk.webp";
import thailand from "../../public/Image/flags/thailand.webp";
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

import ButtonCustomize from "../components/buttonCustomize";
import { useTranslations } from "next-intl";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { setUserLocale } from "@/services/locale";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const MenuMobile = () => {
  const [state, setState] = useState(false);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Header");

  const handlerLang = (value) => {
    startTransition(() => {
      setUserLocale(value);
    });
    setState(false);
  };

  return (
    <div className="md:hidden flex gap-3 items-center">
      <div
        className="flex flex-col bg-default cursor-pointer gap-[4.5px] py-2 px-3 rounded-2xl"
        onClick={() => setState((prev) => !prev)}
      >
        <div className="w-4 h-[2px] bg-white rounded-sm" />
        <div className="w-4 h-[2px] bg-white rounded-sm" />
        <div className="w-4 h-[2px] bg-white rounded-sm" />
      </div>

      {state ? (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 w-full -translate-y-5 min-w-lg z-50 overflow-hidden">
          <div className="top-[390px] bg-white text-default rounded-md shadow-2xl md:hidden  font-normal overflow-hidden">
            <div className="flex items-center justify-end px-6 text-xl py-3 cursor-pointer ">
              <span onClick={() => setState(false)}>X</span>
            </div>

            <div className="group relative ">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b border-b-slate-300 border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <Image
                    alt=""
                    src={
                      "https://ik.imagekit.io/kn40ppx9b/Superforex/info%20(1).png?updatedAt=1738911236098"
                    }
                    width={22}
                    height={22}
                  />
                </div>
                <div className="flex items-center flex-1 font-bold capitalize">
                  {t("about")}
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </div>
              <div
                className="fixed top-14 z-50 w-full  overflow-hidden bg-white opacity-0 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto translate-x-24 group-focus-within:translate-x-0 duration-300 transition- "
                tabIndex={0}
              >
                <div className="px-4 flex flex-col gap-2 pt-4">
                  <Link
                    href={"about-company"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary capitalize"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/info%20(1).png?updatedAt=1738911236098"
                        }
                        width={22}
                        height={22}
                      />
                      {t("aboutthecompany")}
                    </h1>
                  </Link>
                  <div className="flex flex-col ">
                    <Link
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 capitalize active:ring-primary rounded py-1"
                      href={"why-choose-us"}
                      onClick={() => setState(false)}
                    >
                      {t("whychooseus")}
                    </Link>
                    <Link
                      href={"regulation"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("regulation")}
                    </Link>
                    <Link
                      href={"awards"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("awards")}
                    </Link>
                    <Link
                      href={"funds-security"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("fundssecurity")}
                    </Link>
                  </div>
                </div>
                <div className="px-4 flex flex-col pb-32">
                  <Link
                    href={"/contacts"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center capitalize">
                      <Image src={Phone} alt="" className="me-2" />
                      {t("contacts")}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative ">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b   border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <Image
                    alt=""
                    src={
                      "https://ik.imagekit.io/kn40ppx9b/Superforex/swing-trading.png?updatedAt=1739155068046"
                    }
                    width={22}
                    height={22}
                  />
                </div>
                <div className="flex items-center flex-1 font-bold capitalize">
                  {t("traders")}
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </div>
              <div
                className="fixed top-14 z-50 w-full  overflow-hidden bg-white opacity-0 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto translate-x-24 group-focus-within:translate-x-0 duration-300 transition- "
                tabIndex={0}
              >
                <div className="px-4 flex flex-col gap-2 pt-4">
                  <Link
                    href={"stp-accounts"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card%20(1).png?updatedAt=1738911658825"
                        }
                        width={22}
                        height={22}
                      />
                      {t("stpaccount")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"ecn-accounts"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3 ">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/membership-vip.png?updatedAt=1738911809927"
                        }
                        width={22}
                        height={22}
                      />
                      {t("ecnaccount")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"cent-accounts"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card-buyer.png?updatedAt=1738912254026"
                        }
                        width={22}
                        height={22}
                      />
                      {t("centaccount")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"/"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/membership-vip%20(2).png?updatedAt=1738912410051"
                        }
                        width={22}
                        height={22}
                      />
                      {t("accountprime")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"/"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card%20(3).png?updatedAt=1738912647339"
                        }
                        width={22}
                        height={22}
                      />
                      {t("accountvip")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 gap-2 flex flex-col  pb-44">
                  <Link
                    href={"/demo-account"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3 ">
                      <Image
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/credit-card-buyer%20(1).png?updatedAt=1738912736354"
                        }
                        alt=""
                        width={22}
                        height={22}
                      />
                      {t("demoaccount")}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b border-b-slate-300 border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <Image
                    src={
                      "https://ik.imagekit.io/kn40ppx9b/Superforex/increase.png?updatedAt=1739161195406"
                    }
                    width={22}
                    height={22}
                    alt=""
                  />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("tradinginstrument")}
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </div>
              <div
                className="fixed top-14 z-50 w-full  overflow-hidden bg-white opacity-0 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto translate-x-24 group-focus-within:translate-x-0 duration-300 transition- "
                tabIndex={0}
              >
                <div className="px-4 flex flex-col">
                  <Link
                    href={"/cryptocurrencies"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/coins-crypto.png?updatedAt=1738912884988"
                        }
                        width={22}
                        height={22}
                      />
                      {t("cryptocurrencies")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"/gold-trading"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/boxes.png?updatedAt=1738913722516"
                        }
                        width={22}
                        height={22}
                      />
                      {t("goldtrading")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col">
                  <Link
                    href={"/metals-trading"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/layers.png?updatedAt=1738913478264"
                        }
                        width={22}
                        height={22}
                      />
                      {t("mestalstrading")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"/stock-trading"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/growth-chart-invest.png?updatedAt=1738913791550"
                        }
                        width={22}
                        height={22}
                      />
                      {t("stocktrading")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col">
                  <Link
                    href={"/oil-trading"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/car-oil.png?updatedAt=1738913881286"
                        }
                        width={22}
                        height={22}
                      />
                      {t("oiltrading")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"/indices-trading"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/meter-bolt.png?updatedAt=1738914068135"
                        }
                        width={22}
                        height={22}
                      />
                      {t("indicestrading")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2 mt-2 border-t border-dashed">
                  <Link
                    href={"/deposit-and-withdrawal"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <Image
                        alt=""
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/deposit.png?updatedAt=1738914177710"
                        }
                        width={22}
                        height={22}
                      />
                      {t("depositwithdrawal")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col gap-2 pb-32 ">
                  <Link
                    href={"/economic-calendar"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      {t("economic")}
                    </h1>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b border-b-slate-300 border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <Image
                    src={
                      "https://ik.imagekit.io/kn40ppx9b/Superforex/settings.png?updatedAt=1739163294342"
                    }
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("services")}
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </div>
              <div
                className="fixed top-14 z-50 w-full  overflow-hidden bg-white opacity-0 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto translate-x-24 group-focus-within:translate-x-0 duration-300 transition- "
                tabIndex={0}
              >
                <div className="px-4 flex flex-col gap-2 pt-4">
                  <div className="flex flex-col font-bold opacity-80 gap-2">
                    <Link
                      className="flex items-center gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1"
                      href={"forex-copy-system"}
                      onClick={() => setState(false)}
                    >
                      <Image
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/clone.png?updatedAt=1738914841762"
                        }
                        alt=""
                        width={22}
                        height={22}
                      />
                      <div className="">{t("forexcopy")}</div>
                    </Link>
                    <Link
                      href={"mobile-app"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1  "
                      onClick={() => setState(false)}
                    >
                      <Image
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/mobile-notch.png?updatedAt=1738914394421"
                        }
                        alt=""
                        height={22}
                        width={22}
                      />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {t("mobileapp")}
                          <span className="text-xs bg-sky-600 text-white px-1 rounded-full">
                            TOP
                          </span>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"/"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1  "
                      onClick={() => setState(false)}
                    >
                      <Image
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/square-4.png?updatedAt=1738914536409"
                        }
                        alt=""
                        height={22}
                        width={22}
                      />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {"Meta Trader 4"}
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"/"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1  "
                      onClick={() => setState(false)}
                    >
                      <Image
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/square-5.png?updatedAt=1738914606656"
                        }
                        alt=""
                        height={22}
                        width={22}
                      />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {"Meta Trader 5"}
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"/"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1  "
                      onClick={() => setState(false)}
                    >
                      <Image
                        src={
                          "https://ik.imagekit.io/kn40ppx9b/Superforex/transaction-euro.png?updatedAt=1738914691398"
                        }
                        alt=""
                        height={22}
                        width={22}
                      />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {t("webtrade")}
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"/forex-copy-follower-conditions"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1  "
                      onClick={() => setState(false)}
                    >
                      <div className="">
                        <div className="flex items-center gap-2 font-normal">
                          {t("becomeafollower")}
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"/forex-copy-master-conditions"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1  mb-36"
                      onClick={() => setState(false)}
                    >
                      <div className="">
                        <div className="flex items-center gap-2 font-normal">
                          {t("becomeamaster")}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b border-b-slate-300 border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <Image
                    src={
                      "https://ik.imagekit.io/kn40ppx9b/Superforex/gift-box-benefits.png?updatedAt=1738915591118"
                    }
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("bonuses")}
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </div>
              <div
                className="fixed top-14 z-50 w-full  overflow-hidden bg-white opacity-0 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto translate-x-24 group-focus-within:translate-x-0 duration-300 transition- "
                tabIndex={0}
              >
                <div className="px-4 flex flex-col gap-2 pt-4">
                  <div className="flex flex-col font-bold opacity-80 gap-2">
                    <Link
                      className="flex gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1"
                      href={"/trade-and-earn"}
                      onClick={() => setState(false)}
                    >
                      <div className="">
                        <Image
                          src={
                            "https://ik.imagekit.io/kn40ppx9b/Superforex/gift-box-benefits.png?updatedAt=1738915591118"
                          }
                          width={22}
                          height={10}
                          alt=""
                          className="w-5"
                        />
                      </div>
                      <div className="">
                        <div className="">{t("welcomebonus")}</div>
                        {/* <div className="font-normal">{t("increase100%")}</div> */}
                      </div>
                    </Link>
                    <Link
                      href={"hot-bonus"}
                      className="flex gap-2 cursor-pointer   active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <div className="">
                        <Image
                          src={
                            "https://ik.imagekit.io/kn40ppx9b/Superforex/usd-circle.png?updatedAt=1738915853443"
                          }
                          alt=""
                          width={22}
                          height={10}
                          className="w-5"
                        />
                      </div>
                      <div className="">
                        <div className="ms-1">{t("750ex")}</div>
                        {/* <div className="font-normal">{t("thehottest")}</div> */}
                      </div>
                    </Link>
                    <Link
                      href={"free-swap"}
                      className="flex gap-2 cursor-pointer  active:ring-2 active:ring-primary rounded py-1 pb-64"
                      onClick={() => setState(false)}
                    >
                      <div>
                        {" "}
                        <Image
                          src={
                            "https://ik.imagekit.io/kn40ppx9b/Superforex/thunderstorm.png?updatedAt=1738915294213"
                          }
                          alt=""
                          width={22}
                          height={22}
                          className="w-5"
                        />
                      </div>
                      <div className="">
                        <div className="ms-1">{t("energybonus")}</div>
                        {/* <div className="font-normal">{t("getanadd")}</div> */}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="  relative">
              <Link
                className="flex items-center gap-2 border-b border-b-slate-300 border-dashed py-3 cursor-pointer"
                href={"/partnership-program"}
              >
                <div className="ps-5">
                  <Image
                    src={
                      "https://ik.imagekit.io/kn40ppx9b/Superforex/heart-partner-handshake.png?updatedAt=1739171213278"
                    }
                    alt=""
                    width={22}
                    height={22}
                  />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("partners")}
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </Link>
            </div>
            <div className="group relative ">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b border-b-slate-300 border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="flex flex-col flex-1 font-bold ms-6 capitalize">
                  {t("languages")}
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </div>
              <div
                className="fixed top-14 z-50 w-full  overflow-hidden bg-white opacity-0 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto translate-x-24 group-focus-within:translate-x-0 duration-300 transition- "
                tabIndex={0}
              >
                <div className="px-4 flex flex-col gap-2 pt-4">
                  <div className="flex flex-col font-bold gap-2 uppercase">
                    <div className="grid grid-cols-2">
                      <div>
                        <div
                          className="flex items-center gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1"
                          href={"gold-rush"}
                          onClick={() => handlerLang("en")}
                        >
                          <Image src={english} alt="" />
                          <div className="">english</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("hans")}
                        >
                          <Image src={china} alt="" />
                          <div className="">简体中文</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("hant")}
                        >
                          <Image src={china} alt="" />
                          <div className="">繁体中文</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("hi")}
                        >
                          <Image src={india} alt="" />
                          <div className="">India</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("id")}
                        >
                          <Image src={indonesia} alt="" />
                          <div className="">Indonesia</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("ms")}
                        >
                          <Image src={malaysia} alt="" />
                          <div className="">Malaysia</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("vi")}
                        >
                          <Image src={vietnam} alt="" />
                          <div className="">Viet Nam</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 "
                          onClick={() => handlerLang("ko")}
                        >
                          <Image src={korea} alt="" />
                          <div className="">Korea</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("bn")}
                        >
                          <Image src={bangladesh} alt="" />
                          <div className="">বাংলা</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("pt-BR")}
                        >
                          <Image src={brazil} alt="" />
                          <div className="">português</div>
                        </div>
                      </div>

                      <div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("cs")}
                        >
                          <Image src={cs} alt="" />
                          <div className="">Česky</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("it")}
                        >
                          <Image src={it} alt="" />
                          <div className="">Italiano</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("es")}
                        >
                          <Image src={es} alt="" />
                          <div className="">Español</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("fr")}
                        >
                          <Image src={fr} alt="" />
                          <div className="">Français</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("de")}
                        >
                          <Image src={de} alt="" />
                          <div className="">Deutsch</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 "
                          onClick={() => handlerLang("ro")}
                        >
                          <Image src={ro} alt="" />
                          <div className="">Română</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("tr")}
                        >
                          <Image src={tr} alt="" />
                          <div className="">Türkçe</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("pl")}
                        >
                          <Image src={pl} alt="" />
                          <div className="">Polski</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                          onClick={() => handlerLang("ur")}
                        >
                          <Image src={ur} alt="" />
                          <div className="">اردو</div>
                        </div>
                        <div
                          className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 mb-96"
                          onClick={() => handlerLang("uae")}
                        >
                          <Image src={uae} alt="" />
                          <div className="">رَبِيَّة</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-default/10 mt-32 mx-1 mb-2 rounded flex justify-center items-center py-5 ">
              <Link href={"https://my.superforex.global"}>
                <ButtonCustomize background={true} name={t("signin")} />
              </Link>
            </div>
            <div className="h-[1px]"></div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default MenuMobile;
