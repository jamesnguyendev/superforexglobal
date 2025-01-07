import BannerSvg from "../../components/bannerSvg";
import BenefitCart from "../../components/benefitCart";
import BrokerHero from "../../components/brokerHero";
import { DepositCardData } from "../../data";
import React from "react";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("PartnershipTypes");
  const BrokerHeroCard = [
    {
      icon: "/bagMoney.svg",
      content: t("enjoythemost"),
    },
    {
      icon: "/chat.svg",
      content: t("youhavetheopportunity"),
    },
    {
      icon: "/bill.svg",
      content: t("accesstolive"),
    },
    {
      icon: "/pre.svg",
      content: t("awiderange"),
    },
  ];
  const BrokerHeroCard2 = [
    {
      icon: "/bagMoney.svg",
      content: t("earnonaverage"),
    },
    {
      icon: "/magnet.svg",
      content: t("earnupto"),
    },
    {
      icon: "/moneyArrow.svg",
      content: t("earnupontrading"),
    },
    {
      icon: "/apple.svg",
      content: t("makelocal"),
    },
  ];
  return (
    <div>
      <BannerSvg title={t("partnershipTypes")} subTitle={t("chooseYourWay")} />
      <BrokerHero
        icon={"ib.svg"}
        title={t("introducingBroker")}
        content={t("ibContent")}
        subContent={t("ibSubContent")}
        link={"https://my.superforex.com/login-partner"}
        img={"/Image/ib.webp"}
        buttonName={t("openIBAccount")}
      />
      <BenefitCart data={BrokerHeroCard} />
      <BrokerHero
        icon={"/sub-ib.svg"}
        title={t("subIntroducingBroker")}
        content={t("subIBContent")}
        link={"https://my.superforex.com/login-partner"}
        img={"/Image/sub-ib.webp"}
        reverse={true}
      />
      <BenefitCart data={BrokerHeroCard2} />
      <BrokerHero
        icon={"mlp.svg"}
        title={t("multiLevelPartnership")}
        content={t("mlpContent")}
        link={"https://my.superforex.com/register-mlp"}
        img={"/Image/mlp.webp"}
        buttonName={t("mlpAccount")}
      />
      <BenefitCart data={DepositCardData} />
    </div>
  );
};

export default Page;
