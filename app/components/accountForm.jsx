"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { readNameCountry } from "../utils/phoneContry";
import Button from "../components/buttonCustomize";
import { useTranslations } from "next-intl";
import { countries } from "../utils/contries";

const AccountForm = ({
  title,
  subTitle,
  data,
  option,
  background,
  showText,
  site,
  privacy,
  buttonName,
}) => {
  const t = useTranslations("AccountForm");

  // const [countries, setCountries] = useState(null);
  const [phoneCode, setPhoneCode] = useState("+213");

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.first.org/data/v1/countries",
  //       );
  //       setCountries(Object.values(response.data.data));
  //     } catch (error) {
  //       console.error("Error fetching countries:", error);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  return (
    <section className="text-default" id={"register"}>
      {showText && (
        <>
          <h2 className="mb-3 text-center text-5xl font-semibold text-default">
            {title && title}
          </h2>
          <p className="m-0 mb-12 text-center text-xl font-normal text-default">
            {subTitle && subTitle}
          </p>
        </>
      )}
      <div
        className={`mx-auto max-w-lg rounded-md p-4 shadow-lg ${
          background ? "bg-white" : ""
        }`}
      >
        <form className={""}>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"full-name"} className={"flex-1"}>
                {t("fullname")}
              </label>
            </div>
            <div className="flex-1 ms-3">
              <input
                id={"full-name"}
                placeholder="John Doe"
                className="input-component w-full"
                type="text"
                required={true}
              />
            </div>
          </div>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"Email"} className={"flex-1"}>
                {t("email")}
              </label>
            </div>
            <div className="flex-1">
              <input
                id={"Email"}
                placeholder="John@example.com"
                className="input-component w-full"
                required={true}
                type="email"
              />
            </div>
          </div>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"Country"} className={"flex-1"}>
                {t("country")}
              </label>
            </div>
            <div className="flex-1">
              <select
                name=""
                id="Country"
                className="input-component w-full md:max-w-[18rem]"
                onChange={(e) => setPhoneCode(readNameCountry(e.target.value))}
              >
                {countries?.map((country, index) => (
                  <option
                    key={index}
                    className={"max-w-36"}
                    value={country.idcountry}
                  >
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"City"} className={"flex-1"}>
                {t("city")}
              </label>
            </div>
            <div className="flex-1">
              <input
                id={"City"}
                placeholder="Your City"
                className="input-component w-full"
                required={true}
              />
            </div>
          </div>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"Phone"} className={"flex-1"}>
                {t("phone")}
              </label>
            </div>
            <div className="flex-1 relative">
              <input
                id={"Phone"}
                placeholder="Phone"
                className="bg-input border-0 outline-none ps-14 py-1.5 min-w-[18rem] rounded focus:ring-2 ring-primary w-full "
                required={true}
              />
              <span className="top-2 left-2 absolute">{phoneCode}</span>
            </div>
          </div>
          {option && (
            <>
              <div className="md:flex w-full justify-center items-center mb-3">
                <div className="flex-1">
                  <label htmlFor={"Account"} className={"flex-1"}>
                    {t("account")}
                  </label>
                </div>
                <div className="flex-1">
                  <select
                    name=""
                    id=""
                    className="input-component w-full md:max-w-[18rem]"
                  >
                    {data?.map((item, index) => (
                      <option className={"max-w-36"} key={index}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="md:flex w-full justify-center items-center mb-3">
                <div className="flex-1">
                  <label htmlFor={"Account"} className={"flex-1"}>
                    {t("currency")}
                  </label>
                </div>
                <div className="flex-1">
                  <select
                    name=""
                    id=""
                    className="input-component w-full md:max-w-[18rem]"
                  >
                    <option className={"max-w-36"}>USD</option>
                    <option className={"max-w-36"}>EUR</option>
                    <option className={"max-w-36"}>GBP</option>
                    <option className={"max-w-36"}>CNY</option>
                  </select>
                </div>
              </div>
            </>
          )}
          {site && (
            <>
              <div className="md:flex w-full justify-center items-center mb-3">
                <div className="flex-1">
                  <label htmlFor={"Affiliate"} className={"flex-1"}>
                    {t("affiliatecode")}
                  </label>
                </div>
                <div className="flex-1 relative">
                  <input
                    id={"Affiliate"}
                    placeholder="ABCD123"
                    className="bg-input border-0 outline-none ps-3 py-1.5 min-w-[18rem] rounded focus:ring-2 ring-primary w-full "
                    required={true}
                  />
                </div>
              </div>
              <div className="md:flex w-full justify-center items-center mb-3">
                <div className="flex-1">
                  <label htmlFor={"Preferred"} className={"flex-1"}>
                    {t("preferredsite")}
                  </label>
                </div>
                <div className="flex-1 relative">
                  <input
                    id={"Preferred"}
                    placeholder="Preferred site name"
                    className="bg-input border-0 outline-none ps-3 py-1.5 min-w-[18rem] rounded focus:ring-2 ring-primary w-full "
                    required={true}
                  />
                  <span className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 pointer-events-none">
                    .superforex.uk
                  </span>
                </div>
              </div>
            </>
          )}
          {privacy ? (
            <p className={"font-normal text-[13px] pt-2"}>
              {t("bycreating")}
              <a href="" className={"text-primary"}>
                {t("publicoffer")}
              </a>
              {t("formore")}
              <a href="" className={"text-primary"}>
                {t("SuperForexsprivacy")}
              </a>
              {t("practices")}
            </p>
          ) : null}
          <div className="flex justify-end mt-5">
            <Button
              name={buttonName ? buttonName : t("openaccount")}
              background={true}
              type={"submit"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountForm;
