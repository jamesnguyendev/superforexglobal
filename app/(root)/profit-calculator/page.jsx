"use client";
import { Container } from "@mui/material";
import { useEffect } from "react";

const ProfitCalculator = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.cashbackforex.com/Content/remote/remote-widgets.js";
    script.type = "text/javascript";
    script.async = true;

    script.onload = () => {
      if (typeof RemoteCalc === "function") {
        RemoteCalc({
          Url: "https://www.cashbackforex.com",
          TopPaneStyle:
            "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCAjZjVmNWY1KTsgYm9yZGVyOiBzb2xpZCAwcHg7IGJvcmRlci1ib3R0b206IG5vbmU7IGNvbG9yOiAjMzU0NjViOyBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwIDs=",
          BottomPaneStyle:
            "YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmNWY1ZjUsICNmM2YzZjMpOyBib3JkZXI6IHNvbGlkIDBweCAjN2E3YTdhOyBib3JkZXItdG9wOiBub25lOyBjb2xvcjogIzM1NDY1YjsgYm9yZGVyLXJhZGl1czogMCAwIDIwcHggMjBweDs=",
          ButtonStyle:
            "YmFja2dyb3VuZDogIzNlY2Y4ZTsgY29sb3I6IHdoaXRlOyBib3JkZXItcmFkaXVzOiAyMHB4OyBmb250LXdlaWdodDogYm9sZDs=",
          TextboxStyle:
            "YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IGNvbG9yOiAjMzU0NjViOyBib3JkZXI6IHNvbGlkIDFweCAjYWFhYWFh",
          HighlightColor: "#ffff00",
          IsDisplayTitle: false,
          IsShowChartLinks: false,
          IsShowEmbedButton: false,
          CompactType: "large",
          Calculator: "profit-calculator",
          ContainerId: "profit-calculator-607990",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container className="my-10">
      <div id="profit-calculator-607990" />
    </Container>
  );
};

export default ProfitCalculator;
