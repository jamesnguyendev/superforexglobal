"use client";

import { Container } from "@mui/material";
import Script from "next/script";
import React from "react";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "100%",
      colorTheme: "light",
      isTransparent: false,
      locale: "en",
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    });

    const container = document.querySelector(".tradingview-widget-container");
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <Container>
      <div className="flex justify-center w-full mb-16">
       

        <div className="tradingview-widget-container w-full h-full">
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-blue-500">
                Track all markets on TradingView
              </span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
