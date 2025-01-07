import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";
import { Container } from "@mui/material";
import Image from "next/image";
import ButtonCustomize from "./components/buttonCustomize";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="relative">
      <Header />
      <div className="flex bg-custom-not-found bg-cover bg-center text-white">
        <Container maxWidth="lg">
          <div className="flex w-full pt-64 pb-28">
            <div className="flex flex-col gap-4">
              <span className="text-3xl">404</span>
              <span>{t("oops")}</span>
              <span>{t("perphaps")}</span>
              <div className="pt-12">{t("weadviseyou")}</div>
              <div className="flex gap-6">
                <Link href={"/"}>
                  <ButtonCustomize name={t("homepage")} background={true} />
                </Link>
                <Link href={"/bonuses-chart"}>
                  <ButtonCustomize name={t("ourbonuses")} background={true} />
                </Link>
                <Link href={"/bonuses-chart"}>
                  <ButtonCustomize name={t("contactinfo")} background={true} />
                </Link>
              </div>
              <div className="pt-12">{t("alsoyoucan")}</div>
              <div className="flex gap-6">
                <Link href={"https://my.superforexs.com"} target="_blank">
                  <ButtonCustomize name={t("openaccount")} background={true} />
                </Link>
                <Link href={"https://my.superforexs.com"} target="_blank">
                  <ButtonCustomize
                    name={t("clientscabinets")}
                    background={true}
                  />
                </Link>
              </div>
            </div>
            <div className="ps-20 hidden lg:block">
              <img
                src="https://ik.imagekit.io/kn40ppx9b/Superforex/laptop.svg?updatedAt=1733817027304"
                alt=""
                className="w-[500px]"
              />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
