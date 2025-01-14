import React from "react";
import Button from "../components/buttonCustomize";
import Image from "next/image";
import Link from "next/link";

const Banner = ({
  imgDesktop,
  imgMobile,
  titleBanner,
  subTitleBanner,
  buttonName,
  textBannerColor,
  link = "/",
  blank,
  light,
}) => {
  return (
    <section className="relative max-h-screen min-w-full object-contain">
      {/* Desktop */}
      <Image
        src={imgDesktop}
        width={11120}
        height={11120}
        className="min-h-[35rem] object-cover w-full max-w-full md:block hidden"
        alt={imgDesktop}
        quality={100}
        draggable="false"
        loading="eager"
      />
      {/* Laptop */}
      {light ? (
        <div
          className={`absolute top-[37%] text-white pl-[1rem] font-semibold gap-y-2  md:block hidden max-w-[32rem]`}
        >
          <>
            <h1
              className={`text-[1.76rem] leading-[3rem] max-w-[400px] px-16  transform -skew-x-[20deg] bg-gradient-to-r from-yellow-300/5 via-primary to-yellow-300/5 ${
                textBannerColor ? "text-default" : ""
              } `}
            >
              {titleBanner}
            </h1>
            <h2
              className={`pt-2 text-lg font-normal px-16${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {subTitleBanner}
            </h2>
          </>
          <div className={"pt-6 px-16"}>
            <Link href={link} target={blank ? "_blank" : "_self"}>
              {buttonName && <Button name={buttonName} background={true} />}
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={`absolute top-[37%] text-white font-semibold gap-y-2 pl-[6.2rem] md:block hidden max-w-[32rem] `}
        >
          <>
            <h1
              className={`text-[2.5rem] leading-[3rem] max-w-[400px] ${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {titleBanner}
            </h1>
            <h2
              className={`pt-2 text-lg font-normal ${
                textBannerColor ? "text-default" : ""
              }`}
            >
              {subTitleBanner}
            </h2>
          </>
          <div className={"pt-6"}>
            <Link href={link} target={blank ? "_blank" : "_self"}>
              {buttonName && <Button name={buttonName} background={true} />}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile */}
      {imgMobile && (
        <Image
          src={imgMobile}
          width={11120}
          height={11120}
          className="md:hidden"
          alt={imgMobile}
          quality={100}
        />
      )}
      <div className="text-default font-semibold gap-y-2 md:hidden py-6 text-center">
        <h1 className={"text-[2.5rem] leading-[3rem] "}>{titleBanner}</h1>

        <h2
          className={`pt-2 text-lg font-normal ${
            textBannerColor ? "text-default" : ""
          }`}
        >
          {subTitleBanner}
        </h2>

        <div className={"pt-6 flex justify-center"}>
          <Link
            href={link ? link : "https://my.superforexs.com/auth/jwt/sign-in/"}
            target={blank ? "_blank" : "_self"}
          >
            {buttonName && <Button name={buttonName} background={true} />}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
