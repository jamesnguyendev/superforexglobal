import React from "react";
import bannerCert from "../../public/banner-cert.svg";
import { Container } from "@mui/material";
import Image from "next/image";

const BannerSvg = ({ title, subTitle }) => {
  return (
    <div className="relative overflow-hidden text-white">
      <Container>
        <div className="relative py-12 z-[2]">
          <h1 className="text-[32px] mb-2 text-start">{title}</h1>
          <h3 className="text-2xl mb-2 text-start text-white/70">
            {subTitle && subTitle}
          </h3>
        </div>
      </Container>
      <div className="absolute z-[1] top-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={bannerCert}
            alt="bannerCert"
            layout="fill"
            objectFit="cover"
            className="bg-center bg-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerSvg;
