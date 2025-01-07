import AccountForm from "../../components/accountForm";
import { Container } from "@mui/material";
import Image from "next/image";
import React from "react";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("PartnerWebsites");
  return (
    <div>
      <section className="bg-[rgb(245,244,249)]">
        <div className="py-14 text-center text-default">
          <h1 className="text-5xl font-semibold mb-4">{t("readyWebsite")}</h1>
          <h4 className="font-normal text-2xl">
            {t("makeBusiness")}
          </h4>
        </div>
      </section>
      <Container className="text-default">
        <h1 className="text-4xl font-semibold mt-9 mb-5">
          {t("aboutReadyWebsites")}
        </h1>
        <p className="text-[15px] leading-5">
          {t("readyWebsitesDescription")}
        </p>
        <div className="my-20 grid grid-cols-1 md:grid-cols-3 items-center justify-center lg:mx-20">
          <div className="z-0">
            <Image
              src={"/Image/ib-1.webp"}
              alt="ib-1.webp"
              width={350}
              height={600}
              className="hidden md:block w-full shadow-2xl rounded-lg custom-transform-left"
            />
          </div>
          <div className="z-40">
            <Image
              src={"/Image/ib-2.webp"}
              alt="ib-2.webp"
              width={350}
              height={600}
              className="w-full shadow-2xl rounded-lg"
            />
          </div>
          <div className="z-0">
            <Image
              src={"/Image/ib-3.webp"}
              alt="ib-3.webp"
              width={350}
              height={600}
              className="hidden md:block w-full shadow-2xl rounded-lg custom-transform-right"
            />
          </div>
        </div>
      </Container>
      <section className="my-32">
        <AccountForm
          option={false}
          privacy={false}
          site={true}
          buttonName={t("submit")}
        />
      </section>
    </div>
  );
};

export default Page;
