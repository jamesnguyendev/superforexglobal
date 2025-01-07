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
            <div className="group relative  ">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-y border-y-slate-300 border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <EmojiFlagsIcon sx={{ color: "#74b9ff", fontSize: 30 }} />
                </div>
                <div className="flex flex-col flex-1 font-bold">
                  <span className="ms-16 capitalize">{t("quickstart")}</span>
                  <span className="font-normal">{t("themostessential")}</span>
                </div>
                <div className="pe-5">
                  <ArrowForwardIos fontSize="small" />
                </div>
              </div>
              <div
                className="fixed top-14 z-50 w-full  overflow-hidden bg-white opacity-0 group-focus-within:opacity-100 pointer-events-none group-focus-within:pointer-events-auto translate-x-24 group-focus-within:translate-x-0 duration-300"
                tabIndex={0}
              >
                <div className="px-4 flex flex-col *:gap-2 gap-2 pt-4">
                  <h1 className="text-lg opacity-70">
                    {t("opentstadardaccountor")}
                  </h1>
                  <div className="flex flex-col ">
                    <Link
                      className="flex gap-4 capitalize cursor-pointer font-bold opacity-80 active:ring-2 active:ring-primary rounded py-2"
                      href={"standard-account"}
                      onClick={() => setState(false)}
                    >
                      <CreditCardRoundedIcon sx={{ color: "#74b9ff" }} />
                      {t("standard")}
                    </Link>
                    <Link
                      href={"ecn-standard-account"}
                      className="flex gap-4 capitalize cursor-pointer font-bold opacity-80 active:ring-2 active:ring-primary rounded py-2"
                      onClick={() => setState(false)}
                    >
                      <AddCardRoundedIcon sx={{ color: "#34ace0" }} />
                      {t("ecnstandart")}
                    </Link>
                  </div>
                </div>
                <div className="px-4 flex flex-col *:gap-2 gap-2 py-4 my-6 border-y border-dashed">
                  <h1 className="text-lg opacity-70">
                    {t("downloadplatform")}
                  </h1>
                  <div className="flex flex-col active:ring-2 active:ring-primary rounded">
                    <Link
                      className="flex items-center capitalize gap-4 cursor-pointer font-bold opacity-90 py-2"
                      href={"deposit-and-withdrawal"}
                      onClick={() => setState(false)}
                    >
                      <Image
                        src={DepositAndWithdrawal}
                        alt="DepositAndWithdrawal"
                      />
                      {t("depositandwithrawal")}
                    </Link>
                  </div>
                </div>
                <div className="px-4 flex flex-col *:gap-2 gap-2">
                  <h1 className="text-lg opacity-70 capitalize">
                    {t("claimabonus")}
                  </h1>
                  <div className="flex flex-col ">
                    <Link
                      className="flex flex-col capitalize cursor-pointer font-bold opacity-80 active:ring-2 active:ring-primary rounded py-2"
                      href={"easy-deposit-bonus"}
                      onClick={() => setState(false)}
                    >
                      <div className="flex items-center gap-3">
                        <Image src={EasyDepositBonus} alt="" />
                        {t("easydeposit")}
                        <span className="text-xs bg-sky-600 text-white px-1 rounded-full">
                          TOP
                        </span>
                      </div>
                      <span className="font-normal text-md pt-1">
                        {t("superforexgives3000")}
                      </span>
                    </Link>
                    <Link
                      className="flex flex-col cursor-pointer font-bold opacity-80 active:ring-2 active:ring-primary rounded pt-2 mb-32"
                      href={"hot-bonus"}
                      onClick={() => setState(false)}
                    >
                      <div className="flex items-center gap-3 capitalize">
                        <Image src={HotBonus} alt="" />
                        {t("750%extremehotbonus")}
                      </div>
                      <span className="font-normal text-md pt-1">
                        {t("thehottestoffer")}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
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
                  <EmojiObjectsIcon sx={{ color: "#26de81", fontSize: 30 }} />
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
                    <h1 className="text-md opacity-70 font-bold flex items-center">
                      <EmojiObjectsIcon
                        sx={{
                          color: "#26de81",
                          fontSize: 30,
                          marginRight: "0.5rem",
                        }}
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
                      href={"/"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("termsandconditions")}
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
                <div className="px-4 flex flex-col *:gap-2 gap-2 py-4 my-3 border-y border-dashed">
                  <Link
                    href={"/"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center ">
                      <Image src={Document} alt="" className="me-2" />
                      {t("companynews")}
                    </h1>
                  </Link>
                  <div className="flex flex-col ">
                    <Link
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      href={"/"}
                      onClick={() => setState(false)}
                    >
                      {t("video")}
                    </Link>
                    <Link
                      href={"/"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("expos")}
                    </Link>
                    <Link
                      href={"/"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("seminars")}
                    </Link>
                    <Link
                      href={"/"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("socialresponsibility")}
                    </Link>
                  </div>
                </div>
                <div className="px-4 flex flex-col pb-16">
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
                  <WaterfallChartIcon sx={{ color: "#74b9ff", fontSize: 30 }} />
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
                <div className="px-4 flex flex-col gap-2 pt-4">
                  <div className="flex flex-col font-bold opacity-80 gap-2">
                    <Link
                      className="flex items-center gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1"
                      href={"/"}
                      onClick={() => setState(false)}
                    >
                      <Image src={CryptoCurrencies} alt="" />
                      {t("cryptocurrencies")}
                    </Link>
                    <Link
                      href={"gold-trading"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={GoldTrading} alt="" />
                      {t("goldtrading")}
                    </Link>
                    <Link
                      href={"metals-trading"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={MetalsTrading} alt="" />
                      {t("mestalstrading")}
                    </Link>
                    <Link
                      href={"stock-trading"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={StockTrading} alt="" /> {t("stocktrading")}
                    </Link>
                    <Link
                      href={"/oil-trading"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={OilTrading} alt="" /> {t("oiltrading")}
                    </Link>
                    <Link
                      href={"indices-trading"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={IndicesTrading} alt="" />{" "}
                      {t("indicestrading")}
                    </Link>
                    <Link
                      href={"/"}
                      className="flex gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1 pb-96"
                      onClick={() => setState(false)}
                    >
                      {t("allins")}
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
                  <LayersIcon sx={{ color: "#a55eea", fontSize: 30 }} />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("specialoffer")}
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
                      href={"auto-reset-balance"}
                      onClick={() => setState(false)}
                    >
                      <Image src={AutoResetBalance} alt="" /> {t("autoreset")}
                    </Link>
                    <Link
                      href={"no-fees-on-deposit"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={NoFeesOnDeposit} alt="" /> {t("nofeeson")}
                    </Link>
                    <Link
                      href={"deposit-protection"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={DepositProtection} alt="" />
                      {t("depositprotection")}
                    </Link>
                    <Link
                      href={"interest-rate-on-equity"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={InterestRateOnEquity} alt="" />{" "}
                      {t("interestrate")}
                    </Link>
                    <Link
                      href={"membership-club"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 mb-80"
                      onClick={() => setState(false)}
                    >
                      <Image src={MembershipClub} alt="" />{" "}
                      {t("membershipclub")}
                      <span className="bg-purple-600 text-white px-2 uppercase text-xs rounded-full">
                        promo
                      </span>
                    </Link>
                    {/* <Link
                      href={"account-packages"}
                      className="flex items-center gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1 mb-80"
                      onClick={() => setState(false)}
                    >
                      <Image src={AccountPackages} alt="" />
                      {t("accountpackage")}
                      <span className="bg-purple-600 text-white px-2 uppercase text-xs rounded-full">
                        promo
                      </span>
                    </Link> */}
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
                  <CardGiftcardIcon sx={{ color: "#26de81", fontSize: 30 }} />
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
                      href={"trade-and-earn"}
                      onClick={() => setState(false)}
                    >
                      <Image src={WelcomeBonus} alt="" />
                      <div className="">
                        <div className="">{t("welcomebonus")}</div>
                        <div className="font-normal">{t("increase100%")}</div>
                      </div>
                    </Link>
                    <Link
                      href={"hot-bonus"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={HotBonus} alt="" />
                      <div className="">
                        <div className="">{t("750ex")}</div>
                        <div className="font-normal">{t("thehottest")}</div>
                      </div>
                    </Link>
                    <Link
                      href={"easy-deposit-bonus"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={EasyDepositBonus} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {t("depositprotection")}
                          <span className="text-xs bg-sky-600 text-white px-1 rounded-full">
                            TOP
                          </span>
                        </div>
                        <div className="font-normal">
                          {t("superforexgives3000")}
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"free-swap"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={EnergyBonus} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {t("energybonus")}
                        </div>
                        <div className="font-normal">{t("getanadd")}</div>
                      </div>
                    </Link>
                    <Link
                      href={"refer-a-friend"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={ReferAFriend} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2 ">
                          <span className="">{t("referafriend")}</span>
                          <span className="text-xs bg-purple-600 text-white px-1 rounded-full">
                            TOP
                          </span>
                        </div>
                        <div className="font-normal">{t("sharethebonus")}</div>
                      </div>
                    </Link>
                    <Link
                      href={"bonuses-chart"}
                      className="flex gap-2 cursor-pointer items-center mb-48 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <div className="font-normal">
                        <div className="flex items-center gap-2">
                          {t("bonuseschart")}
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
                  <SchoolIcon sx={{ color: "#26de81", fontSize: 30 }} />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("education")}
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
                      href={"education"}
                      onClick={() => setState(false)}
                    >
                      <Image src={Education} alt="" />
                      <div className="">
                        <div className="">{t("education")}</div>
                        <div className="font-normal">{t("comprehensive")}</div>
                      </div>
                    </Link>
                    <Link
                      href={"training-centres"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={TrainingCentres} alt="" />
                      <div className="">
                        <div className="">
                          {t("traningcentres")}
                          <div className="font-normal">
                            {t("visitouroffices")}
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"seminars"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={Seminars} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {t("seminars")}
                        </div>
                        <div className="font-normal">
                          {t("highlightsofsuperforex")}
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"energy-bonus"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={EducationVideos} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {t("educationvideos")}
                        </div>
                        <div className="font-normal">{t("ournewest")}</div>
                      </div>
                    </Link>
                    <Link
                      href={"pattern-graphix"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 mb-80"
                      onClick={() => setState(false)}
                    >
                      <Image src={PatternGraphix} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2 ">
                          <span className="">{t("patterngraphix")}</span>
                        </div>
                        <div className="font-normal">{t("identify")}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="group relative ">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b border-b-slate-300 py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <PersonOutlineOutlinedIcon
                    sx={{ color: "#f7b731", fontSize: 30 }}
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
                      <CreditCardRoundedIcon sx={{ color: "#74b9ff" }} />
                      {t("stpaccount")}
                    </h1>
                  </Link>
                  {/* <div className="flex flex-col ">
                    <Link
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      href={"standard-account"}
                      onClick={() => setState(false)}
                    >
                      {t("standard")}
                    </Link>
                    <Link
                      href={"micro-cent-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("microcent")}
                    </Link>
                    <Link
                      href={"swap-free-islamic-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("swapfree")}
                    </Link>
                    <Link
                      href={"profi-stp-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      Profi STP
                    </Link>
                    <Link
                      href={"no-spread-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("nospread")}
                    </Link>
                    <Link
                      href={"crypto-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("crypto")}
                    </Link>
                    <Link
                      href={"sticpay-stp-account"}
                      className="flex items-center gap-2 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("superstp")}
                      <span className="bg-orange-500 text-white uppercase px-1 rounded-full text-xs">
                        sticpay
                      </span>
                    </Link>
                  </div> */}
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"ecn-accounts"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-80 font-bold flex items-center gap-3 ">
                      <AddCardRoundedIcon sx={{ color: "#34ace0" }} />
                      {t("ecnaccount")}
                    </h1>
                  </Link>
                  {/* <div className="flex flex-col ">
                    <Link
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      href={"ecn-standard-account"}
                      onClick={() => setState(false)}
                    >
                      {t("ecnstandart")}
                    </Link>
                    <Link
                      href={"ecn-islamic-mini-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("ecnswappfreemini")}
                    </Link>
                    <Link
                      href={"ecn-standard-mini-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("ecnstandartmini")}
                    </Link>
                    <Link
                      href={"ecn-crypto-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("ecncryto")}
                    </Link>
                    <Link
                      href={"ecn-islamic-account"}
                      className="flex gap-4 cursor-pointer opacity-80 active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      {t("ecnswappfree")}
                    </Link>
                  </div> */}
                </div>
                <div className="px-4 flex flex-col gap-2">
                  <Link
                    href={"cent-accounts"}
                    onClick={() => setState(false)}
                    className="rounded py-2 active:ring-2 active:ring-primary"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center gap-3">
                      <CreditCardRoundedIcon sx={{ color: "#74b9ff" }} />
                      {t("centaccount")}
                    </h1>
                  </Link>
                </div>
                <div className="px-4 flex flex-col pb-16">
                  <Link
                    href={"/demo-account"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center ">
                      <Image src={DemoAccount} alt="" className="me-2" />
                      {t("demoaccount")}
                    </h1>
                  </Link>
                  <Link
                    href={"/local-currencies"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center ">
                      <Image src={Location} alt="" className="me-2" />
                      {t("localcurrencies")}
                    </h1>
                  </Link>
                  <Link
                    href={"/deposit-and-withdrawal"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center ">
                      <Image
                        src={DepositAndWithdrawal}
                        alt=""
                        className="me-2"
                      />
                      {t("depositandwithrawal")}
                    </h1>
                  </Link>
                  <Link
                    href={"/analytics"}
                    onClick={() => setState(false)}
                    className="active:ring-2 active:ring-primary rounded py-2"
                  >
                    <h1 className="text-md opacity-70 font-bold flex items-center">
                      <Image src={Analytics} alt="" className="me-2" />
                      {t("allanalytics")}
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
                  <SettingsIcon sx={{ color: "#0fb9b1", fontSize: 30 }} />
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
                    {/* <Link
                      className="flex items-center gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1"
                      href={"mt-4"}
                      onClick={() => setState(false)}
                    >
                      <Image src={MetaTrader4} alt="" />
                      <div className="">MetaTrader4</div>
                    </Link> */}
                    <Link
                      className="flex items-center gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1"
                      href={"forex-copy-system"}
                      onClick={() => setState(false)}
                    >
                      <Image src={ForexCopy} alt="" />
                      <div className="">{t("forexcopy")}</div>
                    </Link>
                    <Link
                      href={"mobile-app"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 mb-[32rem]"
                      onClick={() => setState(false)}
                    >
                      <Image src={MobileApp} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2">
                          {t("mobileapp")}
                          <span className="text-xs bg-sky-600 text-white px-1 rounded-full">
                            TOP
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="group relative">
              <div className="group-focus-within:visible invisible group-focus-within:left-4 transform opacity-0 group-focus-within:opacity-100 duration-500 fixed top-3 left-8 text-primary cursor-pointer flex items-center">
                <ArrowBackIos fontSize="small" />
                {t("back")}
              </div>
              <div
                className="flex items-center gap-2 border-b border-b-slate-300 border-dashed py-3 cursor-pointer"
                tabIndex={0}
              >
                <div className="ps-5">
                  <MilitaryTechOutlinedIcon
                    sx={{ color: "#eb3b5a", fontSize: 30 }}
                  />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("contest")}
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
                      href={"gold-rush"}
                      onClick={() => setState(false)}
                    >
                      <Image src={GoldRush} alt="" />
                      <div className="">{t("goldrush")}</div>
                    </Link>
                    <Link
                      href={"cryptomania"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={CryptoMania} alt="" />
                      <div className="">
                        <div className="flex items-center gap-2">
                          CryptoMania
                        </div>
                      </div>
                    </Link>
                    <Link
                      href={"contests"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 mb-[32rem]"
                      onClick={() => setState(false)}
                    >
                      <div className="">
                        <div className="flex items-center gap-2 font-normal">
                          {t("allcontest")}
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
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
                  <WorkOutlineOutlinedIcon
                    sx={{ color: "#f7b731", fontSize: 30 }}
                  />
                </div>
                <div className="flex flex-col flex-1 font-bold capitalize">
                  {t("partners")}
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
                      href={"partnership-program"}
                      onClick={() => setState(false)}
                    >
                      <Image src={PartnershipProgram} alt="" />
                      {t("partnershipprogram")}
                    </Link>
                    <Link
                      href={"ib-certificates"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={IbCertificates} alt="" />
                      {t("ibcert")}
                    </Link>
                    <Link
                      href={"affiliate-links"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={LinksAffilate} alt="" />
                      {t("affiliate")}
                    </Link>
                    <Link
                      href={"banners"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={Banners} alt="" />
                      {t("banners")}
                    </Link>
                  </div>
                </div>
                <div className="px-4 flex flex-col gap-2 border-t border-dashed mt-5">
                  <div className="flex flex-col font-bold opacity-80 gap-2 py-6">
                    <Link
                      className="flex gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1"
                      href={"partners-contest"}
                      onClick={() => setState(false)}
                    >
                      <Image src={PartnerContest} alt="" />
                      {t("goldenchallenge")}
                    </Link>
                    <Link
                      href={"merchandise"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={Merchandise} alt="" />
                      {t("merchandise")}
                    </Link>
                    <Link
                      href={"presentations"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={Presentations} alt="" />
                      {t("presentations")}
                    </Link>
                    <Link
                      href={"partner-websites"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={ReadyWebsites} alt="" />
                      {t("readywebsite")}
                    </Link>
                  </div>
                </div>
                <div className="px-4 flex flex-col gap-2 border-t border-dashed mb-5">
                  <div className="flex flex-col font-bold  gap-2 py-6 opacity-80">
                    <div
                      className="flex gap-2 cursor-pointer active:ring-2 active:ring-primary rounded py-1 ps-1 opacity-70"
                      onClick={() => setState(false)}
                    >
                      {t("becomeourpartner")}
                    </div>
                    <Link
                      href={"superforex-money"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={SuperForexMoney} alt="" />
                      {t("superforexmoney")}
                    </Link>
                    <Link
                      href={"super-ib-bonus"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={SuperIbBonus} alt="" />
                      {t("superibonus")}
                    </Link>
                    <Link
                      href={"rebate-system"}
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1"
                      onClick={() => setState(false)}
                    >
                      <Image src={RebateSystem} alt="" />
                      {t("rebatesystem")}
                    </Link>
                  </div>
                </div>
              </div>
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
                      onClick={() => handlerLang("th")}
                    >
                      <Image src={thailand} alt="" />
                      <div className="">ไทย</div>
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
                      className="flex gap-2 cursor-pointer items-center active:ring-2 active:ring-primary rounded py-1 mb-96"
                      onClick={() => handlerLang("ko")}
                    >
                      <Image src={korea} alt="" />
                      <div className="">Korea</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-default/10 mt-32 mx-1 mb-2 rounded flex justify-center items-center py-5 ">
              <Link href={"https://my.superforexs.com"}>
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
