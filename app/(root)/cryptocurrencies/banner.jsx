"use client";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import {
  Container,
  Stack,
  Typography,
  Card,
  Divider,
  Modal,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import Image from "next/image";
import Link from "next/link";

import Button from "../../components/buttonCustomize";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import CommissionIcon from "../../../public/svg-cryptocurrencies/commission.svg";
import DiscountsIcon from "../../../public/svg-cryptocurrencies/discounts.svg";
import FixedIcon from "../../../public/svg-cryptocurrencies/fixed.svg";
import AccountForm from "../../components/accountForm";

export default function Banner({
  imgDesktop,
  imgMobile,
  titleBanner,
  subTitleBanner,
  buttonName,
  textBannerColor,
  link,
  blank,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the 'md' breakpoint in Tailwind
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="">
      {/* Conditionally render based on window width */}
      {!isMobile ? (
        <>
          {/* Desktop */}
          <Image
            src={imgDesktop}
            width={11120}
            height={11120}
            className="min-h-[35rem] object-cover"
            alt={imgDesktop}
            draggable="false"
            loading="eager"
            quality={100}
          />
          <div className="absolute top-[37%] text-white font-semibold gap-y-2 pl-[6.2rem]">
            <h1
              className={`text-[2.5rem] leading-[3rem] max-w-[350px] ${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {titleBanner}
            </h1>
            <h2
              className={`pt-2 text-lg ${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {subTitleBanner}
            </h2>
            <div className="pt-6">
              <Link
                href={link ? link : "#register"}
                target={blank ? "_blank" : "_self"}
              >
                <Button name={buttonName} background={true} />
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Mobile */}
          <Image
            src={imgMobile}
            width={11120}
            height={11120}
            className="min-h-[35rem] object-cover"
            alt={imgMobile}
            quality={100}
          />
          <div className="text-default font-semibold gap-y-2 py-6 text-center">
            <h1 className="text-[2.5rem] leading-[3rem]">{titleBanner}</h1>
            <h2
              className={`pt-2 text-lg ${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {subTitleBanner}
            </h2>
            <div className="pt-6 flex justify-center">
              <Link
                href={link ? link : "#register"}
                target={blank ? "_blank" : "_self"}
              >
                <Button name={buttonName} background={true} />
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
}