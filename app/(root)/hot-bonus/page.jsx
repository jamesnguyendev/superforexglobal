import { Container } from "@mui/material";
import React from "react";
import HowDoesItWork from "../../components/howDoesItWork";
import Banner from "../../components/banner";
import Whychoose from "../../components/whyChoose";
import { dataHostBonus } from "../../data";
import DepositSlider from "../../components/depositSlider";
import AdvantagesOfSuperForex from "../../components/advantagesOfSuperForex";
import globalIcon from "../../../public/globalIcon.svg";
import shield from "../../../public/shield.svg";
import coin from "../../../public/coin.svg";
import TheBrokerOfChoice from "../../components/theBrokerOfChoice";
import AccountForm from "../../components/accountForm";
import BannerMobile5 from "../../../public/Image/hot-bonus-mobile.webp";

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
  const t = useTranslations("HotBonus");
  const datas = [
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-withdrawable.jpg?updatedAt=1735631478167",
      title: t("withdrawable"),
      content: t("thebonus"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-renewlable.jpg?updatedAt=1735631475197",
      title: t("renewable"),
      content: t("granted"),
    },
    {
      img: "https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-unlimited.jpg?updatedAt=1735631477705",
      title: t("unlimited"),
      content: t("nolimit"),
    },
  ];
  return (
    <div>
      <Banner
        imgDesktop={
          "https://ik.imagekit.io/3idyffxxb/New%20Folder/quality_restoration_20241227105605300.png?updatedAt=1735272457272"
        }
        imgMobile={BannerMobile5}
        buttonName={t("bannerBtn")}
        titleBanner={t("bannerTitle")}
        subTitleBanner={t("bannerSubTitle")}
        link={"/terms-and-conditions/extreme-hot-bonus"}
      />
      <Container className="mt-20">
        <p className="m-0 mx-auto mb-20 000max-w-3xl text-xl font-normal text-default">
          {t("intro")}
        </p>
      </Container>
      <Whychoose data={datas} title={t("whyChoose")} />
      <Container
        className={"flex justify-center items-center max-w-[56rem] my-20"}
      >
        <DepositSlider
          title={t("sliderTitle")}
          sliderName={t("slider1")}
          bottomName={t("sliderBottom")}
          buttonName={t("sliderBtn")}
          time={4}
          valueDefault={"10,000"}
          sliderNameSecond={t("slider2")}
          valueSecond={"10%"}
        />
      </Container>
      <HowDoesItWork
        title={t("howItWorksTitle")}
        subTitle={t("howItWorksSubTitle")}
        titleOption={t("howItWorksOptionTitle")}
        topicTitle={t("step1Title")}
        topicContent={t("step1Content")}
        topicTitleNd={t("step2Title")}
        topicContentNd={t("step2Content")}
        topicTitleRd={t("step3Title")}
        topicContentRd={t("step3Content")}
      />
      <AdvantagesOfSuperForex
        maintitle={t("advantagesTitle")}
        firsticon={globalIcon}
        firsttitle={t("feature1Title")}
        firstcontent={t("feature1Content")}
        secondicon={coin}
        secondtitle={t("feature2Title")}
        secondcontent={t("feature2Content")}
        thirdicon={shield}
        thirdtitle={t("feature3Title")}
        thirdcontent={t("feature3Content")}
      />
      <section className={"bg-gray-50 py-16"}>
        <TheBrokerOfChoice text={"10% hot bonus"} />
      </section>
      <Container className={"py-40"}>
        <AccountForm data={data} />
      </Container>
    </div>
  );
};

export default Page;
