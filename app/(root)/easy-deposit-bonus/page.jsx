import React from "react";
import Banner from "../../components/banner";
import { Container } from "@mui/material";
import DepositSlider from "../../components/depositSlider";
import HowDoesItWork from "../../components/howDoesItWork";
import AdvantagesOfSuperForex from "../../components/advantagesOfSuperForex";
import globalIcon from "../../../public/globalIcon.svg";
import shield from "../../../public/shield.svg";
import coin from "../../../public/coin.svg";
import TheBrokerOfChoice from "../../components/theBrokerOfChoice";
import AccountForm from "../../components/accountForm";
import Whychoose from "../../components/whyChoose";
import { dataEasyDepositBonus } from "../../data";

import { useTranslations } from "next-intl";

const data = ["ECN Standard Mini"];

const Page = (props) => {
  const t = useTranslations("EasyDepositBonus");
  const dataEasyDepositBonus = [
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-cup.jpg?updatedAt=1735631474755",
      title: t("thebiggest"),
      content: t("haveyouever"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-1-dollar.jpg?updatedAt=1735631475021",
      title: t("eaststart"),
      content: t("youcantry"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-beginner.jpg?updatedAt=1735631474727",
      title: t("agreatchoice"),
      content: t("openyourfirst"),
    },
  ];
  return (
    <div>
      <Banner
        imgDesktop={"/Image/hero-edb-desktop-ltr.webp"}
        imgMobile={"/Image/hero-edb-mobile.webp"}
        buttonName={t("ClaimBonus")}
        titleBanner={t("EasyDepositBonus")}
        subTitleBanner={t("GetYourBonus")}
        textBannerColor={true}
        link={"#register"}
      />
      <Container className="mt-20">
        <p className="m-0 mx-auto mb-7 max-w-3xl text-xl font-normal text-default">
          {t("SuperForexDescription")}
        </p>
        <p className="m-0 mx-auto mb-20 max-w-3xl text-xl font-normal text-default">
          {t("FundingAccountDescription")}
        </p>
      </Container>
      <Whychoose
        data={dataEasyDepositBonus}
        title={t("WhyChooseEasyDepositBonus")}
      />
      <Container
        className={"flex justify-center items-center max-w-[56rem] my-20"}
      >
        <DepositSlider
          title={t("HowEasyDepositBonusBoostDeposit")}
          sliderName={t("YourDeposit")}
          bottomName={t("AccountBalanceAfterBonus")}
          buttonName={t("GetBonus")}
          time={31}
          valueDefault={"5,000"}
        />
      </Container>
      <HowDoesItWork
        title={t("HowDoesItWork")}
        subTitle={t("ObtainEasyDepositBonus")}
        topicTitle={t("RegisterRealTradingAccount")}
        topicContent={t("OpenLiveTradingAccount")}
        topicTitleNd={t("ApplyForEasyDepositBonus")}
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
        <AccountForm data={data} />
      </Container>
    </div>
  );
};

export default Page;
