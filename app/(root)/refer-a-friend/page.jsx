import React from "react";
import Banner from "../../components/banner";
import Image from "next/image";
import { Container } from "@mui/material";
import Button from "../../components/buttonCustomize";
import TheBrokerOfChoice from "../../components/theBrokerOfChoice";
import AccountForm from "../../components/accountForm";
import StepperForm from "../../components/stepperForm";

import { useTranslations } from "next-intl";

const data = ["Standard"];

const Page = () => {
  const t = useTranslations("ReferAFriend");
  const steps = [
    {
      title: t("openaccount"),
      content: t("youraccount"),
      icon: "plusUser.svg",
      button: false,
    },
    {
      title: t("createaspe"),
      content: t("youshouldopen"),
      icon: "addUserGift.svg",
      button: false,
    },
    {
      title: t("shardlink"),
      content: t("youcanfind"),
      icon: "linkGift.svg",
      button: false,
    },
  ];
  return (
    <div className="">
      <Banner
        imgDesktop={"/Image/hero-desktop.webp"}
        imgMobile={"/Image/hero-mobile.webp"}
        buttonName={t("ShareBonus")}
        titleBanner={t("ReferAFriendTitle")}
        textBannerColor={true}
        link={"https://my.superforexs.com/"}
      />
      <Container className="my-[125px] md:grid grid-cols-2  px-0">
        <div className="flex md:justify-start justify-center">
          <Image
            src={"/Image/hands-high-five.webp"}
            alt="hands-high-five.webp"
            width={420}
            height={423}
            className="w-fit "
          />
        </div>
        <div className="flex flex-col items-center justify-center px-5 md:px-0 pt-16 md:pt-0">
          <h2 className="mb-[24px] text-default text-[42px] font-semibold leading-[48px]">
            {t("BenefitFromBonus")}
          </h2>
          <p className="text-[15px] text-default">
            {t("ReferAFriendDescription")}
          </p>
        </div>
      </Container>
      <Container>
        <h2
          className={
            "mb-[48px] max-w-[33rem] text-5xl font-semibold text-default"
          }
        >
          {t("HowDoesReferAFriendWork")}
        </h2>
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-y-8">
            <div className="flex gap-x-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                1
              </span>
              <div className="flex flex-col items-start gap-y-2">
                <h4 className={"mt-1 text-xl font-semibold text-default"}>
                  {t("ShareYourLink")}
                </h4>
                <div className="font-normal text-default">
                  {t("ShareYourLinkDescription")}
                </div>
                <div className="flex flex-row justify-center items-center">
                  <a href="#register">
                    <Button name={t("InvitationLink")} background={false} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                2
              </span>
              <div className="flex flex-col items-start gap-y-2">
                <h4 className={"mt-1 text-xl font-semibold text-default"}>
                  {t("ReceiveBonusFunds")}
                </h4>
                <div className="font-normal text-default">
                  {t("ReceiveBonusFundsDescription")}
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                3
              </span>
              <div className="flex flex-col items-start gap-y-2">
                <h4 className={"mt-1 text-xl font-semibold text-default"}>
                  {t("InviteUpTo3Friends")}
                </h4>
                <div className="font-normal text-default">
                  {t("InviteUpTo3FriendsDescription")}
                </div>
              </div>
            </div>
          </div>
          <Image
            src={"/Image/present-box.webp"}
            alt={"present-box"}
            width={442}
            height={442}
            className={"w-full"}
          />
        </div>
      </Container>
      <StepperForm data={steps} title={t("HowToInviteFriend")} />
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
