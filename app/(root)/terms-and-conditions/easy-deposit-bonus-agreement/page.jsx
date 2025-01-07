import SideBarPolicy from "@/app/components/SideBarPolicy";
import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("GiveAway");
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-16 text-default max-lg:px-7">
        <div className="max-lg:order-2 lg:border-r lg:border-dashed pe-5 max-lg:pt-8 ">
          <SideBarPolicy />
        </div>
        <div className="lg:col-span-2 lg:ps-7">
          <h1 className="text-5xl font-semibold mb-10">{t("giveaway")}</h1>
          <div className="flex flex-col gap-6 font-normal">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <h1 className="font-semibold">{t("line1")}</h1>
                {t("line2")}
              </div>
              <div className="font-semibold flex gap-4">
                {t("line3")}
                <span className="font-normal text-red-600">{t("line4")}</span>
              </div>
              <div className="font-semibold flex gap-4">
                {t("line5")}
                <span className="font-normal">90 {t("days")}</span>
              </div>
            </div>{" "}
            <div className="font-semibold">{t("line6")}</div>
            <div>
              {t("line7")}
              <span className="text-blue-600 underline"> {t("line8")}</span> từ
              {t("line9")}
            </div>
            <div>{t("line10")}</div>
            <div>{t("line11")}</div>
            <div>{t("line12")}</div>
            <div>{t("line13")}</div>
            <div className="flex flex-col mt-7 gap-6">
              <h1 className="font-semibold text-md">{t("line14")}</h1>
              <p>{t("line15")}</p>
              <p>{t("line16")}</p>
              <p>{t("line17")}</p>
              <div>{t("line18")}</div>
              <div>{t("line19")}</div> <div>{t("line20")}</div>{" "}
              <div>{t("line21")}</div> <div>{t("line22")}</div>{" "}
              <div>{t("line23")}</div> <div>{t("line24")}</div>
              <div>{t("line25")}</div> <div>{t("line26")}</div>
              <div>{t("line27")}</div> <div>{t("line28")}</div>{" "}
              <div>{t("line29")}</div> <div>{t("line30")}</div>{" "}
              <div>{t("line31")}</div> <div>{t("line32")}</div>{" "}
              <h1 className="font-semibold text-xl">{t("line33")}</h1>
              <div className="">{t("line34")}</div>
              <div className="">{t("line35")}</div>
              <div className="">{t("line36")}</div>
              <h1 className="font-semibold text-xl">{t("line37")}</h1>
              <p className="italic">{t("line38")}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
