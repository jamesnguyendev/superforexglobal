import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Superforex",
  description: "Stock Project",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <NextIntlClientProvider messages={messages}>
          <NextTopLoader color="#3ECF8E" showSpinner={false} shadow={false} />
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
        <Script id="kommunicate" strategy="lazyOnload">
          {`
          (function(d, m){
              var kommunicateSettings = 
                  {"appId":"3aad40da961a4e1ffdfc68e7d63a159fb","popupWidget":true,"automaticChatOpenOnNavigation":true};
              var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
              s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
              var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
              window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
        `}
        </Script>
      </body>
    </html>
  );
}
