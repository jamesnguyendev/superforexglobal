"use client";

import React, { useState } from "react";
import Banner from "../../components/banner";
import Image from "next/image";
import s from "../../../public/s.svg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Card, Container } from "@mui/material";
import Tab1 from "../../components/calculatorTabs/Tab1";
import Tab2 from "../../components/calculatorTabs/Tab2";
import Button from "../../components/buttonCustomize";
import SlideImage from "../../components/slideImage";
import { dataKeenSlider, sfMoney, slides } from "../../data";
import KeenSlider from "../../components/keenSlider";
import AccountForm from "../../components/accountForm";
import mail from "../../../public/mail.svg";
import phone from "../../../public/phoneIcon.svg";
import telegram from "../../../public/telegram.svg";
import Link from "next/link";
import FrequentlyQuestions from "../../components/frequentlyQuestions";
import brokerIcon from "../../../public/brokerIcon.svg";
import brokerIconMobile from "../../../public/brokerIconMobile.svg";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("PartnershipProgram");
  const [tabIndex, setTabIndex] = useState(0);
  const dataQuestions = [
    {
      title: t("canapartner"),
      content: t("succeed"),
    },
    {
      title: t("howopen"),
      content: t("ib"),
    },
    {
      title: t("howexacly"),
      content: t("attheinitial"),
    },
    {
      title: t("iwantto"),
      content: t("assoonas"),
    },
    {
      title: t("howcani"),
      content: t("register"),
    },
  ];
  return (
    <div>
      <Banner
        imgDesktop={"/Image/hero-image-ltr-partnership-program.webp"}
        imgMobile={"/Image/hero-image-mobile-partnership-program.webp"}
        buttonName={t("joinUs")}
        titleBanner={t("ourSupportYourProfit")}
        textBannerColor={true}
        link={"#register"}
        subTitleBanner={t("successIsAvailableForAll")}
      />
      <Container className="my-20 text-default ">
        <h2 className="text-center font-semibold text-[40px]">
          {t("whatIsIntroducingBroker")}
        </h2>
        <p className="m-0 mx-auto mb-20 mt-8 max-w-3xl text-xl font-normal text-default">
          {t("superForexPartnersRewarded")}
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          <div className="flex flex-col gap-3">
            <Image src={s} width={56} height={56} alt="s.svg" />
            <h4 className="text-primary text-[22px] font-semibold">
              {t("upTo100")}
            </h4>
            <h4 className="text-[22px] font-semibold ">
              {t("commissionFromSpread")}
            </h4>
            <p className="text-default">{t("payPartnerUpTo100")}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Image src={s} width={56} height={56} alt="s.svg" />
            <h4 className="text-primary text-[22px] font-semibold">
              {t("upTo10")}
            </h4>
            <h4 className="text-[22px] font-semibold ">
              {t("monthlyInOutCommission")}
            </h4>
            <p className="text-default">
              {t("percentageDifferenceDepositsWithdrawals")}
            </p>
            <br />
            <p className="text-default">{t("receiveCommission3To10")}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Image src={s} width={56} height={56} alt="s.svg" />
            <h4 className="text-primary text-[22px] font-semibold">
              {t("upTo20")}
            </h4>
            <h4 className="text-[22px] font-semibold ">{t("ibReward")}</h4>
            <p className="text-default">
              {t("partnersParticipateRewardProgram")}
            </p>
          </div>
        </div> */}
      </Container>
      {/* <section className="py-20 bg-[#f5f6fa]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="">
              <Image
                src={"/Image/affiliate-scheme.webp"}
                width={474}
                height={505}
                alt="affiliate-scheme.webp"
              />
            </div>
            <div className="flex flex-col gap-4 text-default font-normal">
              <div className="my-3">
                <h2 className="text-[40px] font-semibold pb-7">
                  {t("subIntroducingBroker")}
                </h2>
                <span className="">{t("clientBecomesPartner")}</span>
              </div>
              <div className="my-3">
                <h2 className="text-[40px] font-semibold pb-5">0.1 pips</h2>
                <span>{t("subIbCommission")}</span>
                <br />
                <br />
                <span>{t("manyPartnersSubIbs")}</span>
              </div>
            </div>
          </div>
        </Container>
      </section> */}
      {/* <Container
        className={
          "flex flex-col justify-center items-center max-w-[50.5rem] my-20"
        }
      >
        <span className="text-default font-normal text-[22px] leading-7 mb-7">
          {t("beingPartnerBeneficial")}
          <br />
          <br />
          {t("clientWinsPartnerReceives")}
        </span>
        <div className="border py-6 px-12 w-full rounded-lg font-normal">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList
              className={"flex justify-center items-center gap-3 "}
              selected
            >
              <Tab
                className={`py-1 px-4 cursor-pointer ${
                  tabIndex === 0
                    ? "bg-default text-white outline-none border-0 rounded-full"
                    : "bg-white text-default hover:opacity-90"
                }`}
              >
                Standard Account
              </Tab>
              <Tab
                className={`py-1 px-4 cursor-pointer ${
                  tabIndex === 1
                    ? "bg-default text-white outline-none border-0 rounded-full"
                    : "bg-white text-default hover:opacity-90"
                }`}
              >
                ECN Account
              </Tab>
            </TabList>
            <TabPanel>
              <Tab1 />
            </TabPanel>
            <TabPanel>
              <Tab2 />
            </TabPanel>
          </Tabs>
        </div>
      </Container> */}
      {/* <section className="bg-[#f5f6fa]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="place-content-center">
              <h2 className="text-[40px] font-semibold text-default leading-[48px] pt-3">
                Best Forex Affiliate <br /> Program Africa 2023
              </h2>
              <div className="mt-7 font-normal text-default max-w-[35 rem]">
                {t("tirelessWorkExpandPartnerNetwork")}
              </div>
              <div className="mt-10">
                <Link href={"#register"}>
                  <Button name={"Join us"} background={true} />
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                src={"/Image/award-2023.webp"}
                alt="Image/award-2023.webp"
                width={470}
                height={588}
                className="object-contain"
              />
            </div>
          </div>
        </Container>
      </section> */}
      <div className="mb-20 mt-30">
        <Container className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <Image
              src={brokerIcon}
              alt="brokerIcon"
              width={100}
              height={100}
              className="w-full object-cover hidden lg:block"
            />
            <Image
              src={brokerIconMobile}
              alt="brokerIcon"
              width={100}
              height={100}
              className="w-full object-cover block lg:hidden"
            />
            <div className="text-default">
              <h1 className=" font-semibold text-[45px] leading-[3rem] mb-3  max-lg:text-center">
                {t("forexAffiliate")}
              </h1>
              <p className="text-center py-5">{t("affiliateWork")}</p>
              <p className="text-center">{t("partnershipTypes")}</p>
            </div>
          </div>
        </Container>
      </div>
      {/* <section className="pb-20 pt-10">
        <Container>
          <div className="flex flex-col gap-10">
            <div className="py-3">
              <h2 className="text-center text-default text-[40px] font-semibold leading-[48px]">
                {t("introducingTrainingOffice")}
              </h2>
              <div className="mt-7">
                <div className="flex gap-6 md:flex-row flex-col">
                  <span>{t("reachNewLevelTopPartners")}</span>
                  <span>{t("officeBecomesTrainingCenter")}</span>
                </div>
              </div>
            </div>
            <div className="my-3 w-full m-auto ">
              <SlideImage slides={slides} />
            </div>
          </div>
        </Container>
      </section> */}
      {/* <section className="my-20">
        <Container>
          <div className="flex flex-col gap-28">
            <div className="py-3">
              <h2 className="text-center text-[40px] font-semibold text-default">
                <span>{t("localDepositorFundManager")}</span>
              </h2>
              <div className="mt-7">
                <div className="flex gap-6 md:flex-row flex-col">
                  <span>{t("trustedPersonBankingOperations")}</span>
                  <span>{t("localDepositorsEarnAdditionalIncome")}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden">
                  <Card variant="outlined" className="rounded-lg">
                    <table className="w-full text-center text-default  ">
                      <thead className="">
                        <tr className="border-b">
                          <th scope="col" className="px-6 py-3 font-semibold ">
                            {t("discount")}
                          </th>
                          <th scope="col" className="px-6 py-3 font-semibold ">
                            {t("netCashFlow")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sfMoney.map((item, index) => (
                          <tr key={index} className="font-normal">
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.percent}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                </div>
                <div className="">
                  <h2 className="text-start text-[40px] font-semibold text-default">
                    {t("sfMoney")}
                  </h2>
                  <div className="mt-7 font-normal">
                    {t("acceptFundsReplenishAccount")}
                    <br />
                    <br />
                    {t("continuousActivityNetCashFlow")}
                    <br />
                    <br />
                    {t("exchangeVoucherLocalCurrency")}
                  </div>
                </div>
              </div>
            </div>
            <KeenSlider data={dataKeenSlider} />
          </div>
        </Container>
      </section> */}
      {/* <section className="bg-[#f5f6fa] my-20 py-20">
        <Container>
          <AccountForm title={t("registerStartSuccess")} background={true} />
        </Container>
      </section> */}
      <section className="my-20">
        <Container>
          <div className="flex flex-col gap-12 max-lg:justify-center items-center">
            <div className="py-3">
              <h2 className="text-center text-4xl font-semibold text-default">
                {t("partnershipDepartmentContacts")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-9 *:flex *:gap-4 text-default text-lg font-semibold *:place-items-center">
              <Link
                href="mailto:partners@superforex.com"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <Image src={mail} width={24} height={24} alt={mail} />
                info@superforex.global
              </Link>
              <Link
                href="https://wa.me/+359888997126"
                rel="nofollow noopener noreferrer"
                target="_blank"
              >
                <Image src={phone} width={24} height={24} alt={phone} />
                +87 2888896968
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="my-20 py-20 bg-[#f5f6fa]">
        <Container>
          <FrequentlyQuestions
            title={t("frequentlyAskedQuestions")}
            data={dataQuestions}
          />
        </Container>
      </section>
    </div>
  );
};

export default Page;
