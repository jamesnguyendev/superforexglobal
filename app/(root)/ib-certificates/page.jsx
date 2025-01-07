import { Container } from "@mui/material";
import React from "react";
import personPlus from "../../../public/personPlus.svg";
import downloadUpload from "../../../public/downloadUpload.svg";
import giftBonus from "../../../public/giftBonus.svg";
import hatStudent from "../../../public/hat.svg";
import Image from "next/image";
import BannerSvg from "../../components/bannerSvg";

import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("IbCertificates");
  return (
    <div>
      <BannerSvg title={t("ibCertificates")} />
      <Container className="my-12 px-3">
        <h2 className="text-3xl text-default mb-6">{t("aboutCertificates")}</h2>
        <p className="py-5">{t("certificatesDescription")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-10">
          <div className="flex flex-col justify-center items-center overflow-hidden h-full bg-white rounded-lg shadow-2xl">
            <div className="grid grid-cols-[auto_1fr] gap-6 h-w-full items-center py-3 px-6 ">
              <Image src={personPlus} width={84} height={84} alt="personPlus" />
              <h4 className="text-default font-normal text-lg">
                {t("rightToRegister")}
              </h4>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center overflow-hidden h-full bg-white rounded-lg shadow-xl">
            <div className="grid grid-cols-[auto_1fr] gap-6 h-w-full items-center py-3 px-6">
              <Image
                src={downloadUpload}
                width={84}
                height={84}
                alt="downloadUpload"
              />
              <h4 className="text-default font-normal text-lg">
                {t("rightToDepositWithdraw")}
              </h4>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center overflow-hidden h-full bg-white rounded-lg shadow-xl">
            <div className="grid grid-cols-[auto_1fr] gap-6 h-w-full items-center py-3 px-6">
              <Image src={giftBonus} width={84} height={84} alt="giftBonus" />
              <h4 className="text-default font-normal text-lg">
                {t("rightToIssueCoupons")}
              </h4>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center overflow-hidden h-full bg-white rounded-lg shadow-xl">
            <div className="grid grid-cols-[auto_1fr] gap-6 h-w-full items-center py-3 px-6">
              <Image src={hatStudent} width={84} height={84} alt="giftBonus" />
              <h4>{t("rightToOrganizeCourses")}</h4>
            </div>
          </div>
        </div>
        <p className="py-5">{t("requestCertificate")}</p>
      </Container>
    </div>
  );
};

export default Page;
