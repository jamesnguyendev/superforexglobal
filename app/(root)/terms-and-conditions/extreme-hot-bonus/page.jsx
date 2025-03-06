import SideBarPolicy from "@/app/components/SideBarPolicy";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("HotBonusAgreement");
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-28 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8 ">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <div className="flex flex-col text-default gap-4 mb-24">
            <h1 className="font-semibold text-5xl pb-7">{t("line0")}</h1>
            <h1 className="font-semibold text-md">{t("line1")}</h1>
            <div>
              <span className="font-semibold text-md">{t("line2")}</span>{" "}
              01/01/2025 - 31/03/2025 (GMT + 3)
            </div>
            <div>
              <span className="font-semibold text-md">{t("line3")}</span>{" "}
              <span className="text-red-600">{t("line4")}</span>
            </div>
            <div>
              <span className="font-semibold text-md">{t("line65")}</span>{" "}
              {t("line66")}
            </div>
            <div className="font-semibold text-md">{t("line7")}</div>
            <div>{t("line8")}</div>
            <div>{t("line9")}</div>
            <div>
              {t("line10")}
              <span className="text-black font-semibold "> L=(D*C)*R</span>
            </div>
            <div>{t("line11")}</div>
            <div>{t("line12")}</div>
            <div>{t("line13")}</div>
            <div>{t("line14")}</div>
            <div>{t("line15")}</div>
            <div>
              {t("line16")} {t("line17")}, {t("line18")}, {t("line19")}
            </div>
            <div>{t("line20")}</div>
            <div>{t("line21")}</div>
            <div>{t("line22")}</div>
            <div>{t("line23")}</div>
            <div>{t("line24")}</div>
            <div>{t("line5")}</div>
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-lg mt-4">{t("line25")}</h1>
              <div>
                <span className="font-semibold"> {t("line26")}</span>{" "}
                {t("line27")}
              </div>
              <div>
                <span className="font-semibold">{t("line28")}</span>{" "}
                {t("line29")}
              </div>
              <div>
                <span className="font-semibold"> {t("line30")}</span>
                {t("line31")}
              </div>
              <div>
                <span className="font-semibold">{t("line32")}</span>{" "}
                {t("line33")}
              </div>{" "}
              <div>
                <span className="font-semibold"> {t("line34")}</span>{" "}
                {t("line35")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line36")}</span>{" "}
                {t("line37")}
              </div>
              <div>
                <span className="font-semibold"> {t("line38")}</span>
                {t("line39")}
              </div>
              <div>
                <span className="font-semibold"> {t("line40")}</span>
                {t("line41")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line42")}</span>
                {t("line43")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line44")}</span>{" "}
                {t("line45")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line46")}</span>
                {t("line47")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line48")}</span>{" "}
                {t("line49")}
              </div>
              <div>
                <span className="font-semibold">{t("line50")}</span>{" "}
                {t("line51")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line52")}</span>
                {t("line53")}
              </div>
              <div>
                <span className="font-semibold"> {t("line55")}</span>
                {t("line56")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line57")}</span>
                {t("line58")}
              </div>{" "}
              <div>
                <span className="font-semibold"> {t("line59")}</span>{" "}
                {t("line60")}
              </div>{" "}
              <div>
                <span className="font-semibold">{t("line61")}</span>{" "}
                {t("line62")}
              </div>{" "}
              <h1 className="font-semibold text-lg my-2">{t("line63")}</h1>{" "}
              <p className="italic">{t("line64")}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
