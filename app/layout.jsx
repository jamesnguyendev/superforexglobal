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
        <Script
          src="https://messenger.svc.chative.io/static/v1.0/channels/sfcbf7684-ecac-4057-b663-2d8393509d76/messenger.js?mode=livechat"
          defer="defer"
        ></Script>
      </body>
    </html>
  );
}
