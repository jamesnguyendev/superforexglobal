"use client";
import { Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const TradingViewWidget = () => {
  const intervalRef = useRef(null);
  const [localeCookie, setLocaleCookie] = useState();

  console.log(localeCookie);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const temp = getCookie("NEXT_LOCALE_SUPERFOREX");
      const newLocale = temp == "vi" ? "vi_VN" : temp;
      console.log(newLocale);
      setLocaleCookie((prev) => (prev !== newLocale ? newLocale : prev));
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!localeCookie) return; // Chỉ chạy khi localeCookie có giá trị
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    if (container) container.innerHTML = ""; // Xóa widget cũ trước khi thêm mới

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "800",
      colorTheme: "light",
      isTransparent: false,
      locale: localeCookie,
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    });

    container.appendChild(script);
  }, [localeCookie]);

  return (
    <Container>
      <div className="tradingview-widget-container my-10">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </Container>
  );
};

export default TradingViewWidget;
