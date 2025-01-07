import React from "react";
import Banner from "../../components/banner";
import { Container } from "@mui/material";
import DepositSlider from "../../components/depositSlider";
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

  const dataEnergyBonus = [
    {
      img: "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-withdrawable.1eca4003.jpg&w=256&q=75",
      title: t("withdrawable"),
      content: t("thebonus"),
    },
    {
      img: "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-renewlable.d32f301d.jpg&w=256&q=75",
      title: t("renewable"),
      content: t("granted"),
    },
    {
      img: "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-unlimited.034b7236.jpg&w=256&q=75",
      title: t("unlimited"),
      content: t("nolimit"),
    },
  ];
  return (
    <div>
      <Banner
        imgDesktop={"/Image/hero-energy-desktop-ltr.webp"}
        imgMobile={"/Image/hero-energy-mobile.webp"}
        buttonName={t("ClaimBonus")}
        titleBanner={t("Title")}
        subTitleBanner={t("SubTitle")}
        link={"#register"}
        blank={true}
      />
      <Container className="mt-20">
        <p className="m-0 mx-auto mb-20 max-w-3xl text-xl font-normal text-default">
          {t("Description")}
        </p>
      </Container>

      <Whychoose data={dataEnergyBonus} title={t("WhyChooseTitle")} />
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
        <TheBrokerOfChoice />
      </section>
      <Container className={"py-40"}>
        <AccountForm data={data} />
      </Container>
    </div>
  );
};

export default Page;
