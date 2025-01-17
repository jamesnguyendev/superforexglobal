"use client";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import {
  Container,
  Stack,
  Typography,
  Card,
  Divider,
  Modal,
  Box,
} from "@mui/material";

import AccountForm from "../../components/accountForm";

import Banner from "./banner";

import { useTranslations } from "next-intl";

export default function CryptoMania() {
  const t = useTranslations("CryptoMania");

  return (
    <>
      <Banner
        imgDesktop={"/Image/cryptomania-desktop.webp"}
        imgMobile={"/Image/cryptomania-mobile.webp"}
        titleBanner={"CryptoMania"}
        subTitleBanner={t("subTitle")}
        buttonName={t("joinBtn")}
        link={"https://my.superforexs.com/register"}
        blank
        textBannerColor
      />

      <Container
        maxWidth="lg"
        className="my-28 text-default flex flex-col relative text-center"
        style={{ zIndex: 2 }}
      >
        <p className="font-bold text-5xl">{t("about")}</p>
        <br />
        <br />
        <p>{t("aboutDesc")}</p>
        <br />
        <br />

        <div className="rounded-lg shadow-lg bg-[#f8fafc] border-2 border-[#e0e3eb] relative self-center text-center p-5">
          <p className="font-bold  text-lg">{t("duration")}</p>
          <p>{t("durationRound")}</p>
        </div>
        <br />
        <br />
        <p className="font-bold">{t("superRoundEnd")}</p>
      </Container>

      <Container
        maxWidth="lg"
        className="my-28 text-default flex flex-col relative text-center"
        style={{ zIndex: 2 }}
      >
        <p className="font-bold text-5xl">{t("prizes")}</p>
        <br />
        <br />
        <div className="flex md:flex-row flex-col md:justify-around items-center gap-10">
          <div className="rounded-lg shadow-lg md:w-96 w-full bg-[#f8fafc] border-2 border-[#e0e3eb] text-center p-5">
            <p className="font-bold  text-lg">$100</p>
            <p>Round Win</p>
          </div>
          <div className="rounded-lg shadow-lg md:w-96 w-full bg-[#f8fafc] border-2 border-[#e0e3eb] text-center p-5">
            <p className="font-bold  text-lg">$1000</p>
            <p>SuperRound Win</p>
          </div>
        </div>
        <br />
        <br />
        <p>{t("prizeDesc")}</p>
        <br />
        <br />
      </Container>

      <Container
        maxWidth="lg"
        className="my-28 text-default flex flex-col relative"
        style={{ zIndex: 2 }}
      >
        <p className="font-bold text-5xl">{t("howToStart")}</p>
        <br />
        <br />
        <p>{t("howToStartDesc")}</p>
        <br />
        <br />
        <div className="pl-3 border-l-2 border-[#f59e0b]">
          <p className="text-[#f59e0b] text-lg font-bold">{t("note")}</p>
          <p className="text-sm">{t("noteDesc")}</p>
        </div>
      </Container>

      <Container
        maxWidth="lg"
        className="pb-16 pt-16 relative text-default"
        style={{ zIndex: 2 }}
      >
        <AccountForm
          data={["Standard"]}
          showText={false}
          option={true}
          background
        />
      </Container>
    </>
  );
}
