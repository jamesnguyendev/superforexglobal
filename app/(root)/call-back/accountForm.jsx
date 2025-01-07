"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Stack, Typography, Card } from "@mui/material";

import { readNameCountry } from "../../utils/phoneContry";
import Buttontw from "../../components/buttonCustomize";

export default function AccountForm() {
  const [countries, setCountries] = useState(null);
  const [phoneCode, setPhoneCode] = useState("+213");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://api.first.org/data/v1/countries"
        );
        setCountries(Object.values(response.data.data));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <section className="" id={"register"}>
      <div className="mx-auto max-w-lg rounded-md p-4 shadow-lg">
        <form className={""}>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"full-name"} className={"flex-1"}>
                Full name
              </label>
            </div>
            <div className="flex-1">
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
              <label htmlFor={"Country"} className={"flex-1"}>
                Country
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
                    value={country.country}
                  >
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"Phone"} className={"flex-1"}>
                Phone
              </label>
            </div>
            <div className="flex-1">
              <input
                id={"Phone"}
                placeholder="Phone"
                className="input-component w-full"
                required={true}
                defaultValue={phoneCode}
              />
            </div>
          </div>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"Preferred contact time"} className={"flex-1"}>
                Preferred contact time
              </label>
            </div>
            <div className="flex-1">
              <select
                name=""
                id=""
                className="input-component w-full md:max-w-[18rem]"
              >
                <option className={"max-w-36"}>8:00 - 9:00 GMT-0</option>
                <option className={"max-w-36"}>9:00 - 10:00 GMT-0</option>
                <option className={"max-w-36"}>10:00 - 11:00 GMT-0</option>
                <option className={"max-w-36"}>11:00 - 12:00 GMT-0</option>
                <option className={"max-w-36"}>12:00 - 13:00 GMT-0</option>
                <option className={"max-w-36"}>13:00 - 14:00 GMT-0</option>
                <option className={"max-w-36"}>14:00 - 15:00 GMT-0</option>
                <option className={"max-w-36"}>15:00 - 16:00 GMT-0</option>
                <option className={"max-w-36"}>16:00 - 17:00 GMT-0</option>
                <option className={"max-w-36"}>17:00 - 18:00 GMT-0</option>
                <option className={"max-w-36"}>18:00 - 19:00 GMT-0</option>
              </select>
            </div>
          </div>
          <div className="md:flex w-full justify-center items-center mb-3">
            <div className="flex-1">
              <label htmlFor={"Login"} className={"flex-1"}>
                Login
              </label>
            </div>
            <div className="flex-1">
              <input
                id={"Phone"}
                type="number"
                placeholder={55555}
                className="input-component w-full"
                required={true}
              />
            </div>
          </div>
          <div className="md:flex w-full justify-center items-start mb-3">
            <div className="flex-1">
              <label htmlFor={"Anything else?"} className={"flex-1"}>
                Anything else?
              </label>
            </div>
            <div className="flex-1">
              <textarea
                id="Anything else?"
                className="input-component w-full"
                placeholder="Tell us more about your problem"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <Buttontw name={"Submit"} background={true} type={"submit"} />
          </div>
        </form>
      </div>
    </section>
  );
}
