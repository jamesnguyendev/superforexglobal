import SideBarPolicy from "@/app/components/SideBarPolicy";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("FreeSwapAgreement");
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-28 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8 ">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-5xl font-semibold mb-10">{t("line1")} </h1>
          <div className="flex flex-col gap-6 font-normal">
            <div className="flex flex-col gap-4 mb-4">
              <div className="flex gap-4">
                <h1 className="font-semibold">{t("line2")}</h1>
                {t("line3")}
              </div>
              <div className="flex flex-row gap-4">
                <h1 className="font-semibold ">{t("line4")} </h1>
                <span className="flex-1">{t("line5")}</span>
              </div>
              <div className="font-semibold flex gap-4">
                {t("line6")}
                <span className="font-normal">{t("line7")}</span>
              </div>
              <div className="font-semibold flex gap-4">
                {t("line8")}
                <span className="font-normal">{t("line9")}</span>
              </div>
              <div className="font-semibold flex gap-4">
                {t("line10")}
                <span className="font-normal">{t("line11")}</span>
              </div>
              <div className="font-semibold">{t("line12")}</div>
            </div>
            <div>{t("line13")}</div>
            <div>
              {t("line14")}
              <span className="text-blue-700 underline">{t("line15")}</span>
              {t("line16")}
            </div>
            <div className="flex flex-col mt-7 gap-6">
              <h1 className="font-semibold text-md">{t("line17")}</h1>
              <p>{t("line18")}</p>
              <p>{t("line19")}</p>
              <div className="flex justify-center ">
                <table class="border-collapse border border-slate-500 text-center w-full max-w-lg">
                  <thead>
                    <tr>
                      <th class="border border-slate-600">{t("line20")}</th>
                      <th class="border border-slate-600">{t("line21")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="border border-slate-700">$2,000</td>
                      <td class="border border-slate-700">30 {t("days")}</td>
                    </tr>
                    <tr>
                      <td class="border border-slate-700">$5,000</td>
                      <td class="border border-slate-700">60 {t("days")}</td>
                    </tr>
                    <tr>
                      <td class="border border-slate-700">$10,000</td>
                      <td class="border border-slate-700">90 {t("days")}</td>
                    </tr>
                    <tr>
                      <td class="border border-slate-700">$15,000</td>
                      <td class="border border-slate-700">180 {t("days")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p> {t("line22")}</p>
              <div>{t("line23")}</div>
              <div>{t("line24")}</div>
              <div>{t("line25")}</div> <div>{t("line26")}</div>
              <div>{t("line27")}</div> <div>{t("line28")}</div>{" "}
              <div>{t("line29")}</div>
              <div>{t("line30")}</div> <div>{t("line31")}</div>
              <div>{t("line32")}</div> <div>{t("line33")}</div>{" "}
              <div>{t("line34")}</div> <div>{t("line35")}</div>{" "}
              <h1 className="font-semibold text-xl">{t("line36")}</h1>
              <p className="italic">{t("line37")}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
