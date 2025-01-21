import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const SideBarPolicy = () => {
  const t = useTranslations("Policy");
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col font-semibold *:opacity-70 gap-3">
        <Link
          href={"/terms-and-conditions/public-offer-agreement"}
          className="hover:opacity-100"
        >
          {t("line1")}
        </Link>
        <Link
          href={"/terms-and-conditions/partnership-agreement"}
          className="hover:opacity-100"
        >
          {t("line2")}
        </Link>
        <Link
          href={"/terms-and-conditions/mla-master-agreement"}
          className="hover:opacity-100"
        >
          {t("line3")}
        </Link>
        <Link
          href={"/terms-and-conditions/local-depositor-service-agreement"}
          className="hover:opacity-100"
        >
          {t("line4")}
        </Link>
      </div>
      <span className="font-bold">{t("line5")}</span>
      <div className="*:opacity-70 ps-5 flex flex-col font-semibold gap-3">
        <Link
          href={"/terms-and-conditions/extreme-hot-bonus"}
          className="hover:opacity-100"
        >
          {t("line6")}
        </Link>
        <Link
          href={"/terms-and-conditions/energy-bonus-agreement"}
          className="hover:opacity-100"
        >
          {t("line7")}
        </Link>
        <Link
          href={"/terms-and-conditions/easy-deposit-bonus-agreement"}
          className="hover:opacity-100"
        >
          {t("line8")}
        </Link>
        {/* <Link
          href={"/terms-and-conditions/marketing-bonus-agreement"}
          className="hover:opacity-100 hidden"
        >
          Marketing Bonus Agreement
        </Link> */}
        {/* <Link
          href={"/terms-and-conditions/super-ib-bonus-agreement"}
          className="hover:opacity-100 hidden"
        >
          Super IB Bonus Agreement
        </Link> */}
        {/* <Link
          href={"/terms-and-conditions/welcome-bonus-agreement"}
          className="hover:opacity-100 hidden"
        >
          Welcome Bonus Agreement
        </Link> */}
      </div>
      {/* <span className="font-bold">{t("line9")}</span>
      <div className="*:opacity-70 ps-5 flex flex-col font-semibold gap-3">
        <Link
          href={"/terms-and-conditions/cryptomania-contest"}
          className="hover:opacity-100"
        >
          {t("line10")}
        </Link>
      </div> */}
      <span className="font-bold">{t("line11")}</span>
      <div className="*:opacity-70 ps-5 flex flex-col font-semibold gap-3">
        <Link
          href={"/terms-and-conditions/account-packages"}
          className="hover:opacity-100"
        >
          {t("line12")}
        </Link>
        <Link
          href={"/terms-and-conditions/deposit-protection"}
          className="hover:opacity-100"
        >
          {t("line13")}
        </Link>
        <Link
          href={"/terms-and-conditions/edb-friends-referral-program"}
          className="hover:opacity-100"
        >
          {t("line14")}
        </Link>
        <Link
          href={"/terms-and-conditions/forex-copy-agreement"}
          className="hover:opacity-100"
        >
          {t("line15")}
        </Link>
      </div>
      <div className="*:opacity-80 flex flex-col font-bold gap-3">
        <Link
          href={"/terms-and-conditions/aml-policy"}
          className="hover:opacity-100"
        >
          {t("line16")}
        </Link>
        <Link
          href={"/terms-and-conditions/complaint-handling-policy"}
          className="hover:opacity-100"
        >
          {t("line17")}
        </Link>
        <Link
          href={"/terms-and-conditions/kyc-policy"}
          className="hover:opacity-100"
        >
          {t("line18")}
        </Link>
        <Link
          href={"/terms-and-conditions/order-execution-policy"}
          className="hover:opacity-100"
        >
          {t("line19")}
        </Link>
        <Link
          href={"/terms-and-conditions/privacy-policy"}
          className="hover:opacity-100"
        >
          {t("line20")}
        </Link>
        <Link
          href={"/terms-and-conditions/refund-policy"}
          className="hover:opacity-100"
        >
          {t("line21")}
        </Link>
        <Link
          href={"/terms-and-conditions/risk-disclosure"}
          className="hover:opacity-100"
        >
          {t("line22")}
        </Link>
        <Link
          href={"/terms-and-conditions/terms-of-use"}
          className="hover:opacity-100"
        >
          {t("line23")}
        </Link>
      </div>
    </div>
  );
};

export default SideBarPolicy;
