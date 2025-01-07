import { Container } from "@mui/material";
import React from "react";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Merchandise");

  return (
    <div>
      <section className="bg-[rgb(245,244,249)]">
        <h1 className="text-center text-default font-semibold text-[2.8rem] leading-4 py-16">
          {t("merchandise")}
        </h1>
      </section>
      <Container className="text-default">
        <h1 className="text-4xl font-semibold mt-9 mb-5">{t("title")}</h1>
        <p className="text-[15px] leading-5">{t("desc1")}</p>
        <p className="py-5 text-[15px] leading-5">{t("desc2")}</p>
      </Container>
    </div>
  );
};

export default Page;
