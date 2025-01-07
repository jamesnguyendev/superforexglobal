import Link from "next/link";
import React from "react";

const SideBarPolicy = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col font-semibold *:opacity-70 gap-3">
        <Link
          href={"/terms-and-conditions/public-offer-agreement"}
          className="hover:opacity-100"
        >
          Public Offer AgreeLinkment
        </Link>
        <Link
          href={"/terms-and-conditions/partnership-agreement"}
          className="hover:opacity-100"
        >
          Partnership Agreement
        </Link>
        <Link
          href={"/terms-and-conditions/mla-master-agreement"}
          className="hover:opacity-100"
        >
          MLA Master Agreement
        </Link>
        <Link
          href={"/terms-and-conditions/local-depositor-service-agreement"}
          className="hover:opacity-100"
        >
          Local Depositor service Agreement
        </Link>
      </div>
      <span className="font-bold">Bonuses</span>
      <div className="*:opacity-70 ps-5 flex flex-col font-semibold gap-3">
        <Link
          href={"/terms-and-conditions/extreme-hot-bonus"}
          className="hover:opacity-100"
        >
          10% HOT bonus
        </Link>
        <Link
          href={"/terms-and-conditions/energy-bonus-agreement"}
          className="hover:opacity-100"
        >
          Free Swap Agreement
        </Link>
        <Link
          href={"/terms-and-conditions/easy-deposit-bonus-agreement"}
          className="hover:opacity-100"
        >
          Give Away Agreement
        </Link>
        <Link
          href={"/terms-and-conditions/marketing-bonus-agreement"}
          className="hover:opacity-100 hidden"
        >
          Marketing Bonus Agreement
        </Link>
        <Link
          href={"/terms-and-conditions/super-ib-bonus-agreement"}
          className="hover:opacity-100 hidden"
        >
          Super IB Bonus Agreement
        </Link>
        <Link
          href={"/terms-and-conditions/welcome-bonus-agreement"}
          className="hover:opacity-100 hidden"
        >
          Welcome Bonus Agreement
        </Link>
      </div>
      <span className="font-bold">Contests</span>
      <div className="*:opacity-70 ps-5 flex flex-col font-semibold gap-3">
        <Link
          href={"/terms-and-conditions/cryptomania-contest"}
          className="hover:opacity-100"
        >
          CryptoMania Contest
        </Link>
      </div>
      <span className="font-bold">Services</span>
      <div className="*:opacity-70 ps-5 flex flex-col font-semibold gap-3">
        <Link
          href={"/terms-and-conditions/account-packages"}
          className="hover:opacity-100"
        >
          Account Packages
        </Link>
        <Link
          href={"/terms-and-conditions/deposit-protection"}
          className="hover:opacity-100"
        >
          Deposit Protection
        </Link>
        <Link
          href={"/terms-and-conditions/edb-friends-referral-program"}
          className="hover:opacity-100"
        >
          EDB Friends referral program
        </Link>
        <Link
          href={"/terms-and-conditions/forex-copy-agreement"}
          className="hover:opacity-100"
        >
          Forex Copy Agreement
        </Link>
      </div>
      <div className="*:opacity-80 flex flex-col font-bold gap-3">
        <Link
          href={"/terms-and-conditions/aml-policy"}
          className="hover:opacity-100"
        >
          AML policy
        </Link>
        <Link
          href={"/terms-and-conditions/complaint-handling-policy"}
          className="hover:opacity-100"
        >
          Complaint Handling Policy
        </Link>
        <Link
          href={"/terms-and-conditions/kyc-policy"}
          className="hover:opacity-100"
        >
          KYC policy
        </Link>
        <Link
          href={"/terms-and-conditions/order-execution-policy"}
          className="hover:opacity-100"
        >
          Order Execution Policy
        </Link>
        <Link
          href={"/terms-and-conditions/privacy-policy"}
          className="hover:opacity-100"
        >
          Privacy Policy
        </Link>
        <Link
          href={"/terms-and-conditions/refund-policy"}
          className="hover:opacity-100"
        >
          Refund Policy{" "}
        </Link>
        <Link
          href={"/terms-and-conditions/risk-disclosure"}
          className="hover:opacity-100"
        >
          Risk Disclosure
        </Link>
        <Link
          href={"/terms-and-conditions/terms-of-use"}
          className="hover:opacity-100"
        >
          Terms of Use
        </Link>
      </div>
    </div>
  );
};

export default SideBarPolicy;
