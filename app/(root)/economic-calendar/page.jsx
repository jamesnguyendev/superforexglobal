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
  const widgetRef = useRef(null);
  const [localeCookie, setLocaleCookie] = useState("vi");

  console.log(localeCookie)
  
    useEffect(() => {
      const localeCookies = getCookie("NEXT_LOCALE_SUPERFOREX");
      setLocaleCookie(localeCookies);
    }, []);

  useEffect(() => {
    if (widgetRef.current) return; // Ngăn việc thêm script nếu đã tồn tại

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
      locale: "vi",
      importanceFilter: "-1,0,1",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
    });

    widgetRef.current = script; // Đánh dấu script đã được thêm
    document
      .querySelector(".tradingview-widget-container__widget")
      ?.appendChild(script);
  }, []);

  return (
    <Container>
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default TradingViewWidget;
