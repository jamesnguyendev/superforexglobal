"use client";

import React from "react";
import { Container } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";

const TheBrokerOfChoice = ({ text }) => {
  const t = useTranslations("Tab1");
  return (
    <Container>
      <div className={"grid grid-cols-1 items-center gap-24 lg:grid-cols-2"}>
        <span className="flex justify-center">
          <img
            src="https://ik.imagekit.io/3idyffxxb/New%20Folder/illustration-shield.png?updatedAt=1735657589591"
            loading="lazy"
            width="446"
            height="462"
            decoding="async"
            data-nimg="1"
            alt="background round"
          />
        </span>
        <div className="flex flex-col items-start gap-y-6">
          <h2 className={"text-center text-5xl font-semibold text-default"}>
            {t("choice")}
          </h2>
          <p className={"m-0 font-normal"}>{t("byjoining")}</p>
          <div className="flex flex-col gap-y-2">
            <div className="inline-flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mt-[2px] shrink-0 text-primary"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <div className="ms-2 text-sm font-semibold text-default">
                {t("strongreputation")}
              </div>
            </div>
            <div className="inline-flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mt-[2px] shrink-0 text-primary"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <div className="ms-2 text-sm font-semibold text-default">
                {t("withdrawprofit")}
              </div>
            </div>
            <div className="inline-flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mt-[2px] shrink-0 text-primary"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <div className="ms-2 text-sm font-semibold text-default">
                {t("broadbonus")}
              </div>
            </div>
            <div className="inline-flex items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                className="mt-[2px] shrink-0 text-primary"
              >
                <path
                  d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm3.41 4.93L6.64 9.54 5.38 8.18a.7.7 0 0 0-.87-.04.61.61 0 0 0-.18.8l1.5 2.45c.15.22.41.36.69.36.28 0 .53-.14.68-.36.24-.31 4.82-5.78 4.82-5.78.6-.6-.13-1.15-.6-.68z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
              <div className="ms-2 text-sm font-semibold text-default">
                {t("convenient")}
              </div>
            </div>
          </div>
          <p className="m-0 font-normal">
            {t("findthefull")}
            {text ? text : null}
            <Link
              href="/terms-and-conditions/welcome-bonus-agreement"
              className={"text-primary "}
            >
              {t("termsandconditions")}
            </Link>
            {t("page")}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TheBrokerOfChoice;
