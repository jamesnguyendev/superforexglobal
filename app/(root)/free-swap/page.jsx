import React from "react";
import Banner from "../../components/banner";
import { Container } from "@mui/material";
import DepositSlider from "../../components/depositSliderFreeswap";
import HowDoesItWork from "../../components/howDoesItWork";
import Whychoose from "../../components/whyChoose";
import { dataEnergyBonus } from "../../data";
import AdvantagesOfSuperForex from "../../components/advantagesOfSuperForex";
import globalIcon from "../../../public/globalIcon.svg";
import shield from "../../../public/shield.svg";
import coin from "../../../public/coin.svg";
import TheBrokerOfChoice from "../../components/theBrokerOfChoice";
import AccountForm from "../../components/accountForm";

import { useTranslations } from "next-intl";

const data = [
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
  const t = useTranslations("EnergyBonus");
  const datas = [
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-no-verification.jpg?updatedAt=1735657802242",
      title: t("verification"),
      content: t("getthe750"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-unlimited-payment.jpg?updatedAt=1735631477507",
      title: t("unlimiteddeposit"),
      content: t("nolimit"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-no-traded-lots.jpg?updatedAt=1735631474458",
      title: t("notraded"),
      content: t("youdont"),
    },
  ];
  const freeswap = [
    {
      day: 30,
      deposit: 2000,
    },
    {
      day: 60,
      deposit: 5000,
    },
    {
      day: 90,
      deposit: 10000,
    },
    {
      day: 180,
      deposit: 15000,
    },
  ];
  return (
    <div>
      <Banner
        imgDesktop={
          "https://ik.imagekit.io/kn40ppx9b/Superforex/1ee21263b3c90d9754d8.jpg?updatedAt=1740712054995"
        }
        imgMobile={
          "https://ik.imagekit.io/kn40ppx9b/Superforex/e458aa345a96e4c8bd87.jpg?updatedAt=1740649137698"
        }
        buttonName={t("ClaimBonus")}
        titleBanner={t("Title")}
        subTitleBanner={t("SubTitle")}
        link={"/terms-and-conditions/energy-bonus-agreement"}
        blank={true}
      />
      <br />
      <Whychoose data={datas} title={t("WhyChooseTitle")} />
      <Container
        className={"flex justify-center items-center max-w-[56rem] my-20"}
      >
        <DepositSlider
          title={t("DepositSliderTitle")}
          sliderName={t("DepositSliderName")}
          bottomName={t("DepositSliderBottomName")}
          buttonName={t("DepositSliderButtonName")}
          time={2}
          valueDefault={"5,000"}
          filter={freeswap}
        />
      </Container>
      <HowDoesItWork
        title={t("HowDoesItWorkTitle")}
        subTitle={t("HowDoesItWorkSubTitle")}
        titleOption={t("HowDoesItWorkTitleOption")}
        topicTitle={t("HowDoesItWorkTopicTitle")}
        topicContent={t("HowDoesItWorkTopicContent")}
        topicTitleNd={t("HowDoesItWorkTopicTitleNd")}
        topicContentNd={t("HowDoesItWorkTopicContentNd")}
        topicTitleRd={t("HowDoesItWorkTopicTitleRd")}
        topicContentRd={t("HowDoesItWorkTopicContentRd")}
      />
      <AdvantagesOfSuperForex
        maintitle={t("MainTitle")}
        firsticon={globalIcon}
        firsttitle={t("FirstIconTitle")}
        firstcontent={t("FirstIconContent")}
        secondicon={coin}
        secondtitle={t("SecondIconTitle")}
        secondcontent={t("SecondIconContent")}
        thirdicon={shield}
        thirdtitle={t("ThirdIconTitle")}
        thirdcontent={t("ThirdIconContent")}
      />
      <section className={"bg-gray-50 py-16"}>
        <TheBrokerOfChoice text={"miễn phí qua đêm"} />
      </section>
      <Container className={"py-40"}>
        <AccountForm data={data} />
      </Container>
    </div>
  );
};

export default Page;
