import { Container } from "@mui/material";
import React from "react";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("PartnershipEarnings");
  
  return (
    <div>
      <section className="bg-[rgb(245,244,249)]">
        <h1 className="text-center text-default font-semibold text-[2.8rem] leading-4 py-16">
          {t("title")}
        </h1>
      </section>
      <Container className="text-default">
        <h2 className="pt-10 font-normal text-2xl">
          {t("paragraph1")}
        </h2>
        <p className="py-10">
          {t("paragraph2")}
        </p>
      </Container>
    </div>
  );
};

export default Page;
