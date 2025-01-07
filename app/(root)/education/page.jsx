import React from "react";
import Banner from "../../components/banner";
import Image from "next/image";
import bannerLeft from "../../../public/bannerLeft.svg";
import bannerRight from "../../../public/bannerRight.svg";
import { Container } from "@mui/material";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Education");
  return (
    <div>
      <div className="relative">
        <Banner
          imgDesktop={"/Image/edu-hero.webp"}
          titleBanner={t("forexEducation")}
          subTitleBanner={t("learnForex")}
          buttonName={t("openAccount")}
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
      <section className="my-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 text-default gap-6">
            <div className={`place-content-center`}>
              <div className="py-3">
                <h3 className="font-semibold text-5xl mb-8">
                  {t("title")}
                </h3>
                <span className="py-4 font-normal text-lg">
                  {t("desc1")}
                  <br />
                  <br />
                  {t("desc2")}
                </span>
              </div>
            </div>
            <div className="flex items-center ">
              <Image
                src={"/illustration-rocket.svg"}
                width={265}
                height={250}
                alt={"Image illustration rocket"}
                className="w-full"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Page;
