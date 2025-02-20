"use client";
import { Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const ProfitCalculator = () => {
  useEffect(() => {
    // Load the script dynamically
    const script = document.createElement("script");
    script.src =
      "https://www.cashbackforex.com/Content/remote/remote-widgets.js";
    script.async = true;
    script.onload = () => {
      if (window.RemoteCalc) {
        window.RemoteCalc({
          Url: "https://www.cashbackforex.com",
          TopPaneStyle:
            "background: linear-gradient(#1ba1c4 20%, #49b9ad 45%); border: solid 0px; border-bottom: none; color: white;",
          BottomPaneStyle:
            "background: white; border: solid 1px #7a7a7a; border-top: none; color: black;",
          ButtonStyle:
            "background: #1ba1c4; color: white; border-radius: 20px;",
          TitleStyle: "text-align: left; font-size: 40px; font-weight: 500;",
          TextboxStyle:
            "background-color: white; color: black; border: solid 1px #aaaaaa;",
          HighlightColor: "#ffff00",
          IsDisplayTitle: false,
          // IsShowChartLinks: true,
          // IsShowEmbedButton: true,
          CompactType: "large",
          Calculator: "profit-calculator",
          ContainerId: "profit-calculator-638865",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <div id="profit-calculator-638865"></div>
    </Container>
  );
};

export default ProfitCalculator;
