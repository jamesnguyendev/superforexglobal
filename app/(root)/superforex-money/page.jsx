import BannerSvg from "../../components/bannerSvg";
import SlideImage from "../../components/slideImage";
import { slidesBenefit } from "../../data";
import { Container } from "@mui/material";
import React from "react";
import BenefitCart from "../../components/benefitCart";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("SuperforexMoney");
  const benefitCardData = [
    {
      icon: "/bagMoney.svg",
      content: t("content1"),
    },
    {
      icon: "/lock.svg",
      content: t("content2"),
    },
    {
      icon: "/moneyArrow.svg",
      content: t("content3"),
    },
    {
      icon: "/visaCard.svg",
      content: t("content4"),
    },
  ];
  return (
    <div>
      <BannerSvg
        title={t("superforexMoney")}
        subTitle={t("discountOnDeposit")}
      />
      <Container className="my-12 text-default">
        <h2 className="text-3xl mb-6 font-normal ">
          {t("aboutSuperforexMoney")}
        </h2>
        <p className="my-4">{t("superforexMoneyDescription1")}</p>
        <p className="my-4">{t("superforexMoneyDescription2")}</p>
        <p className="my-4 font-semibold">{t("superforexMoneyDescription3")}</p>
      </Container>
      <Container>
        <SlideImage slides={slidesBenefit} nav={true} />
      </Container>
      <BenefitCart
        data={benefitCardData}
        title={t("benefitsOfUsingSuperforexMoney")}
      />
      <Container className="my-12 text-default font-normal">
        <h2 className="text-[32px] mb-6">{t("superforexMoneyCalculation")}</h2>
        <p className="my-5">{t("calculationExample")}</p>
        <p className="my-5">{t("furtherQuestions")}</p>
      </Container>
      <section className="my-24">
        <Container>
          <iframe
            className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mx-auto max-w-3xl"
            width="853"
            height="480"
            src="https://www.youtube.com/embed/HG8gitfIH-s"
            title={t("howToActivateVoucher")}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Container>
      </section>
    </div>
  );
};

export default Page;
