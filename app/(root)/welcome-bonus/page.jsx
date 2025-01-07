import React from "react";
import Banner from "../../components/banner";
import { Container } from "@mui/material";
import DepositSlider from "../../components/depositSlider";
import HowDoesItWork from "../../components/howDoesItWork";
import globalIcon from "../../../public/globalIcon.svg";
import shield from "../../../public/shield.svg";
import coin from "../../../public/coin.svg";
import WhyChoose from "../../components/whyChoose";
import TheBrokerOfChoice from "../../components/theBrokerOfChoice";
import AccountForm from "../../components/accountForm";
import AdvantagesOfSuperForex from "../../components/advantagesOfSuperForex";
import { data } from "../../data";

import { useTranslations } from "next-intl";
import Image from "next/image";

const dataCurrent = [
  "Standard",
  "Swap-Free",
  "No-Spread",
  "Micro-Cent",
  "Profi STP",
  "Crypto",
  "ECN Standard",
  "ECN Standard Mini",
  "ECN Swap-Free",
  "ECN Swap-Free Mini",
  "ECN Crypto",
];

const Page = () => {
  const t = useTranslations("WelcomeBonus");
  const item = [
    {
      name: t("volume"),
      desc1: t("descvolume1"),
      desc2: t("descvolume2"),
      widthimg: 250,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/screenshot-1734682584527-removebg-preview.png?updatedAt=1734682782747",
    },
    {
      widthimg: 200,
      name: t("watch"),
      desc1: t("descwatch1"),
      desc2: t("descwatch2"),
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/ec272c967f86c2d89b97-removebg-preview.png?updatedAt=1734682965875",
    },
    {
      widthimg: 200,
      name: t("ipad"),
      desc1: t("descipad1"),
      desc2: t("descipad2"),
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/c3e83f5c6c4cd112885d-removebg-preview.png?updatedAt=1734684352952",
    },
    {
      name: t("iphone"),
      desc1: t("desciphone1"),
      desc2: t("desciphone2"),
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/Screenshot_22.png?updatedAt=1734687561439",
      widthimg: 150,
    },
    {
      name: t("mac"),
      desc1: t("descmac1"),
      desc2: t("descmac2"),
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/9ca8f51fa60f1b51421e-removebg-preview.png?updatedAt=1734684353125",
      widthimg: 300,
    },
    {
      widthimg: 280,
      name: t("sh"),
      desc1: t("sh1"),
      desc2: t("sh2"),
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/84f0644937598a07d348-removebg-preview.png?updatedAt=1734684352956",
    },
  ];
  return (
    <>
      <Banner
        imgDesktop={
          "https://ik.imagekit.io/kn40ppx9b/Superforex/1ef4cd142415994bc004.jpg?updatedAt=1734585638860"
        }
        imgMobile={
          "https://ik.imagekit.io/kn40ppx9b/Superforex/image.png?updatedAt=1734587034539"
        }
        light
        titleBanner={t("WelcomeBonus")}
        subTitleBanner={t("GetMoreOnEachDeposit")}
        buttonName={t("ClaimBonus")}
      />
      <section className={"pt-24 mb-14 px-10 text-default"}>
        <div className="grid lg:grid-cols-3 gap-x-3 gap-y-28 md:grid-cols-2 grid-cols-1 ">
          {item.map((i, index) => (
            <div
              className=" flex flex-col gap-8 text-center items-center justify-end"
              key={index}
            >
              <div className="">
                <Image
                  src={i.img}
                  quality={100}
                  width={i.widthimg} // Chiều rộng
                  height={150} // Chiều cao
                  alt="mars"
                  className="object-cover "
                />
              </div>
              <div className="flex flex-col ">
                <h1 className="font-semibold text-slate-700 text-2xl mb-3">
                  {i.name}
                </h1>
                <div className="text-lg">
                  <span>{i.desc1}</span>
                  <br />
                  <span>{i.desc2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-x-3 gap-y-14 md:gap-y-28 grid-cols-1 ">
          <div className=" flex flex-col text-center items-center justify-center place-self-center	">
            <Image
              src={
                "https://ik.imagekit.io/kn40ppx9b/Superforex/f08ea534f6244b7a1235-removebg-preview.png?updatedAt=1734684352879"
              }
              quality={100}
              width={600}
              height={150}
              alt="mars"
              className="object-cover "
            />
            <div className="flex flex-col ">
              <h1 className="font-semibold text-slate-700 text-2xl mb-3">
                Peugeot 3008
              </h1>
              <div className="text-lg">
                <span>{t("cardeposit")}</span>
                <br />
                <span>{t("cardeposit2")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"pb-24"}>
        <Container className="flex justify-center text-default">
          <p className={"m-0 max-w-3xl text-xl font-normal text-default"}>
            {t("SuperForexDescription")}
            <br />
            <br />
            {t("AllAccountTypesEligible")}
            <br />
            <br />
            {t("RecurringBonusLine")}
          </p>
        </Container>
      </section>
      <WhyChoose data={data} title={t("WhyChooseWelcomeBonus")} />
      <Container
        className={"flex justify-center items-center max-w-[56rem] my-20"}
      >
        <DepositSlider
          title={t("HowWelcomeBonusBoostDeposit")}
          sliderName={t("YourDeposit")}
          bottomName={t("AccountBalanceAfterBonus")}
          buttonName={t("GetBonus")}
          time={2}
          valueDefault={"5000"}
        />
      </Container>
      <HowDoesItWork
        title={t("HowDoesItWork")}
        subTitle={t("ObtainWelcomeBonus")}
        topicTitle={t("RegisterRealTradingAccount")}
        topicContent={t("OpenLiveTradingAccount")}
        topicTitleNd={t("ApplyForWelcomeBonus")}
        topicContentNd={t("LogIntoLiveAccount")}
        topicTitleRd={t("FundAccountGetBonus")}
        topicContentRd={t("ActivateBonusByFunding")}
      />
      <AdvantagesOfSuperForex
        maintitle={t("AdvantagesOfSuperForex")}
        firsticon={globalIcon}
        firsttitle={t("ECNAccounts")}
        firstcontent={t("ImprovedTradingTechnology")}
        secondicon={coin}
        secondtitle={t("Over400TradingInstruments")}
        secondcontent={t("UseFollowingInstruments")}
        thirdicon={shield}
        thirdtitle={t("DepositProtection")}
        thirdcontent={t("FundsSavedInCaseOfLosses")}
      />
      <section className={"bg-gray-50 py-16"}>
        <TheBrokerOfChoice />
      </section>
      <Container className={"py-40"}>
        <AccountForm data={dataCurrent} />
      </Container>
    </>
  );
};

export default Page;
