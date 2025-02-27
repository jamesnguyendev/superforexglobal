import React from "react";
import Banner from "../../components/banner";
import { Container } from "@mui/material";
import DepositSlider from "../../components/depositSliderTradeEarn";
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
  const data = [
    {
      img: "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-unlimited-duration.5615d254.jpg&w=256&q=75",
      title: t("datatitle1"),
      content: t("datacontent1"),
    },
    {
      img: "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-no-traded-lots.4df283cb.jpg&w=256&q=75",
      title: t("datatitle2"),
      content: t("datacontent2"),
    },
    {
      img: "https://superforex.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fillustration-unlimited-payment.1dc3d5c0.jpg&w=256&q=75",
      title: t("datatitle3"),
      content: t("datacontent3"),
    },
  ];

  const item = [
    {
      name: t("voucher"),
      desc1: t("voucher1"),
      desc2: t("voucher2"),
      widthimg: 200,
      currency: 500,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/cumt.jpg?updatedAt=1739524301129",
    },
    {
      name: t("hearphone"),
      desc1: t("hearphone1"),
      desc2: t("hearphone2"),
      widthimg: 200,
      currency: 1000,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/231206035739-670nc.webp?updatedAt=1739525441691",
    },
    {
      name: t("volume"),
      desc1: t("descvolume1"),
      desc2: t("descvolume2"),
      widthimg: 200,
      currency: 2000,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/db6926d175c1c89f91d0.jpg?updatedAt=1734687281329",
    },
    {
      widthimg: 200,
      name: t("watch"),
      desc1: t("descwatch1"),
      desc2: t("descwatch2"),
      currency: 5000,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/ec272c967f86c2d89b97-removebg-preview.png?updatedAt=1734682965875",
    },
    {
      widthimg: 200,
      name: t("ipad"),
      desc1: t("descipad1"),
      desc2: t("descipad2"),
      currency: 10000,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/c3e83f5c6c4cd112885d-removebg-preview.png?updatedAt=1734684352952",
    },
    {
      name: t("iphone"),
      desc1: t("desciphone1"),
      desc2: t("desciphone2"),
      currency: 15000,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/Screenshot_22.png?updatedAt=1734687561439",
      widthimg: 150,
    },
    {
      name: t("mac"),
      desc1: t("descmac1"),
      desc2: t("descmac2"),
      currency: 25000,
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/9ca8f51fa60f1b51421e-removebg-preview.png?updatedAt=1734684353125",
      widthimg: 300,
    },
    {
      widthimg: 250,
      currency: 50000,
      name: t("sh"),
      desc1: t("sh1"),
      desc2: t("sh2"),
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/84f0644937598a07d348-removebg-preview.png?updatedAt=1734684352956",
    },
    {
      currency: 350000,
      widthimg: 360,
      name: "Peugeot 3008",
      desc1: t("cardeposit"),
      desc2: t("cardeposit2"),
      img: "https://ik.imagekit.io/kn40ppx9b/Superforex/PEUGEOT-3008-XAM.png?updatedAt=1738727857796",
    },
  ];
  return (
    <>
      <Banner
        imgDesktop={
          "https://ik.imagekit.io/kn40ppx9b/Superforex/7fd1fb1bdbee67b03eff.jpg?updatedAt=1736821505597"
        }
        imgMobile={
          "https://ik.imagekit.io/kn40ppx9b/Superforex/d7eb3010bde701b958f6.jpg?updatedAt=1736830105397"
        }
        lights
        titleBanner={t("WelcomeBonus")}
        subTitleBanner={t("GetMoreOnEachDeposit")}
        buttonName={t("ClaimBonus")}
        link="/terms-and-conditions/easy-deposit-bonus-agreement"
      />

      <section className={"pt-24 mb-14 px-10 text-default"}>
        <div className="grid lg:grid-cols-3 gap-x-3 gap-y-28 md:grid-cols-2 grid-cols-1">
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
                <h1 className="font-semibold text-slate-700 text-2xl mb-4">
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
      </section>
      <WhyChoose data={data} title={t("WhyChooseWelcomeBonus")} />
      <div
        className={
          "flex justify-center items-center max-w-[70rem] mx-auto my-7"
        }
      >
        <DepositSlider
          title={t("HowWelcomeBonusBoostDeposit")}
          sliderName={t("YourDeposit")}
          bottomName={t("AccountBalanceAfterBonus")}
          buttonName={t("GetBonus")}
          time={2}
          filter={item}
        />
      </div>
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
        <TheBrokerOfChoice text={t("tradeandearn")} />
      </section>
      <Container className={"py-40"}>
        <AccountForm data={dataCurrent} />
      </Container>
    </>
  );
};

export default Page;
