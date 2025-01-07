import React from "react";
import scheme from "../../../public/scheme.svg";
import Image from "next/image";
import { Container } from "@mui/material";
import Button from "../../components/buttonCustomize";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("AffiliateLinks");
  return (
    <div>
      <section className="bg-[rgb(245,244,249)]">
        <h1 className="text-center text-default font-semibold text-[2.8rem] leading-4 py-16">
          {t("affiliateLinks")}
        </h1>
      </section>
      <section className="my-14 text-default">
        <Container>
          <h2 className="text-3xl font-semibold">
            {t("whatIsAffiliateLink")}
          </h2>
          <p className="font-normal py-6">
            {t("affiliateLinkDescription")}
          </p>
          <div className="flex justify-center my-5">
            <Image
              src={scheme}
              width={800}
              height={400}
              alt={scheme}
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="my-14 text-default">
        <Container>
          <h2 className="text-3xl font-semibold">{t("howToUse")}</h2>
          <p className="font-normal py-9">
            {t("howToUseDescription")}
          </p>
          <h2 className="text-3xl font-semibold">{t("customAffiliateLink")}</h2>
          <p className="font-normal py-9">
            {t("customAffiliateLinkDescription1")} 
            <br />
            {t("customAffiliateLinkDescription2")}
            <br />
            {t("customAffiliateLinkDescription3")}
          </p>
          <Button name={t("partnersCabinet")} background={true} />
        </Container>
      </section>

      <Container className="my-32 text-default ">
        <div class="flex flex-col lg:space-y-6 w-full lg:w-1/2 mx-auto gap-3">
          <div class="lg:flex lg:space-x-4">
            <input
              type="text"
              class="bg-input border-0 outline-none ps-3 py-1 w-full rounded focus:ring-2 ring-primary max-lg:mb-3"
              defaultValue={"https://superforex.com/"}
            />
            <input
              type="text"
              class="bg-input border-0 outline-none ps-3 py-1 lg:w-[50%] w-full rounded focus:ring-2 ring-primary"
              placeholder={t("yourAffiliateCode")}
            />
          </div>

          <div class="w-full">
            <input
              type="text"
              class="bg-input border-0 outline-none ps-3 py-1 w-full rounded focus:ring-2 ring-primary"
              placeholder={t("fullWidthInput")}
              defaultValue={"https://superforex.com/"}
            />
          </div>
          <div>
            <Button background={true} name={t("copyLink")} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;
