import { Container } from "@mui/material";
import React from "react";
import StepperForm from "../../components/stepperForm";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Banners");
  const stepsUse = [
    {
      title: t("gradready"),
      content: t("youcandown"),
      icon: "speaker.svg",
      button: false,
    },
    {
      title: t("findsupeforex"),
      content: t("youcanfind"),
      icon: "desktopClick.svg",
      button: false,
    },
    {
      title: t("linkpartner"),
      content: t("clickon"),
      icon: "linkGift.svg",
      button: false,
    },
  ];
  return (
    <div>
      <section className="bg-[rgb(245,244,249)]">
        <h1 className="text-center text-default font-semibold text-[2.8rem] leading-10 py-16">
          {t("bannersLogosAvatars")}
        </h1>
      </section>
      <Container className="text-default">
        <p className="py-8">{t("bannersDescription")}</p>

        <StepperForm title={t("howToUse")} data={stepsUse} />
      </Container>
    </div>
  );
};

export default Page;
