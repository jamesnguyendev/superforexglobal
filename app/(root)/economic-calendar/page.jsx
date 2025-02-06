import { Container } from "@mui/material";
import React from "react";

const Page = () => {
  return (
    <Container>
      <div className="flex justify-center w-full mb-16">
        <iframe
          src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=33,14,4,34,38,32,6,11,51,5,39,72,60,110,43,35,71,22,36,26,12,9,37,25,178,10,17&calType=week&timeZone=2&lang=52"
          className="w-full h-screen"
          frameborder="0"
          allowtransparency="true"
          marginwidth="0"
          marginheight="0"
        ></iframe>
      </div>
    </Container>
  );
};

export default Page;
