"use client";

import React from "react";
import Banner from "../../components/banner";
import Image from "next/image";
import bannerLeft from "../../../public/bannerLeft.svg";
import bannerRight from "../../../public/bannerRight.svg";
import { Container, Grid2 } from "@mui/material";
import BenefitCart from "../../components/benefitCart";
import { dataAdvantages } from "../../data";
import styled from "styled-components";
import GoldenCard from "../../components/goldenCard";
import AccountForm from "../../components/accountForm";

import { useTranslations } from "next-intl";

const StyledStack = styled.div`
  position: relative;
  color: white;
  background-image: url("https://ik.imagekit.io/3idyffxxb/New%20Folder/cerulean-indigo.svg?updatedAt=1735644875953");
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    top: -150px;
    height: 320px;
    background: white;
    transform: skewY(-6deg);
    z-index: 1;
  }
`;
const Page = () => {
  const t = useTranslations("SuperIbBonus");
  return (
    <div>
      <div className="relative">
        <Banner
          titleBanner={t("superIbBonus")}
          subTitleBanner={t("attractNewClients")}
          buttonName={t("becomePartner")}
          imgDesktop={"/Image/super-ib-bonus-desktop.webp"}
          imgMobile={"/Image/super-ib-bonus.webp"}
        />
        <div className="absolute bottom-0 w-full hidden md:block">
          <div className="grid grid-cols-2">
            <Image
              src={bannerLeft}
              alt="bannerLeft"
              width={90}
              height={90}
              className="w-full"
            />
            <Image
              src={bannerRight}
              alt="bannerLeft"
              width={120}
              height={120}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <section className="my-16 text-default">
        <Container>
          <h2 className="text-3xl font-normal">{t("aboutSuperIbBonus")}</h2>
          <p className="mt-5">{t("superIbBonusDescription1")}</p>
          <br />
          <p>{t("superIbBonusDescription2")}</p>
        </Container>
      </section>
      <section className="mb-20">
        <BenefitCart
          title={t("advantagesOfBonus")}
          data={dataAdvantages}
          option={true}
        />
      </section>
      <section>
        <StyledStack>
          <Container
            maxWidth="lg"
            className="relative"
            style={{ zIndex: 2, paddingBottom: 5 }}
          >
            <h3 className="text-default text-4xl font-normal mb-16">
              {t("howDoesItWork")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <GoldenCard
                step={t("step1")}
                name={t("registerPartnerAccount")}
                text={t("step1Description")}
                backGround={"pattern-1.svg"}
                bgColor={"rgb(85, 160, 181)"}
                icon={"personPlusWhite.svg"}
              />
              <GoldenCard
                step={t("step2")}
                name={t("attractNewReferrals")}
                text={t("step2Description")}
                backGround={"pattern-2.svg"}
                bgColor={"rgb(70, 139, 144)"}
                icon={"element.svg"}
              />
              <GoldenCard
                step={t("step3")}
                name={t("orderBonus")}
                text={t("step3Description")}
                backGround={"pattern-3.svg"}
                bgColor={"rgb(35, 120, 115)"}
                icon={"editPencil.svg"}
              />
              <GoldenCard
                step={t("step4")}
                name={t("receiveIncreasedCommission")}
                text={t("step4Description")}
                backGround={"pattern-1.svg"}
                bgColor={"rgb(17, 92, 88)"}
                icon={"moneyBack.svg"}
              />
            </div>
          </Container>
          <div className="py-32 text-default">
            <h3 className="text-center text-white text-lg py-5">
              {t("readyToBecomePartner")}
            </h3>
            <AccountForm background={true} />
          </div>
        </StyledStack>
      </section>
    </div>
  );
};

export default Page;
