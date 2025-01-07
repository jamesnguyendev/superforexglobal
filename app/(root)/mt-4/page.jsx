"use client";

import Link from "next/link";
import React from "react";
import { Container } from "@mui/material";

const Page = () => {
  return (
    <Container>
      <div className="flex flex-col my-20 gap-4 ">
        <div className="grid grid-cols-12 gap-4 *:p-1">
          <h1 className="lg:col-span-3 lg:text-end col-span-12">Desktop</h1>
          <Link
            href={
              "https://download.mql5.com/cdn/web/superfin.corp/mt4/superfin4setup.exe"
            }
            download={true}
            className="text-primary underline w-full overflow-x-hidden hover:cursor-pointer hover:text-default col-span-12 lg:col-span-8 bg-slate-100 font-semibold border border-black"
          >
            https://download.mql5.com/cdn/web/superfin.corp/mt4/superfin4setup.exe
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-4 *:p-1">
          <h1 className="lg:col-span-3 lg:text-end col-span-12">Android:</h1>
          <Link
            href={
              "https://download.mql5.com/cdn/mobile/mt4/android?server=SuperFin-Demo,SuperFin-Live"
            }
            target="_blank"
            download={true}
            className="text-primary underline w-full overflow-x-hidden hover:cursor-pointer hover:text-default col-span-12 lg:col-span-8 bg-slate-100 font-semibold border border-black"
          >
            https://download.mql5.com/cdn/mobile/mt4/android?server=SuperFin-Demo,SuperFin-Live
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-4 *:p-1">
          <h1 className="lg:col-span-3 lg:text-end col-span-12">IOS:</h1>
          <Link
            href={
              "https://download.mql5.com/cdn/mobile/mt4/ios?server=SuperFin-Demo,SuperFin-Live"
            }
            target="_blank"
            className="text-primary underline hover:text-default  col-span-12 lg:col-span-8 bg-slate-100 font-semibold border border-black"
          >
            https://download.mql5.com/cdn/mobile/mt4/ios?server=SuperFin-Demo,SuperFin-Live
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Page;