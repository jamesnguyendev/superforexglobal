"use client";

import React, { useEffect, useState } from "react";
import Banner from "../../components/banner";
import Image from "next/image";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import cup from "../../../public/cup.svg";
import calendar from "../../../public/calendar.svg";
import Button from "../../components/buttonCustomize";
import {
  affiliatePrograms,
  businessPartnerCarts,
  dataPartnerConst,
  frequentlyAskedQuestionsNd,
} from "../../data";
import brokerIcon from "../../../public/brokerIcon.svg";
import brokerIconMobile from "../../../public/brokerIconMobile.svg";
import FrequentlyQuestions from "../../components/frequentlyQuestions";
import AccountForm from "../../components/accountForm";

import { useTranslations } from "next-intl";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="lg:w-[65%] w-full text-default text-lg font-normal overflow-y-hidden"
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

const Page = () => {
  const t = useTranslations("PartnersContest");
  const [value, setValue] = useState(0);
  const [mounted, setMounted] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Set `mounted` to true once the component has mounted on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render nothing on the server to prevent mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div>
      <Banner
        titleBanner={t("goldenChallenge")}
        subTitleBanner={t("becomePartnerWinGold")}
        buttonName={t("becomePartner")}
        imgDesktop={"/Image/hero-desktop-benefit.webp"}
        imgMobile={"/Image/hero-mobile-benefit.webp"}
      />
      <section className="relative flex items-center text-default">
        <Container>
          <div className="md:absolute md:mt-[105px]">
            <Image
              src={"/Image/golden-bar.webp"}
              alt="golden-bar.webp"
              width={613}
              height={436}
              className="w-full"
            />
          </div>
          <div className="flex relative z-10 items-end flex-col md:mt-[140px] mb-[220px]">
            <div className="grid max-sm:grid-cols-1 grid-cols-[auto_1fr] *:place-content-center md:*:place-content-start gap-16 items-center border mb-6 p-10 rounded-lg">
              <div className="flex items-center">
                <Image
                  src={cup}
                  alt="cup"
                  width={58}
                  height={58}
                  className="me-4"
                />
                <div className="">
                  <h4 className="font-normal">{t("win")}</h4>
                  <h3 className="mt-1 font-semibold text-[22px]">
                    {t("goldBullion")}
                  </h3>
                </div>
              </div>
              <div className="flex items-center">
                <Image
                  src={calendar}
                  alt="cup"
                  width={58}
                  height={58}
                  className="me-4"
                />
                <div className="">
                  <h4 className="font-normal">{t("term")}</h4>
                  <h3 className="mt-1 font-semibold text-[22px]">
                    {t("termDates")}
                  </h3>
                </div>
              </div>
            </div>
            <span className="max-w-[650px] text-[18px]">
              <b>{t("earnMoney")}</b>
              {t("competePartners")}
            </span>
          </div>
        </Container>
      </section>
      <div className="relative bg-[rgb(245,244,249)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 items-center text-start">
            <div className="text-default max-lg:text-center py-20">
              <h2 className="text-[46px] leading-[60px] mt-7 font-semibold">
                {t("top10Leaders")}
              </h2>
              <h3 className="mt-4 text-[22px] leading-[28px] font-normal">
                {t("bestIB")}
              </h3>
            </div>
            <div className="">
              <div className="md:absolute md:-translate-y-1/2 bg-white py-10 px-14 rounded-lg shadow-2xl">
                <table className="table-fixed w-full text-center">
                  <thead>
                    <tr className="my-1 text-default/65 ">
                      <th>
                        <h6 className="font-semibold text-[14px] ">
                          {t("place")}
                        </h6>
                      </th>
                      <th>
                        <h6 className="font-semibold text-[14px]">
                          {t("country")}
                        </h6>
                      </th>
                      <th>
                        <h6 className="font-semibold text-[14px]">
                          {t("accountNumber")}
                        </h6>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataPartnerConst.map((item, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td colSpan="3" className="py-1.5"></td>
                        </tr>
                        <tr className="text-default pt-32 ">
                          <td className="font-semibold">{index + 1}</td>
                          <td className="font-normal uppercase">
                            <span className="flex justify-center items-center gap-3">
                              <Image
                                src={item.icon}
                                height={20}
                                width={20}
                                alt={item.icon}
                              />
                              {item.name}
                            </span>
                          </td>
                          <td className="font-normal">{item.accountNumber}</td>
                        </tr>
                        <tr>
                          <td colSpan="3" className="py-1.5 border-b"></td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid lg:grid-cols-[1fr_auto] gap-[100px] pt-[250px] pb-[90px] place-items-center">
          <div className="grid lg:grid-cols-[1fr_1fr] text-start gap-[100px] items-start max-lg:text-center">
            <div className="">
              <h3 className="text-primary font-semibold text-[22px] my-4">
                {t("howToParticipate")}
              </h3>
              <span className="text-default my-4 text-sm font-[500]">
                {t("autoRun")}
              </span>
            </div>
            <div className="">
              <h3 className="text-primary font-semibold text-[22px] my-4">
                {t("notPartnerYet")}
              </h3>
              <span className="text-default my-4 text-sm font-[500]">
                {t("setUpAccount")}
              </span>
            </div>
          </div>
          <Button name={"Become a Partner"} background={true} />
        </div>
      </Container>
      <div className="relative bg-[rgb(245,244,249)] my-20">
        <Container className="px-16 py-32 flex *:justify-center">
          <div className="flex flex-col lg:flex-row bg-[rgb(245,244,249)] flex-grow items-center lg:h-[340px]">
            <div className="lg:border-r max-lg:border-b-2 border-slate-200 py-10 pe-7">
              <Tabs
                orientation="vertical"
                onChange={handleChange}
                value={value}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Tab
                  label={t("openAccount")}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#3ECF8E",
                    },
                  }}
                />
                <Tab
                  label={t("partnershipBasics")}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#3ECF8E", // màu cho trạng thái selected
                    },
                  }}
                />
                <Tab
                  label={t("winCompetition")}
                  disableRipple
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    "&.Mui-selected": {
                      color: "#3ECF8E", // màu cho trạng thái selected
                    },
                  }}
                />
              </Tabs>
            </div>

            <TabPanel value={value} index={0}>
              <span className="text-[18px] pt-16">{t("navigateCabinet")}</span>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <span className="text-[18px]">
                {t("findClients")}
                <br />
                <br />
                {t("affiliateCode")}
              </span>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <span className="text-lg">{t("contestDuration")}</span>
            </TabPanel>
          </div>
        </Container>
      </div>

      {/* <div className="mb-20 mt-30">
        <Container>
          <h2 className="text-default text-4xl text-center">
            <span className="">{t("bestAffiliateProgram")}</span>
          </h2>
          <div className="py-16"> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {affiliatePrograms.map((item, index) => (
                <div className="text-center text-default" key={index}>
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={100}
                    height={100}
                    className="w-full"
                  />
                  <h3 className="mb-6 font-semibold text-2xl">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div> */}

      <div className="my-48">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 text-default">
            <div className="max-lg:text-center lg:place-content-center">
              <h3 className="text-3xl font-normal">{t("notSure")}</h3>
              <p className="py-7 text-[18px]">{t("easyEarn")}</p>
              <Button background={true} name={t("becomePartner")} />
            </div>
            <div className="flex flex-col max-lg:mt-24 gap-12">
              {businessPartnerCarts.map((item, index) => (
                <div className="flex gap-12" key={index}>
                  <Image
                    src={item.icon}
                    alt={item.icon}
                    width={120}
                    height={120}
                  />
                  <div className="flex flex-col gap-7">
                    <h3 className="font-semibold text-[1rem] leading-6">
                      {item.title}
                    </h3>
                    <p className="">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="my-20">
        <Container>
          {/* <span className="bg-slate-400">d</span> */}
          <div className="flex justify-center mb-20">
            <span className="border-t px-52"></span>
          </div>
          <FrequentlyQuestions
            title={t("faq")}
            data={frequentlyAskedQuestionsNd}
          />
        </Container>
      </div>

      <section className="bg-[rgb(245,244,249)]">
        <Container className={"py-20"}>
          <AccountForm
            title={t("registration")}
            option={false}
            background={true}
          />
        </Container>
      </section>
    </div>
  );
};

export default Page;
