import { Container } from "@mui/material";
import React from "react";
import Button from "../components/buttonCustomize";
import Image from "next/image";
import Link from "next/link";

const BrokerHero = ({
  icon,
  title,
  content,
  subContent,
  link,
  img,
  reverse,
  buttonName,
}) => {
  return (
    <section className="my-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 text-default gap-6">
          <div
            className={`place-content-center md:order-2 ${
              reverse ? "order-2" : "order-1"
            }`}
          >
            <div className="flex items-center  ">
              <Image src={icon} width={80} height={80} alt={icon} />
              <h3 className="font-normal text-2xl">{title}</h3>
            </div>
            <p className="py-3">{content}</p>
            {subContent && (
              <>
                <br />
                <p className="pb-5">{subContent}</p>
              </>
            )}
            {buttonName && (
              <Link href={link} target="_blank">
                <Button name={buttonName} background={true} />
              </Link>
            )}
          </div>
          <div
            className={`place-content-center ${
              reverse ? "order-1" : "order-2"
            }`}
          >
            <Image
              src={img}
              width={560}
              height={330}
              alt="ib.webp"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BrokerHero;
