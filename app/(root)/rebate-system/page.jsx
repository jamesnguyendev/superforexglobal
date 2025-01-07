"use client";

import Banner from "../../components/banner";
import Image from "next/image";
import bannerLeft from "../../../public/bannerLeft.svg";
import bannerRight from "../../../public/bannerRight.svg";
import React from "react";
import { Container } from "@mui/material";
import Button from "../../components/buttonCustomize";
import styled from "styled-components";

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
  const t = useTranslations("RebateSystem");

  return (
    <div className="text-default font-normal">
      <div className="relative">
        <Banner
          imgDesktop={"/Image/rebate-hero-desktop.webp"}
          imgMobile={"/Image/rebate-hero-mobile.webp"}
          titleBanner={t("rebateSystem")}
          subTitleBanner={t("moreTradesMoreCashback")}
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
      <Container className="mt-16 lg:mb-32 mb-36 text-lg z-20">
        <p className="mb-5">
          {t("rebateSystemDescription")} 
          <br />
          <br /> 
          {t("rebateSystemDescription1")}
          <br /> 
          {t("rebateSystemDescription2")}
          <br />
          <br /> 
          {t("rebateSystemDescription3")}
        </p>
        <h2 className="text-2xl">{t("howDoesItWork")}</h2>
        <p className="my-7">
          {t("howDoesItWorkDescription")}
        </p>
        <div className="flex justify-center items-center">
          <Image
            src={"/Image/scheme.webp"}
            alt="schema"
            width={746}
            height={205}
            className="object-contain max-w-full"
          />
        </div>
        <h2 className="text-2xl my-4">{t("settingItUp")}</h2>
        <p className="py-5">
          {t("settingItUpDescription")}
        </p>
        <Button background={true} name={t("registerAsPartner")} />
      </Container>
      <StyledStack>
        <Container
          maxWidth="lg"
          className="relative"
          style={{ zIndex: 0, paddingBottom: 5 }}
        >
          <p className="p-44"></p>
        </Container>
      </StyledStack>
    </div>
  );
};

export default Page;
